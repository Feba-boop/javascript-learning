let licznik = 0;

function czyMaloTowaru(produkt) {
    return produkt.magazyn.sztuki > 0 && produkt.magazyn.sztuki <=5;
}

let produkty = [
    {
        nazwa: "Laptop",
        magazyn: {
            sztuki: 8,
            cena: 3500
        }
    },
    {
        nazwa: "Monitor",
        magazyn: {
            sztuki: 0,
            cena: 1200
        }
    },
    {
        nazwa: "Klawiatura",
        magazyn: {
            sztuki: 3,
            cena: 300
        }
    },
    {
        nazwa: "Myszka",
        magazyn: {
            sztuki: 15,
            cena: 150
        }
    }
]; 

let liczbaProduktow = 0;
let wartoscMagazynu = 0;

for (let produkt of produkty) {
    let wartoscProduktu = produkt.magazyn.sztuki * produkt.magazyn.cena;
    
    if (produkt.magazyn.sztuki === 0) {
        console.log(produkt.nazwa + " - Brak towaru");

    }else {
        wartoscMagazynu += wartoscProduktu;
        liczbaProduktow++;

        if (czyMaloTowaru(produkt)) {
            console.log(produkt.nazwa + " - Mało towaru");

            licznik++;
        }else {
            console.log(produkt.nazwa + " - stan prawidłowy");
        }
    }
}

console.log("Liczba dostępnych produtków: " + liczbaProduktow);
console.log("Liczba produktow z małym stanem: " + licznik);
console.log("Wartość magazynu: " + wartoscMagazynu + " zł");
