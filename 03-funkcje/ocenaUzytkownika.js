function czyPelnoletni(wiek) {
    return (wiek >= 18);
}
function maAktywneKonto(kontoAktywne) {
    return (kontoAktywne);
}
function czyMaDostep(wiek, kontoAktywne) {
    return czyPelnoletni(wiek) && maAktywneKonto(kontoAktywne);
}

let wiek = 17;
let kontoAktywne = true;

if (czyMaDostep(wiek, kontoAktywne)) {
    console.log("Dostęp przyznany");
} else {
    console.log("Brak dostępu");
}