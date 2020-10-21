<script lang="ts">
  import { loggedInStore } from "./authStore";
  import type { LoggedInStore } from "../types";

  const handleClick = (): void =>
    loggedInStore.update(
      (loggedInStore): LoggedInStore => ({
        ...loggedInStore,
        isLoggingIn: true,
      })
    );
</script>

<div class="flex justify-center">
  <a
    href="http://localhost:8000/login"
    class="bg-spotifyGreen p-3 rounded-sm"
    on:click={handleClick}>
    Get my playlists
  </a>
</div>
