import { z } from 'zod';

export const PERSISTED_URL_PARAMS_LOCAL_STORAGE_KEY = 'persistedUrlParams';

// a schema that can be used to validate that the persisted url params data is in the shape we expect
export const PersistedUrlParamsDataSchema = z.object({
  params: z.record(z.string(), z.any()),
  timestamp: z.number()
});

export type PersistedUrlParamsData = z.infer<
  typeof PersistedUrlParamsDataSchema
>;
