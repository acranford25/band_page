import { seedPics } from "./seeds/seedPics";
import { seedSongs } from "./seeds/seedSongs";
import { seedVideos } from "./seeds/seedVideos";

export async function seedDB() {
  await seedPics();
  await seedSongs();
  await seedVideos();
}
