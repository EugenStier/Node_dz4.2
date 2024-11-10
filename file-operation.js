const fs = require("fs");
require("dotenv").config();

const filename = process.env.FILENAME;

fs.writeFile(filename, "Это текст, записанный в файл.", (err) => {
  if (err) {
    return console.error("Ошибка при создании файла:", err);
  }
  console.log("Файл успешно создан и текст записан.");

  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      return console.error("Ошибка при чтении файла:", err);
    }
    console.log("Содержимое файла:", data);
  });
});
