let licznik = 0

function czyNaPromocji(produkt) {
    return produkt.dostepny === true && produkt.cena >= 1000;
}

let produkty = [
    { nazwa: "Laptop", cena: 4000, dostepny: true },
    { nazwa: "Telefon", cena: 2500, dostepny: true },
    { nazwa: "Monitor", cena: 1200, dostepny: false },
    { nazwa: "Myszka", cena: 200, dostepny: true }
];

for (let produkt of produkty) {
    if (czyNaPromocji(produkt)) {
        produkt.cena = produkt.cena * 0.90;

        console.log("Cena po rabatach: " + produkt.cena)

        licznik++
    }else {
        console.log("Bez promocji")
    }
}
console.log("Liczba produktów objętych promocją " + licznik)