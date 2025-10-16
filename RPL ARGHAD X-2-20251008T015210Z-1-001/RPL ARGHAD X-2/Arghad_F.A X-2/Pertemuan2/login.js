const readline = require("readline-sync")
let username = readline.question(" Username: ")
let password = readline.question(" password: ")
if (username === "koleantara" && password=== "test2222") {
    console.log("login admin")
    console.log("halo koleantara")
}else if (username === "arghad" && password === "gamble") {
    console.log("login user")
    console.log("halo arghad")
}else
    console.log("username atau password salah")