import fs from "fs/promises";

(async () => {
  try {
    // Динамически импортируем модули
    const imagemin = (await import("imagemin")).default;
    const imageminJpegtran = (await import("imagemin-jpegtran")).default;
    const imageminPngquant = (await import("imagemin-pngquant")).default;
    const imageminWebp = (await import("imagemin-webp")).default;

    const files = await imagemin(["public/**/*.{jpg,jpeg,png,webp}"], {
      plugins: [
        imageminJpegtran({ progressive: true }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminWebp({ quality: 75 }),
      ],
    });

    for (const file of files) {
      const outputPath = file.sourcePath; // Исходный путь
      await fs.writeFile(outputPath, file.data); // Перезаписываем файл
    }

    /* eslint-disable no-console */
    console.log("Изображения оптимизированы и перезаписаны.");
  } catch (error) {
    console.error("Ошибка при оптимизации:", error);
  }
})();
