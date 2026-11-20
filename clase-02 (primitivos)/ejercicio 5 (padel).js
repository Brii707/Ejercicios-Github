const hasCourt = true;
const players = 4;
const isRaining = false;

const canPlay = hasCourt && players === 4 && !isRaining;
const needsMorePlayers = players < 4;

console.log(canPlay, needsMorePlayers); 



function checkPadel(hasCourt, players, isRaining) {
  return hasCourt && players === 4 && !isRaining;
  
}

console.log(canPlay(true, 3, false));

