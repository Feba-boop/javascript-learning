function czyAlarm(urzadzenie) {
    return urzadzenie.status.online === true && urzadzenie.status.bateria <= 20 || urzadzenie.status.temperatura >= 30;
}

let urzadzenia = [
    {
        nazwa: "ESP32 Salon",
        typ: "czujnik",
        status: {
            online: true,
            bateria: 70,
            temperatura: 24
        }
    },
    {
        nazwa: "ESP32 Garaż",
        typ: "sterownik",
        status: {
            online: true,
            bateria: 18,
            temperatura: 20
        }
    },
    {
        nazwa: "ESP32 Ogród",
        typ: "czujnik",
        status: {
            online: false,
            bateria: 55,
            temperatura: 31
        }
    },
    {
        nazwa: "ESP32 Piwnica",
        typ: "czujnik",
        status: {
            online: true,
            bateria: 35,
            temperatura: 30
        }
    }
];

let licznikAlarm = 0;
let licznikOnline = 0;
let sumaBaterii = 0;
let ileCzujnik = 0;

for (let urzadzenie of urzadzenia) {
    
    if (urzadzenie.status.online === false) {
        console.log(urzadzenie.nazwa + " - offline");
    
    }else {
        licznikOnline++;
        sumaBaterii += urzadzenie.status.bateria;
        
        if (urzadzenie.typ === "czujnik") {
            ileCzujnik++;
        }
        if (czyAlarm(urzadzenie)){
            console.log(urzadzenie.nazwa + " - ALARM");

            licznikAlarm++;
        
        }else {
            console.log(urzadzenie.nazwa + " - OK");
        }
    }
}

let sredniaBateria = sumaBaterii / licznikOnline;

console.log("Urządzenia Online: " + licznikOnline);
console.log("Czujniki Online: " + ileCzujnik);
console.log("Alarmy " + licznikAlarm);
console.log("Średnia bateria online: " + sredniaBateria);