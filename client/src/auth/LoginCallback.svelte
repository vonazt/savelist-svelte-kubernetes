<script>
  import { onMount } from "svelte";

  import { navigate } from "svelte-routing";
  let accessTokenSet = false;

  onMount(() => {
    const accessToken = new URL(document.location).searchParams.get(`code`);
    localStorage.setItem(`accessToken`, accessToken);
    accessTokenSet = true;
    navigate(`/`);
  });
</script>

{#if !accessTokenSet}
  <h1>Logging in</h1>
{/if}
