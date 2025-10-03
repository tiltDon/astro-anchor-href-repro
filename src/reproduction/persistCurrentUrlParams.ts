import { z } from 'zod';
import { PERSISTED_URL_PARAMS_LOCAL_STORAGE_KEY, type PersistedUrlParamsData } from './types';

interface PersistUrlParamsParams {
  onError?: (error: unknown, data: PersistedUrlParamsData) => void;
}

// used to persist URL params to session storage on arrival, generally so that
// we can use them when linking across TLD and subdomains to enable attribution
// across different web properties
export function persistCurrentUrlParams(fnParams?: PersistUrlParamsParams) {
  // if not in a browser, return
  if (typeof window === 'undefined') return;
  const params = window.location.search;

  // if there are no params, return
  if (!params || params === '') return;

  const currentParamsAsObject = Object.fromEntries(
    new URLSearchParams(params).entries()
  );
  // create a data object containing the current params, and a timestamp
  const data: PersistedUrlParamsData = {
    params: currentParamsAsObject,
    timestamp: Date.now()
  };

  // persist the URL params to local storage
  try {
    localStorage.setItem(
      PERSISTED_URL_PARAMS_LOCAL_STORAGE_KEY,
      JSON.stringify(data)
    );
  } catch (error) {
    // if an error handler was provided, call it
    if (fnParams?.onError) {
      fnParams.onError(error, data);
    }
  }
}
