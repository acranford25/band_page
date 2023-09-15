import { Client } from "pg";

export async function createDB() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Missing env var: DATABASE_URL");
  }

  const databaseUrl = new URL(process.env.DATABASE_URL);
  const postgresUrl = databaseUrl.href.slice(
    0,
    databaseUrl.href.length - databaseUrl.pathname.length
  );
  const databaseName = databaseUrl.pathname.slice(1);
  const client = new Client(postgresUrl);

  try {
    await client.connect();

    await client
      .query(/* SQL */ `CREATE DATABASE "${databaseName}"`)
      .then(() => {
        console.log(`Created database ${databaseName}`);
      })
      .catch((error) => {
        if (error.message.includes("already exists")) {
          console.log("Database already exists.");
        } else {
          throw error;
        }
      });
  } finally {
    await client.end();
  }
}
