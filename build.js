const path = require("node:path");
const CONFIG = require("./build.json");
const fs = require("node:fs")

console.log(CONFIG.files)

CONFIG.files.forEach((fileName) => {
    let rawFile = fs.readFileSync(path.resolve("./src", fileName));
    let rawFileStr = rawFile.toString();

    //build ESM
    let builtESMmodule = rawFileStr.replace(/\/\/###COMMONJS###\/\/.*\/\/###COMMONJS###\/\/\r?\n?/s, "");
    builtESMmodule = builtESMmodule.replace(/\/\/###ESM###\/\/\r?\n?/g, "");

    //build CommonJS
    let builtCJSmodule = rawFileStr.replace(/\/\/###ESM###\/\/.*\/\/###ESM###\/\/\r?\n?/s, "");
    builtCJSmodule = builtCJSmodule.replace(/\/\/###COMMONJS###\/\/\r?\n?/g, "");

    fs.writeFileSync(path.resolve("./out/esm", fileName), builtESMmodule);
    fs.writeFileSync(path.resolve("./out/cjs", fileName), builtCJSmodule);
});
