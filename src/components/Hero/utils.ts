import fs from "node:fs";
import path from "node:path";

const VIDEO_DIR = path.join(process.cwd(), "public", "images", "hero");
const COMPATIBLE_VIDEO_EXTENSIONS = new Set([".mp4", ".webm"]);

export const getHeroVideoSources = () => {
  let filenames: string[];

  try {
    filenames = fs.readdirSync(VIDEO_DIR);
  } catch {
    return [];
  }

  return filenames
    .filter((filename) =>
      COMPATIBLE_VIDEO_EXTENSIONS.has(path.extname(filename).toLowerCase()),
    )
    .toSorted()
    .map((filename) => `/images/hero/${filename}`);
};
