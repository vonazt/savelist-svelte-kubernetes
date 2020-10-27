import type { ApolloError } from "@apollo/client";
import type { Writable } from "svelte/store";
import type { LoggedInStore } from "../types";

export const handleGraphQLError = (
  error: ApolloError,
  loggedInStore: Writable<LoggedInStore>
) => {
  if (
    error?.graphQLErrors.some(({ message }) =>
      message.startsWith(`Access token and refresh token have expired`)
    )
  ) {
    localStorage.removeItem(`accessToken`);
    loggedInStore.update(() => ({ loggedIn: false }));
  }
};
