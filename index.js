const { asciiPepe } = require("./pepe.js");

exports.toString = function () {
  return asciiPepe.join("\n");
};

exports.toArray = function () {
  return asciiPepe;
};

exports.toColoredString = function () {
  return asciiPepe
    .join("\n")
    .replace(/▓/g, "\x1b[34m▓\x1b[0m") // blue
    .replace(/░/g, "\x1b[32m▓\x1b[0m") // green
    .replace(/█/g, "\x1b[30m█\x1b[0m") // black
    .replace(/▒/g, "\x1b[31m▒\x1b[0m"); // red
};
