<script>
  import { loggedInStore } from "../auth/authStore";
  import LoginLink from "../auth/LoginLink.svelte";

  let loggedIn;

  loggedInStore.subscribe((store) => {
    loggedIn = store.loggedIn;
  });
 
  if (localStorage.getItem(`accessToken`))
    loggedInStore.update(() => ({
      loggedIn: true,
    }));
    console.log('logged in', loggedIn)
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
  {/if}
  <!-- {isLoggingIn || (isLoggedIn && loading) ? (
    window.innerWidth <= 640 ? (
      <LoadingSkeleton />
    ) : window.innerWidth <= 768 ? (
      <div class="grid gap-4 grid-cols-2 grid-rows-2">
        {Array.from(Array(4), (_, i) => (
          <LoadingSkeleton key={i} />
        ))}
      </div>
    ) : (
      <div class="grid gap-4 grid-cols-3 grid-rows-3">
        {Array.from(Array(6), (_, i) => (
          <LoadingSkeleton key={i} />
        ))}
      </div>
    )
  ) : (
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
