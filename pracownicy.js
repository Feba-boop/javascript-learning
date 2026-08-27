let licznikPremii = 0;
let liczbaAktywnych = 0;

function czyDostajePremie(pracownik) {
    return pracownik.praca.aktywny === true && pracownik.praca.godziny >= 160;
}

let pracownicy = [
    {
        imie: "Ania",
        praca: {
            godziny: 160,
            stawka: 30,
            aktywny: true
        }
    },
    {
        imie: "Marek",
        praca: {
            godziny: 120,
            stawka: 35,
            aktywny: true
        }
    },
    {
        imie: "Ola",
        praca: {
            godziny: 170,
            stawka: 40,
            aktywny: false
        }
    },
    {
        imie: "Kuba",
        praca: {
            godziny: 180,
            stawka: 32,
            aktywny: true
        }
    }
];

let wynagrodzenieRazem = 0;

for (let pracownik of pracownicy) {
    let wyplata = pracownik.praca.godziny * pracownik.praca.stawka;
    
    if (pracownik.praca.aktywny === false) {
        console.log(pracownik.imie + " - niekatywny");
    
    }else {
        liczbaAktywnych++;
        wynagrodzenieRazem += wyplata
        
        if (czyDostajePremie(pracownik)) {
            console.log(pracownik.imie + " - premia");

            licznikPremii++;
        }else {
            console.log(pracownik.imie + " - bez premii");
        }
    }
}

console.log("Liczba aktywnych pracowników: " + liczbaAktywnych);
console.log("Liczba premii: " + licznikPremii);
console.log("Łączne wynagrodzenie: " + wynagrodzenieRazem);