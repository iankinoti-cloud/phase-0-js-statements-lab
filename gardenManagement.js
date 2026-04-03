const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// 1. Temperature Check //
if (temperature > 80) {
    console.log("Watering on");
} else {
    console.log("Watering off");
}

// 2. Time Check//
if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("lightsOn");
} else {
    console.log("lightsOff");
}

// 3. Soil Moisture Loop (The Fix)

while (soilMoisture < 40) {
    soilMoisture += 5; // Step 1: 30 becomes 35 | Step 2: 35 becomes 40
    console.log(soilMoisture); // Logs 35 | Logs 40
}