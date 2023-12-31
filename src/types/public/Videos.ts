// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.videos */
export type VideosId = number & { __brand: 'VideosId' };

/** Represents the table public.videos */
export default interface Videos {
  id: VideosId;

  title: string;

  url: string;

  length: number | null;
}

/** Represents the initializer for the table public.videos */
export interface VideosInitializer {
  /** Default value: nextval('videos_id_seq'::regclass) */
  id?: VideosId;

  title: string;

  url: string;

  length?: number | null;
}

/** Represents the mutator for the table public.videos */
export interface VideosMutator {
  id?: VideosId;

  title?: string;

  url?: string;

  length?: number | null;
}
