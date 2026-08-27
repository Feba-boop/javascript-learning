let licznik = 0

function czyWymagaUwagi(urzadzenie) {
    return urzadzenie.status.online === true && urzadzenie.status.temperatura >= 30 || urzadzenie.status.bateria <= 25;
}

let urzadzenia = [
    {
        nazwa: "ESP32 Salon",
        status: {
            online: true,
            temperatura: 24,
            bateria: 80
        }
    },
    {
        nazwa: "ESP32 Garaż",
        status: {
            online: false,
            temperatura: 18,
            bateria: 45
        }
    },
    {
        nazwa: "ESP32 Ogród",
        status: {
            online: true,
            temperatura: 31,
            bateria: 20
        }
    },
    {
        nazwa: "ESP32 Piwnica",
        status: {
            online: true,
            temperatura: 16,
            bateria: 60
        }
    }
];

let urzadzeniaOnline = 0;
let sumaTemperatur = 0

for (let urzadzenie of urzadzenia) {
    if (urzadzenie.status.online === false) {
        console.log(urzadzenie.nazwa + " - offline");
    
    } else {
        urzadzeniaOnline++;
        sumaTemperatur += urzadzenie.status.temperatura;
        
        if (czyWymagaUwagi(urzadzenie)) {
        console.log(urzadzenie.nazwa + " - wymaga uwagi");

        licznik++
        
        } else {
        console.log(urzadzenie.nazwa + " - działa poprawnie");
        }
    }
}

let sredniaTemperatur = sumaTemperatur / urzadzeniaOnline

console.log("Liczba urzadzen online: " + urzadzeniaOnline)
console.log("Liczba urzadzen wymaajacych uwagi: " + licznik++)
console.log("Średnia temperatur urządzeń online: " + sredniaTemperatur)