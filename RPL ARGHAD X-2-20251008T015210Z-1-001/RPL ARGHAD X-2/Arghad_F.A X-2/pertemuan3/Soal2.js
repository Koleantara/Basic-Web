const readline = require("readline-sync");
let total = 0;
for( let i = 1 ; i <= 3; i++){
    total += i
    console.log("percobaan ke-" + i)
    let username = readline.question("Username: ");
    let password = readline.question("Password: ");
    if (username === "koleantara" && password=== "test2222") {
    console.log("halo koleantara")
    break
    }
if(total = 3) {
    console.log("username atau password salah")
}
}
