import { writable, Writable } from "svelte/store";
import type { LoggedInStore } from "../types";

export const loggedInStore: Writable<LoggedInStore> = writable({
  isLoggedIn: false,
  isLoggingIn: false,
});
