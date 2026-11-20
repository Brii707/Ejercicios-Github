const candies = 47;
const nephews = 6;

const leftover = candies % nephews;
const toShare = candies - leftover;
const perNephew = toShare / nephews;

console.log(`Cada sobrino recibe ${perNephew} caramelos y sobran ${leftover}`);
// Cada sobrino recibe 7 caramelos y sobran 5