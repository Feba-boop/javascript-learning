let produkty = [
    { nazwa: "Laptop", sztuki: 3, cena: 3500 },
    { nazwa: "Monitor", sztuki: 0, cena: 1200 },
    { nazwa: "Myszka", sztuki: 8, cena: 150 },
    { nazwa: "Klawiatura", sztuki: 2, cena: 300 }
];

let naStanie = 0;
let malyStan = 0;

let suma = 0;

produkty.forEach(function(produkt){
    let wartoscProduktu = produkt.sztuki * produkt.cena;
    
    console.log(produkt.nazwa);

    if (produkt.sztuki > 0)
        naStanie++;
        suma += wartoscProduktu;
    
    if (produkt.sztuki > 0 && produkt.sztuki <= 3)
        malyStan++;
});

console.log("Ilość dostępnych produktów: " + naStanie);
console.log("Łączna wartość magazynu: " + suma);
console.log("Ilość produktów z małą ilością sztuk na stanie: " + malyStan);