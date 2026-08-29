let produkty = [
    { nazwa: "Laptop", cena: 3500, rabat: 10 },
    { nazwa: "Monitor", cena: 1200, rabat: 20 },
    { nazwa: "Myszka", cena: 150, rabat: 0 },
    { nazwa: "Klawiatura", cena: 300, rabat: 15 }
];

let produktyPoRabacie = produkty.map(function(produkt){
    let rabat = produkt.cena * produkt.rabat / 100;
    let nowaCena = produkt.cena - rabat;
    
        return {
            nazwa: produkt.nazwa,
            staraCena: produkt.cena,
            nowaCena: nowaCena
        };
});

console.log(produktyPoRabacie);