<script>
  import { from } from "@apollo/client";
  import { loggedInStore } from "../auth/authStore";
  import { query } from "svelte-apollo";
  import { LIST_PLAYLISTS } from "../gql";
  import LoginLink from "../auth/LoginLink.svelte";
  import { LoadingSkeleton } from "./Loading";

  let loggedIn;

  loggedInStore.subscribe((store) => {
    loggedIn = store.loggedIn;
  });

  if (localStorage.getItem(`accessToken`))
    loggedInStore.update(() => ({
      loggedIn: true,
    }));

  const playlistsQuery = query(LIST_PLAYLISTS);

  $: playlistsData = {
    allPlaylists: $playlistsQuery.data?.listPlaylists,
    filteredPlaylists: $playlistsQuery.data?.listPlaylists,
    offsetPlaylists: $playlistsQuery.data?.listPlaylists.slice(0, 12),
  };

  $: console.log("play lists data", playlistsData);
</script>

<div class="container mx-auto mb-8">
  <h1 class="text-4xl italic text-center m-4 lg:m-5 font-extrabold">
    Savelist
  </h1>
  <h2 class="lg:text-xl text-center mb-5 italic text-gray-600 font-bold">
    Save your Spotify playlists as .csv files
  </h2>
  {#if !loggedIn}
    <LoginLink />
  {:else if loggedIn && $playlistsQuery.loading}
    {#if window.innerWidth <= 640}
      <LoadingSkeleton />
    {:else if window.innerWidth <= 768}
      <div class="grid gap-4 grid-cols-2 grid-rows-2">
        {#each Array.from(Array(4)) as _}
          <LoadingSkeleton />
        {/each}
      </div>
    {:else}
      <div class="grid gap-4 grid-cols-3 grid-rows-3">
        {#each Array.from(Array(6)) as _}
          <LoadingSkeleton />
        {/each}
      </div>
    {/if}
  {:else}
    {#each playlistsData.allPlaylists as playlist}
      <h1>{playlist.name}</h1>
    {/each}
  {/if}
  <!-- {isLoggingIn || (isLoggedIn && loading) ? (
    isLoggedIn && (
      <Fragment>
        <Search
          playlists={playlists}
          setPlaylists={setPlaylists}
          setOffset={setOffset}
        />
        <div
          class={`grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-${Math.ceil(
            playlists.offsetPlaylists.length / 2
          )} lg:grid-cols-3 lg:grid-rows-${Math.ceil(
            playlists.offsetPlaylists.length / 3
          )}`}
        >
          {playlists?.offsetPlaylists.map((playlist: SpotifyPlaylist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
        <PlaylistNavigation
          offset={offset}
          setOffset={setOffset}
          playlists={playlists}
        />
      </Fragment>
    )
  )} -->
</div>
