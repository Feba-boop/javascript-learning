let wyniki = [45, 80, 20, 100, 65, 30];
let suma = 0;
let licznik = 0;

for (let i = 0; i < wyniki.length; i++) {
    if (wyniki[i] >= 50) {
        suma += wyniki[i];

        licznik++;
    }
}

console.log("Suma: " + suma);
console.log("Liczba zakceptowanych wyników: " + licznik);

if (wyniki.includes(100)) {
    console.log("Znaleziono maksymalny wynik");
} else {
    console.log("Brak maksymalnego wyniku");
}