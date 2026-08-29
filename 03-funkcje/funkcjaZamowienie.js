function obliczSume(cena, ilosc) {
    return cena * ilosc;
}
function czyDarmowaDostawa(suma) {
    return suma >= 200;
}

let cenaZaCałosc = obliczSume(60, 4);
let darmowaDostawa = czyDarmowaDostawa(cenaZaCałosc);

if (darmowaDostawa) {
    console.log("Darmowa dostawa");
} else {
    console.log("Płatna dostawa");
}