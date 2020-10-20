<script lang="ts">
  import { client } from "./gql/client";
  import { setClient } from "svelte-apollo";
  setClient(client);
</script>

<h1 class="text-5xl">SAVELIST</h1>
