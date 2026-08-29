let produkty = [
    { nazwa: "Laptop", cena: 3500 },
    { nazwa: "Monitor", cena: 1200 },
    { nazwa: "Myszka", cena: 150 }
];

let nazwy = produkty.map(function(produkt){
    return produkt.nazwa;
});

console.log(produkty);
console.log(nazwy);