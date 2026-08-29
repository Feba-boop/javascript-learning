let zamowienia = [
    { produkt: "Laptop", cena: 3500, sztuki: 1, oplacone: true },
    { produkt: "Monitor", cena: 1200, sztuki: 2, oplacone: false },
    { produkt: "Myszka", cena: 150, sztuki: 3, oplacone: true },
    { produkt: "Klawiatura", cena: 300, sztuki: 2, oplacone: true }
];

let licznikOp = 0;
let licznik = 0;

let sumaZamowien = 0;

zamowienia.forEach(function(zamowienie){
    let wartoscZamowienia = zamowienie.cena * zamowienie.sztuki;
    console.log(zamowienie.produkt);
        
        if (zamowienie.oplacone === true) {
            licznikOp++;
            sumaZamowien += wartoscZamowienia;
        }
        if (wartoscZamowienia >= 500 && zamowienie.oplacone === true) {
            licznik++;
        }
});

console.log("Opłacone zamówienia: " + licznikOp);
console.log("Wartość opłaconych zamówień: " + sumaZamowien);
console.log("Zamówienia o wartości conajmniej 500zł: " + licznik);