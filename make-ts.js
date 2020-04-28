const { readFileSync, writeFileSync } = require("fs");

writeFileSync("index.ts", readFileSync("index.js", "utf-8"), "utf-8");
