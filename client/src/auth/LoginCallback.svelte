<script>
  import { onMount } from "svelte";

  import { navigate } from "svelte-routing";

  onMount(() => {
    const accessToken = new URL(document.location).searchParams.get(`access_token`);
    localStorage.setItem(`accessToken`, accessToken);
    navigate(`/`);
  });
</script>

<h1>Logging in</h1>
