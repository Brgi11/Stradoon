import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import ffmpegPath from "ffmpeg-static";

const imagesDir = path.join(process.cwd(), "public", "images");

// [source file, output file] — outputs are web-friendly, muted, faststart H.264 mp4s.
const jobs = [
  ["copy_299F9A3E-F46F-4BD9-B15C-FCDCAA2C7132.MOV", "pasta-hero.mp4"],
  ["Video web-2.mp4", "breakfast-hero.mp4"],
  ["video 2.mp4", "cocktail-hero.mp4"]
];

for (const [src, out] of jobs) {
  const input = path.join(imagesDir, src);
  const output = path.join(imagesDir, out);

  if (!existsSync(input)) {
    console.warn(`! Skipping (not found): ${src}`);
    continue;
  }

  console.log(`> Encoding ${src} -> ${out}`);
  const result = spawnSync(
    ffmpegPath,
    [
      "-y",
      "-i", input,
      "-an", // drop audio (videos autoplay muted)
      "-vf", "scale='min(1280,iw)':-2", // cap width at 1280px
      "-c:v", "libx264",
      "-profile:v", "high",
      "-pix_fmt", "yuv420p",
      "-preset", "slow",
      "-crf", "28",
      "-movflags", "+faststart",
      output
    ],
    { stdio: "inherit" }
  );

  if (result.status !== 0) {
    console.error(`! Failed: ${src}`);
    process.exitCode = 1;
  }
}

console.log("Done.");
