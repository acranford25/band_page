// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.albums */
export type AlbumsId = number & { __brand: 'AlbumsId' };

/** Represents the table public.albums */
export default interface Albums {
  id: AlbumsId;

  title: string;
}

/** Represents the initializer for the table public.albums */
export interface AlbumsInitializer {
  /** Default value: nextval('albums_id_seq'::regclass) */
  id?: AlbumsId;

  title: string;
}

/** Represents the mutator for the table public.albums */
export interface AlbumsMutator {
  id?: AlbumsId;

  title?: string;
}