<script>
  import LoadingSkeleton from './LoadingSkeleton.svelte'
</script>


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
