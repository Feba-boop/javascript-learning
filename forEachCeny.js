let ceny = [100, 250, 80, 400];
let suma = 0;
let licznik = 0;

ceny.forEach(function(cena) {
    suma += cena;
    if (cena > 200) {
        licznik++;
    }
});

console.log("Suma: " + suma);
console.log("Ceny powyżej 200: " + licznik);