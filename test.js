const assert = require("assert");
const pepe = require("./index.js");

assert.equal(pepe.toString(), pepe.toArray().join("\n"));
console.log('toString() === toArray().join("\\n")');

console.log(pepe.toString());

console.log("Colored Pepe!");
console.log(pepe.toColoredString());
console.log(":thumbsup:");
