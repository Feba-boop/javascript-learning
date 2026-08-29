function obliczPunkty (punkty, bonus) {
    return punkty + bonus;
}

let wynik = obliczPunkty(65, 102);
     console.log("Punkty: " + wynik);

if (wynik >= 100) {
    console.log("Wygrana");

} else {
    console.log("Przegrana");
}