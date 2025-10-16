const readline = require("readline-sync");
let score = readline.question("masukan nilai: ");
let nilai = " ";
if (score >= 90) {
    nilai = "A";
} else if (score >= 75) {
    nilai = "B";
} else if (score >= 60) {
    nilai = "C";
} else if (score >= 50) {
    nilai = "E";
} else
    nilai = "tidak valid";

console.log("nilai anda: " + nilai);

let lulus 
if (nilai === "A" || nilai === "B" || nilai === "C") {
    console.log("anda lulus :)")
} else {
    console.log("maaf, anda tidak lulus :(")
}