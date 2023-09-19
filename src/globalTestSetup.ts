import { setupDB } from "./db/setupDB";
import { execQuery } from "./db/execQuery";

import { app } from "./server/app";

export default async () => {
  process.env.DATABASE_URL =
    "postgres://postgres:postgres@localhost:5432/band-test";
  const TEST_PORT = 3000;

  await setupDB();
  await execQuery(/* SQL */ `
          INSERT INTO songs (title, url)
          values
            ('Song 1', 'URL 1'),
            ('Song 2', 'URL 2'),
            ('Song 3', 'URL 3'),
            ('Song 4', 'URL 4')
        `);
  await execQuery(/* SQL */ `
          INSERT INTO videos (title, url)
          values
            ('Video 1', 'URL 1'),
            ('Video 2', 'URL 2'),
            ('Video 3', 'URL 3'),
            ('Video 4', 'URL 4')
        `);
  await execQuery(/* SQL */ `
          INSERT INTO pics (name, url)
          values
            ('Pic 1', 'URL 1'),
            ('Pic 2', 'URL 2'),
            ('Pic 3', 'URL 3'),
            ('Pic 4', 'URL 4')
          `);

  // Makes sure this runs before any thing after it runs

  //   return new Promise<void>((resolve) => {
  //     app.listen(TEST_PORT, () => {
  //       console.log(`Test server is listening at http://localhost:${TEST_PORT}`);
  //       resolve();
  //     });
  //   });
};
