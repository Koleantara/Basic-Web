const readline = require("readline-sync");
let lampu = readline.question("masukan warna lampu: ");
let aksi = " ";

if (lampu === "merah") {
    aksi = "berhenti";
} else if (lampu === "kuning") {
    aksi = "hati-hati";
} else if (lampu === "hijau") {
    aksi = ("jalan");
} else
    aksi = "tidak dikenal";

console.log("lampu di nyalakan: " + lampu);
console.log("aksi yang harus dilakukan: " + aksi);

//MIKO