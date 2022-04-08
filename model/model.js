const FS = require("fs");
const PATH = require("path");

const MODEL_DIR = PATH.join(__dirname, "../model");

const data = (file) => {
  return FS.readFileSync(PATH.join(MODEL_DIR, file), "utf-8", (err, data) => {
    if (err) throw err;
    let car = JSON.parse(data);
    return car;
  });
};

module.exports = data;
