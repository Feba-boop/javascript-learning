let licznik = 0;

function czyMaDostep(osoba) {
    return osoba.wiek >= 18 && osoba.aktywny === true;
}

let uzytkownicy = [
    { imie: "Ania", wiek: 22, aktywny: true },
    { imie: "Marek", wiek: 17, aktywny: true },
    { imie: "Ola", wiek: 30, aktywny: false },
    { imie: "Kuba", wiek: 25, aktywny: true }
];

for (let osoba of uzytkownicy) {
    if (czyMaDostep(osoba) === true) {
        console.log(osoba.imie + " - dostęp przyznany");

        licznik++
    }else {
        console.log(osoba.imie + " - brak dostępu" );
}
}
console.log("Liczba uzytkownikow z dostępem: " + licznik);