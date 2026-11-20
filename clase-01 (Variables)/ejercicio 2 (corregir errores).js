//Este código tiene 6 problemas: unos dan error al ejecutarse y otros no siguen las normas de nombres del curso. Cópialo, corrígelo y escribe junto a cada línea corregida un comentario que explique qué fallaba.

const 1stName = 'Rodofasio';
const lastName = 'Hernández';
const city = 'Murcia';
city = 'Cartagena';
let x = 18;
const maxAge;
let let = 'texto';
let num_Friends = 4;
console.log(1stName, lastname, x, maxAge, city, Num_Friends);

//corregido sería

const firstName = 'Rodofasio';
const lastname = 'Hernández';
let city = 'Murcia';
city = 'Cartagena';
let age = 18;
const maxAge = 20;
let text = 'texto';
let numFriends = 4;
console.log(firstName, lastname, age, maxAge, city, numFriends);