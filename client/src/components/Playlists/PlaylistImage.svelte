<script lang="ts">
  import type { SpotifyImage } from "../../types";

  export let images: SpotifyImage[];
  export let openSpotifyUrl: string;

 let isShowPlayIcon: boolean = false;

</script>

<div class="flex content-center justify-center relative">
  {#if isShowPlayIcon || window.innerWidth <= 1024}
    <a
      href={openSpotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      class={`absolute self-center z-10 border-2 ${window.innerWidth <= 1024 ? `p-6` : `p-8`} rounded-full bg-black bg-opacity-50`}
      on:mouse-enter={() => isShowPlayIcon = true}
      on:mouse-leave={() => isShowPlayIcon = false}>
      <i
        class="fas faPlay" />
    </a>
  {:else}
    <a
      href={openSpotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      class={`text-transparent rounded bg-no-repeat bg-center bg-cover w-48 h-48 my-2`}
      on:mouse-enter={() => isShowPlayIcon = true}
      on:mouse-leaveonMouseLeave={() => isShowPlayIcon = false}>
      Link to Spotify playlist
    </a>
  {/if}
</div>

<!-- style={{
  backgroundImage: `url(${
    images.length
      ? images[0].url
      : `https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_1600/msfgxy64htxbaki9up4e.png`
  })`,
}} -->