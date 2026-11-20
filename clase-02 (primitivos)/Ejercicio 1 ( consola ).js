console.log(1 + '1'); //Aquí lo que saldría sería '11', porque Javascript decide que cuando sumas un número con un 'texto' no se suma, sino que se junta como texto. 
console.log(typeof '42'); //Escribirá 'number' en consola. //En esta me equivoqué y por un momento se me olvidó que tenía las comillas como si fuera texto, por eso pondría 'string'
console.log(2 + 3 * 4); // Al no ser ninguno texto, aquí se haría inmediatamente la operación, que daría 14
console.log(17 % 5);// Lo mismo que el anterior, aquí el % sirve para dividir, por lo que daría 3.2 (si son en decimales siempre en punto)
console.log('Godofredo'.length); // Indica el número de caracteres que hay en la cadena de texto, por lo que sería 9
console.log(10 === '10'); //En este boolean aparecerá false porque está comparando un string con un number, por lo que aunque tengan el mismo aspecto, no son del mismo tipo
console.log('Ornitorrinco'.toUpperCase().includes('RINCO')); //Pondrá que es true porque en esa palabra aparece "rinco"
console.log(typeof (5 > 3)); // Aquí aparecerá que es true porque 5 es mayor que 3 // Tenía que haber añadido que también pondría que era un boolean
console.log(`${2 + 2} manzanas`); //Pondrá que hay 4 manzanas
console.log(!(3 >= 3) || 'a' !== 'b');// Aquí pondrá que es true porque está diciendo que 3 es igual o mayor que 3 pero luego es 'or' si pregunta si son destintos, por lo que es true