const readline = require("readline-sync")
let hari = readline.question("Input hari ")
switch (hari) { 
    case "senin":
        console.log("Seragam Putih Abu")
        break;
    case "selasa":
        console.log("Seragam Pramuka")
        break;
    case "rabu":
        console.log("Seragam Productive")
        break;
    case "kamis":
        console.log("Seragam Batik")
        break;
    case "jumat":
        console.log("Seragam Gamis")
        break;

    default: console.log("tidak pakai seragam")
        break;
}