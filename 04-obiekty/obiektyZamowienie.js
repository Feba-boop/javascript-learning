let licznik = 0;

function czyMoznaWyslac(zamowienie){
    return zamowienie.oplacone === true && zamowienie.cena >=500;
}

let zamowienia = [
    { produkt: "Laptop", cena: 3500, oplacone: true },
    { produkt: "Telefon", cena: 2200, oplacone: false },
    { produkt: "Monitor", cena: 1200, oplacone: true },
    { produkt: "Klawiatura", cena: 300, oplacone: true }
];

for (let zamowienie of zamowienia) {
    if(czyMoznaWyslac(zamowienie) === true) {
        console.log(zamowienie.produkt + " - można wysłać");

        licznik++
    }else {
        console.log(zamowienie.produkt + " - nie można wysłać");
}
}
console.log("Liczba zamówień do wysłania: " + licznik);
