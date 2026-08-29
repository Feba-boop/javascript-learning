let punkty = 10;
let bonusAktywny = true;

punkty += 5;

if(bonusAktywny) {
    punkty *= 2;
}

punkty -= 4;

if(punkty % 2 === 0 && punkty >= 20) {
    console.log("Dobry wynik");
} else {
        console.log("Graj dalej");
    }