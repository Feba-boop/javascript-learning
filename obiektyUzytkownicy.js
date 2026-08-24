let licznik = 0;

let uzytkownicy = [
    { imie: "Pola", wiek: 27, aktywny: true },
    { imie: "Sebastian", wiek: 22, aktywny: false },
    { imie: "Kacper", wiek: 25, aktywny: false },
    { imie: "Ania", wiek: 21, aktywny: true }
];

for (let uzytkownik of uzytkownicy) {
    if (uzytkownik.aktywny === true) {
        console.log("Użytkownik " + uzytkownik.imie + " jest aktywny");

        licznik++;
    }
}
 if (licznik >= 2) {
    console.log("Wystarczająco aktywnych użytkowników");
 }else {
    console.log("Za mało aktywnych użytkowników");
 }