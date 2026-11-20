const username = '_godosihchsu  dcicnsncl';

function isValidUsername(username) {
  const isValidUsername = username.length >= 3 && username.length <= 15 && !username.startsWith('_') && !username.includes(' ');
  console.log(isValidUsername);
}

isValidUsername('godo');

//corección

function isValidUsername('godo') {
  const isValidUsername = username.length >= 3 && username.length <= 15 && !username.startsWith('_') && !username.includes(' ');
  console.log(isValidUsername);

}

console.log(isValidUsername('godo'));
console.log(isValidUsername('_rodofasio'));
console.log(isValidUsername('gu'));
console.log(isValidUsername('ru'));
console.log(isValidUsername('abc'));
console.log(isValidUsername('godxindacisdc_2025'));