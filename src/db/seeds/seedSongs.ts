import { faker } from "@faker-js/faker";
import { execQuery } from "../execQuery";

const SEED_SONG_COUNT = parseInt(process.env.SEED_SONG_COUNT || "10");

export async function seedSongs() {
  for (let i = 0; i < SEED_SONG_COUNT; i++) {
    await execQuery(
      /* SQL */ `
            INSERT INTO songs (title, url)
            VALUES ($1, $2)
            `,
      [faker.music.songName(), faker.internet.url()]
    );
  }
}
