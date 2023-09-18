import { execQuery } from "./execQuery";
import { createDB } from "./createDB";

export async function setupDB() {
  await createDB();
  // drop existing tables/schema
  await execQuery(/* SQL */ `
        -- DROP TABLE IF EXISTS upcoming_shows;
        -- DROP TABLE IF EXISTS links;
        DROP TABLE IF EXISTS videos;
        -- DROP TABLE IF EXISTS album_pics;
        -- DROP TABLE IF EXISTS tracklist;
        DROP TABLE IF EXISTS pics;
        -- DROP TABLE IF EXISTS albums;
        DROP TABLE IF EXISTS songs;`);

  // CREATE TABLE songs (
  // 	id SERIAL PRIMARY KEY,
  // 	title varchar(255) NOT NULL,
  // 	url varchar(255) UNIQUE NOT NULL,
  // 	length integer NOT NULL
  // 	);

  //   CREATE TABLE albums (
  //   	id SERIAL PRIMARY KEY,
  //   	title varchar(255) NOT NULL
  //   	);

  //   CREATE TABLE tracklist (
  //   	id SERIAL PRIMARY KEY,
  //   	song_id integer [pk, ref: "songs"."id"],
  //   	album_id [pk, ref: "ablums"."id"]
  //   	);

  //   CREATE TABLE pics (
  //   	id SERIAL PRIMARY KEY,
  //   	name varchar(255) UNIQUE NOT NULL,
  //   	url varchar(255) UNIQUE NOT NULL
  //   	);

  //   CREATE TABLE album_pics (
  //   	id SERIAL PRIMARY KEY,
  //   	album_id integer [pk, ref: "albums"."id"],
  //   	pic_id integer [pk, ref: "pics"."id"]
  //   	);

  //   CREATE TABLE videos (
  //   	id SERIAL PRIMARY KEY,
  //   	title varchar(255) NOT NULL,
  //   	url varchar(255) UNIQUE NOT NULL,
  //   	length integer
  //   	);

  //   CREATE TABLE links (
  //   	id SERIAL PRIMARY KEY,
  //   	title varchar(255) UNIQUE NOT NULL,
  //   	url varchar(255) UNIQUE NOT NULL,
  //   	logo varchar(255) UNIQUE NOT NULL
  //   	);

  //   CREATE TABLE upcoming_shows (
  //   	id SERIAL PRIMARY KEY,
  //   	title varchar(255) NOT NULL,
  //   	location varchar(255) NOT NULL,
  //   	date integer NOT NULL
  //   	);

  await execQuery(/* SQL */ `
        CREATE TABLE songs (
            id SERIAL PRIMARY KEY,
            title varchar(255) NOT NULL,
            url varchar(255) UNIQUE NOT NULL
        );

        -- CREATE TABLE albums (
        --     id SERIAL PRIMARY KEY,
        --     title varchar(255) NOT NULL
        -- );

        -- CREATE TABLE tracklist (
        --     id SERIAL PRIMARY KEY,
        --     song_id integer REFERENCES songs(id),
        --     album_id integer REFERENCES albums(id)
        -- );

        CREATE TABLE pics (
            id SERIAL PRIMARY KEY,
            name varchar(255) UNIQUE NOT NULL,
            url varchar(255) UNIQUE NOT NULL
        );

        -- CREATE TABLE album_pics (
        --     id SERIAL PRIMARY KEY,
        --     album_id integer REFERENCES ablums(id),
        --     pic_id integer REFERENCES pics(id)
        -- );

        CREATE TABLE videos (
            id SERIAL PRIMARY KEY,
            title varchar(255) NOT NULL,
            url varchar(255) UNIQUE NOT NULL
        );

        -- CREATE TABLE links (
        --     id SERIAL PRIMARY KEY,
        --     title varchar(255) UNIQUE NOT NULL,
        --     url varchar(255) UNIQUE NOT NULL,
        --     logo varchar(255) UNIQUE NOT NULL
        -- );

        -- CREATE TABLE upcoming_shows (
        --     id SERIAL PRIMARY KEY,
        --     title varchar(255) NOT NULL,
        --     location varchar(255) NOT NULL,
        --     date integer NOT NULL
        -- );
    `);
}
