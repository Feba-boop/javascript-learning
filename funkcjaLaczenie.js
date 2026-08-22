function dodaj(a, b) {
    return a + b;
}
function pomnoz(a, b) {
    return a * b;
}

let wynikDodawania = dodaj(5, 7);
let liczba = pomnoz(wynikDodawania, 2);

function czyWynikDuży(liczba) {
    if (liczba >= 20) {
        return true;
    } else {
        return false;
    }
}

if (czyWynikDuży(liczba)) {
    console.log("Duży wynik");
} else {
    console.log("Mały wynik");
    }

