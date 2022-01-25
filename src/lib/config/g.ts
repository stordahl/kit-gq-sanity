import { GFetch } from "@leveluptuts/g-query";

export const g = new GFetch({
  path: import.meta.env.VITE_GRAPHQL_ENDPOINT.toString()
})