let shelfA = 'Libros';
let shelfB = 'Discos';

const temp = shelfA;
shelfA = shelfB;
shelfB = temp;

console.log(shelfA, shelfB);

const unitPrice = 12.5;
const units = 3;
const discount = 5

const subtotal = unitPrice * units;
const total = subtotal - discount;

console.log("Subtotal:" , subtotal, "€");
console.log("Total: ", total, "€");
