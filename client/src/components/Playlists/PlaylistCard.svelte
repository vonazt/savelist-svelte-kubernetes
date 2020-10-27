<script lang="ts">
  import PlaylistImage from "./PlaylistImage.svelte";
  import PlaylistHeader from "./PlaylistHeader.svelte";
  import type { SpotifyPlaylist } from "../../types";

  export let playlist: SpotifyPlaylist;

  const formatTracksTotal = (total: number): string =>
    total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
</script>

<div class="border-4 border-spotifyGreen rounded m-4 pb-4">
  <PlaylistImage
    images={playlist.images}
    openSpotifyUrl={playlist.external_urls.spotify} />
  <div class="divide-y divide-gray-400 mx-4">
    <PlaylistHeader
      name={playlist.name}
      id={playlist.id}
      owner={playlist.owner}
      url={playlist.external_urls.spotify} />
    <h3 class="mx-4 py-2">
      Tracks:
      {formatTracksTotal(playlist.tracks.total)}
    </h3>
    <p class="italic mx-4 py-2">
      {@html playlist.description}
    </p>
  </div>
</div>
