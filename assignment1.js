let firstName = "Riley";
let email = "rileypersephone@gullible.com";
let currentOccupation = "Air hostess in the 60's";
let income = 30000;
let currentPlace = "Montana";
let numberOfChildren = 0;
let maritalStatus = "single";
let partnersName = "John Cena";
let religion = "Catholic";
let futureOccupation = "CEO of NASA";

let catsOwned = 8;

let favoriteSport = "Bear blasting";
let favoriteBand = "Busta Rhymes";
let favoriteDrink = "fresh squeezed orange juice";
let instrument = "harmonica";
let typeOfResidence = "space station home";
let partnersOccupation = "Door to door paper cup salesman";
let futureLocation = "Argentina";
let futureIncome = 2800;
let futureNumberOfChildren = numberOfChildren + Math.floor(Math.random() * 7);
let futureMaritalStatus = "married";

document.write(
  `<p>Hi everybody, my name is ${firstName}. I'm a ${maritalStatus} ${currentOccupation} making $${income} a year in ${currentPlace}. I'm dating a wonderful ${partnersOccupation} named ${partnersName}, we have ${numberOfChildren} children as of yet, and ${catsOwned} cats.</p>
  <p>In five years time I hope to be a ${futureMaritalStatus} ${futureOccupation} with a salary of ${futureIncome} a day and ${futureNumberOfChildren} children. I'm ${religion} so that fits. I will live in ${futureLocation} with ${favoriteBand} and participate in ${favoriteSport} everyday. I'll drink ${favoriteDrink} with every meal and make ${partnersName} clean our ${typeOfResidence} while playing the ${instrument}.<p>
  <p>Cash me outside at ${email} if you are looking to hire a professional. Peace!<p>`
);
