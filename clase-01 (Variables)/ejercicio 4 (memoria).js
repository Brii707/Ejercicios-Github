let coffees = 2;
let mood = 'dormido';
coffees = coffees + 1;
mood = 'despierto';
let total = coffees * 2;
coffees = 0;
console.log(coffees, mood, total);


Después de la línea    Coffee        Mood           total

1                        2        (no existe)     (no existe) 
2                        2          dormido       (no existe) 
3                        3          dormido       (no existe) 
4                        3          despierto     (no existe) 
5                        3         despierto         6
6                        0         despierto         6

//no, el total no cambia, porque anteriormente ( en la línea 5) ya se calculó el total que eran 6 y en la última fila sólo pone coffee=0 pero no afecta al resultado anterior
porque no están conectados. 
