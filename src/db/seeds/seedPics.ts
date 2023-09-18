import { faker } from "@faker-js/faker";
import { execQuery } from "../execQuery";

const SEED_PIC_COUNT = parseInt(process.env.SEED_PIC_COUNT || "10");

export async function seedPics() {
  for (let i = 0; i < SEED_PIC_COUNT; i++) {
    await execQuery(
      /* SQL */ `
            INSERT INTO pics (name, url)
            VALUES ($1, $2)
            `,
      [faker.image.urlPlaceholder(), faker.image.url()]
    );
  }
}
