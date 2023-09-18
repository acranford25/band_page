import { faker } from "@faker-js/faker";
import { execQuery } from "../execQuery";

const SEED_VIDEO_COUNT = parseInt(process.env.SEED_VIDEO_COUNT || "5");

export async function seedVideos() {
  for (let i = 0; i < SEED_VIDEO_COUNT; i++) {
    await execQuery(
      /* SQL */ `
            INSERT INTO videos (title, url)
            VALUES ($1, $2)
            `,
      [faker.music.songName(), faker.internet.url()]
    );
  }
}
