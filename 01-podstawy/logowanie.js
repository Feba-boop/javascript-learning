let login = "admin";
let hasło = "1234";
let kontoZablokowane = true;

if(login === "admin" && hasło === "1234" && !kontoZablokowane) {
    console.log("Zalogowano")
} else {
    console.log("Błędne dane lub konto zablokowane")
}