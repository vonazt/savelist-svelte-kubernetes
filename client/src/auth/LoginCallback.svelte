<script>
  import qs, { ParsedQs } from "qs";
  import { navigate } from "svelte-routing";

  const searchParams = new URLSearchParams(window.location.search);

  let accessTokenSet = false;

  $: {
    const { access_token } = qs.parse(searchParams, {
      ignoreQueryPrefix: true,
    });
    localStorage.setItem(`accessToken`, access_token);
    accessTokenSet = true;
  }
</script>

<!-- const { search } = useLocation();
  const [isAccessTokenSet, setIsAccessTokensSet] = useState<boolean>(false);

  useEffect(() => {
    const { access_token }: ParsedQs = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    localStorage.setItem(`accessToken`, access_token as string);
    setIsAccessTokensSet(true);
  }, [search]); -->

{#if accessTokenSet}
  {navigate(`/`)}
{:else}
  <h1>Logging in</h1>
{/if}

<!-- isAccessTokenSet ? <Redirect to={`/`} /> : <h1>Logging in</h1>; -->
