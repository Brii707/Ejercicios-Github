// Los tres movimientos
const trip1 = 4;   // sube 4
const trip2 = 2;   // baja 2
const trip3 = 5;   // sube 5

// Lo que el ascensor recuerda
let currentFloor = 0;
let previousFloor;        // sin valor hasta el primer viaje
let totalTraveled = 0;

// Viaje 1: sube 4
previousFloor = currentFloor;
currentFloor = currentFloor + trip1;
totalTraveled = totalTraveled + trip1;

// Viaje 2: baja 2
previousFloor = currentFloor;
currentFloor = currentFloor - trip2;
totalTraveled = totalTraveled + trip2;

// Viaje 3: sube 5
previousFloor = currentFloor;
currentFloor = currentFloor + trip3;
totalTraveled = totalTraveled + trip3;

console.log(`Planta actual: ${currentFloor}
Planta anterior: ${previousFloor}
Plantas recorridas: ${totalTraveled}`);