import { getPersistedUrlParams } from './getPersistedUrlParams.ts';

interface MergePersistedUrlParamsWithUrlParams {
  url: string;
}

// accepts a URL object, merges persisted URL params if found, returns URL object
export function mergePersistedUrlParamsWithUrl(
  fnParams: MergePersistedUrlParamsWithUrlParams
): string {
  // Get persisted params if exists
  const persistedUrlParams = getPersistedUrlParams();
  // if none found, return original URL
  if (persistedUrlParams === null) {
    return fnParams.url;
  }

  // create a URL object from the provided URL
  const newUrl = new URL(fnParams.url);
 // iterate through the persisted URL params
  Object.entries(persistedUrlParams).forEach(([key, value]) => {
    // add the persisted param to the URL if it does not already exist
    if (!newUrl.searchParams.has(key)) {
      newUrl.searchParams.set(key, value);
    }
  });

  return newUrl.toString()
}
