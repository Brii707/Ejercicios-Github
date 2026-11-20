let totalPrice;
const pricePerTicket = 8;
const numTickets = 3;
const popcornPrice = 5;

let finalPrice = pricePerTicket * numTickets;
finalPrice = finalPrice + popcornPrice;
totalPrice = finalPrice;

console.log(`Total: ${totalPrice} €`);

// Problema 1: el console.log estaba antes de calcular el total, así que totalPrice aún no tenía valor y salía undefined. Lo he movido al final.
// Problema 2: finalPrice estaba declarada con const y luego se le cambiaba el valor, lo que da error. Como su valor cambia, la declaro con let.