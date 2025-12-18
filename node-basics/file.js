const fs = require("fs");

fs.writeFileSync("notes.txt", "Hello Darragh!");
const data = fs.readFileSync("notes.txt", "utf-8");

console.log(data);