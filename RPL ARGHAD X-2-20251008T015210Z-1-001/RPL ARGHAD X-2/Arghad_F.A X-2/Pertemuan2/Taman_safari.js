const readline = require("readline-sync");
let umur = readline.questionInt("Input umur pengunjung;  ");
let hari = readline.question("apakah hari libur(ya/tidak): ");
let jumlah = readline.questionInt("berapa orang: ");
let harga = 0;

if (umur < 3) {
    harga = 0;
} else if (umur <=12){
    harga = 50000;
} else if (umur <= 59){
    harga = 100000;
} else if (umur >= 60){
    harga =70000; 
}

if (hari === "ya"){
    console.log("harga naik 20%")
    console.log("harga akhir: " + (0.2 * harga + harga));
    console.log("harga yang dibayar: " + (0.2 * harga + harga) * jumlah)
} else{
    console.log ("harga tidak naik")
    console.log("harga akhir: " +  harga);
    console.log("harga yang dibayar: " + harga * jumlah)
}
   
console.log("jumlah orang: " + jumlah);


