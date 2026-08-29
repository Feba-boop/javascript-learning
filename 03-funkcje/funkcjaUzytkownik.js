function czyMaDostęp(osoba) {
    return osoba.wiek >= 18 && osoba.aktywny === true;
    
}

let uzytkownik = {
    imie: "Kamil",
    wiek: 22,
    aktywny: true
};

let dostep = czyMaDostęp(uzytkownik);

if (dostep === true) {
    console.log("Dostęp przyznany");
}else {
    console.log("Brak dostępu");
}