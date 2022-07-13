const path = require("path");

console.log(path.sep);

const filePath = path.join("files", "test.txt");

console.log(filePath);

// base path

console.log(path.basename(filePath));

const absPath = path.resolve("files", "test.txt");

console.log(__dirname);
console.log(absPath);
