let punkty = 0;

for ( let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        punkty += 2;
        }
    punkty += i;
console.log("Punkty: " + punkty);

} if (punkty >= 25) {
    console.log("Zaliczone");

} else {
    console.log("Nie zaliczone")
}