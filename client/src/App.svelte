<script lang="ts">
  import client from "./gql/client";
  import { setClient } from "svelte-apollo";
  import { Router, Route } from "svelte-routing";
  import Home from "./components/Home.svelte";
  import LoginCallback from "./auth/LoginCallback.svelte";
  setClient(client);
</script>

<Router>
  <Route path="/login_callback" component={LoginCallback} />
  <Route path="/" component={Home} />
</Router>
