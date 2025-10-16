const readline = require("readline-sync");
let suhu = readline.questionInt("suhu celcius: ");

console.log("suhu celcius: " + ((suhu * 9 / 5) + 32));