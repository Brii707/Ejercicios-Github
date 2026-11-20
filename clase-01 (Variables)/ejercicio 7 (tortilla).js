// Datos de la receta (para 4 personas)
const recipePeople = 4;
const recipeEggs = 6;
const recipePotatoes = 4;
const recipeOnions = 1;

// Invitados de este finde
const guests = 10;

// Cantidad por persona
const eggsPerPerson = recipeEggs / recipePeople;
const potatoesPerPerson = recipePotatoes / recipePeople;
const onionsPerPerson = recipeOnions / recipePeople;

// Cantidad para todos los invitados
const totalEggs = eggsPerPerson * guests;
const totalPotatoes = potatoesPerPerson * guests;
const totalOnions = onionsPerPerson * guests;

console.log(`Para ${guests} personas: ${totalEggs} huevos, ${totalPotatoes} patatas y ${totalOnions} cebollas`);