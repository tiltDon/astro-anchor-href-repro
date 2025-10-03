import {
  PERSISTED_URL_PARAMS_LOCAL_STORAGE_KEY,
  PersistedUrlParamsDataSchema,
  type PersistedUrlParamsData,
} from "./types.ts";

interface GetPersistedUrlParamsParams {
  onError?: (error: unknown) => void;
}

// checks local storage for persisted URL params, within the allowable max age,
// returned as an object (else null if not found or error)
export function getPersistedUrlParams(
  fnParams?: GetPersistedUrlParamsParams
): PersistedUrlParamsData["params"] | null {
  // if not in a browser, return null
  if (typeof window === "undefined") return null;
  // else check local storage for persisted url params data
  const persistedUrlParamsRawData = localStorage.getItem(
    PERSISTED_URL_PARAMS_LOCAL_STORAGE_KEY
  );
  // if there is no data, return null
  if (persistedUrlParamsRawData === null) return null;
  // else parse and reuturn the params data
  const persistedUrlParamsData: PersistedUrlParamsData = JSON.parse(
    persistedUrlParamsRawData
  );
  return persistedUrlParamsData.params;
}
