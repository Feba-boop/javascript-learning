let punkty = [10, 25, 40, 15, 50]
let suma = 0;

for (let i = 0 ; i < punkty.length; i++) {
    if (punkty[i] >= 20) {
        suma += punkty[i]
    }
}
if (suma >= 100) {
    console.log("Dobry wynik: " + suma)
} else {
    console.log("Za mało punktów: " + suma)
}