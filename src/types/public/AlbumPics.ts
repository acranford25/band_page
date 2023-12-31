// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { AlbumsId } from './Albums';
import type { PicsId } from './Pics';

/** Identifier type for public.album_pics */
export type AlbumPicsId = number & { __brand: 'AlbumPicsId' };

/** Represents the table public.album_pics */
export default interface AlbumPics {
  id: AlbumPicsId;

  album_id: AlbumsId | null;

  pic_id: PicsId | null;
}

/** Represents the initializer for the table public.album_pics */
export interface AlbumPicsInitializer {
  /** Default value: nextval('album_pics_id_seq'::regclass) */
  id?: AlbumPicsId;

  album_id?: AlbumsId | null;

  pic_id?: PicsId | null;
}

/** Represents the mutator for the table public.album_pics */
export interface AlbumPicsMutator {
  id?: AlbumPicsId;

  album_id?: AlbumsId | null;

  pic_id?: PicsId | null;
}
