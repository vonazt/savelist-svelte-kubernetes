<script lang="ts">
  // import FileSaver from "file-saver";
  import { mutation } from "svelte-apollo";
  import { SAVE_PLAYLIST } from "../../gql";
  import { loggedInStore } from "../../auth/authStore";
  import { handleGraphQLError } from "../../utils";

  import type { SavedPlaylist, SpotifyOwner } from "../../types";

  export let name: string;
  export let id: string;
  export let owner: SpotifyOwner;
  export let url: string;

  const savePlaylist = mutation(SAVE_PLAYLIST);

  const handleSavePlaylist = async (id: string) => {
    try {
      const data = (await savePlaylist({
        variables: { id },
      })) as { savePlaylist: string };

      const decodedData = (data.savePlaylist);
      console.log('decoded data is', decodedData)

      // const blob = new Blob([decodedData], { type: `text/csv;charset=utf-8` });
      // FileSaver.saveAs(blob, `${name}.csv`);
    } catch (err) {
      console.error(err)
      handleGraphQLError(err, loggedInStore);
    }
  };
</script>

<div class="relative">
  <h2 class="mx-4 mt-2 italic text-xl font-bold w-8/12 leading-tight">
    <a href={url} target="_blank" rel="noopener noreferrer"> {' '} {name} </a>
  </h2>
  <h4 class="text-sm italic mx-4 mb-4 text-gray-400">
    by{' '}
    <a
      href={owner.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer">
      {' '}
      {owner.display_name}
    </a>
  </h4>
  <button
    class="font-bold bg-spotifyGreen absolute top-0 right-0 mr-4 p-1 rounded clear-left"
    on:click={() => handleSavePlaylist(id)}>
    save
  </button>
</div>

<!-- <button
class="font-bold bg-spotifyGreen absolute top-0 right-0 mr-4 p-1 rounded clear-left"
onClick={() => handleSavePlaylist(id)}
disabled={savingPlaylist}
>
{#if savingPlaylist}
  <LoadingSpinner />
{:else}save{/if}
</button> -->

<!-- if (savedPlaylist) {
 
} -->
