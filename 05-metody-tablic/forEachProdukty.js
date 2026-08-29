let produkty = [
    { nazwa: "Laptop", cena: 3500 },
    { nazwa: "Monitor", cena: 1200 },
    { nazwa: "Myszka", cena: 150 },
    { nazwa: "Klawiatura", cena: 300 }
];

let suma = 0;
let licznikDrogi = 0;

produkty.forEach(function(produkt){
    console.log(produkt.nazwa + " - " + produkt.cena + " zł");
    suma += produkt.cena;
        
        if (produkt.cena >= 1000) {
        licznikDrogi++;
        }
});

console.log("Koszt wszystkich produktów: " + suma);
console.log("Ilość drogich produktów: " + licznikDrogi);