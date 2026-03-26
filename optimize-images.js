const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "public/images/produtos/cobertura-retratil";

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      await optimizeImages(fullPath);
    } else {
      if (
        fullPath.toLowerCase().endsWith(".jpg") ||
        fullPath.toLowerCase().endsWith(".jpeg") ||
        fullPath.toLowerCase().endsWith(".png")
      ) {
        try {
          const tempPath = fullPath + ".tmp.jpg";

          await sharp(fullPath)
            .resize({ width: 1600 })
            .jpeg({ quality: 75 })
            .toFile(tempPath);

          fs.unlinkSync(fullPath);
          fs.renameSync(tempPath, fullPath);

          console.log("Otimizada:", fullPath);
        } catch (err) {
          console.log("Erro:", fullPath);
        }
      }
    }
  }
}

optimizeImages(inputDir);