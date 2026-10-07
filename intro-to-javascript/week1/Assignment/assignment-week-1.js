// Assignment exercise Age-ify (A future age calculator)

const yearOfbirth = 1993;
const yearFuture = 2027;
const age = yearFuture - yearOfbirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);

// Assignment exercise Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2015;
const dogYearFuture = 2027;

const shouldShowResultInDogYears = (inYearDog, inYearHuman) => {
  if (inYearDog === true) {
    const calculateAgeDogInYearDog = dogYear * 7;
    return `Your dog will be ${calculateAgeDogInYearDog} dog years old in ${dogYearFuture}`;
  } else if (inYearHuman === true) {
    const calculateAgeDogInYearHumanYear = dogYearFuture - dogYearOfBirth;
    return `Your dog will be ${calculateAgeDogInYearHumanYear} human years old in ${dogYearFuture}.`;
  }
};

console.log(shouldShowResultInDogYears(false, true));

// Assignment exercise Housey pricey (A house price estimator)

// Peter :
const widthPeter = 8;
const heightPeter = 10;
const depthPeter = 10;
const gardenSizeM2Peter = 100;
const costOfHousePeter = 2500000;
const volumeInMetersPeter = widthPeter * heightPeter * depthPeter;
const housePricePeter =
  volumeInMetersPeter * 2.5 * 1000 + gardenSizeM2Peter * 300;

const compareHousePrice1 = (estimatedPrice) => {
  if (estimatedPrice < costOfHousePeter) {
    return `Hi PETER, the costing for your house is: ${housePricePeter}, it cost less than the purchase price - It will be a GOOD DEAL.`;
  } else {
    return `Hi PETER, the costing for your house is: ${housePricePeter}, it cost more than the purchase price - It will be a BAD DEAL.`;
  }
};
console.log(compareHousePrice1(housePricePeter));

// Julia :
const widthJulia = 5;
const heightJulia = 8;
const depthJulia = 11;
const gardenSizeM2Julia = 100;
const costOfHouseJulia = 1000000;
const volumeInMetersJulia = widthJulia * heightJulia * depthJulia;
const housePriceJulia =
  volumeInMetersJulia * 2.5 * 1000 + gardenSizeM2Julia * 300;

const compareHousePrice2 = (estimatedPrice) => {
  if (estimatedPrice < costOfHouseJulia) {
    return `Hi JULIA, the costing for your house is: ${housePriceJulia}, it cost less than the purchase price - It will be a GOOD DEAL.`;
  } else {
    return `Hi JULIA, the costing for your house is: ${housePriceJulia}, it cost more than the purchase price - It will be a BAD DEAL.`;
  }
};
console.log(compareHousePrice2(housePriceJulia));

// Assignment Ez Namey (Startup name generator) Optional

const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Nice",
  "Strong",
  "Bigger",
  "Hygge",
  "skat",
  "Kaerlighed",
  "Forelsket",
];
const secondWords = [
  "Ivory",
  "Eagle",
  "Star",
  "Lion",
  "Etalon",
  "Squerry",
  "Viking",
  "Wolf",
  "Kitchen",
  "Lacoste",
];

const randomIndex1 = Math.floor(Math.random() * 10);
const randomIndex2 = Math.floor(Math.random() * 10);

const startupName = firstWords[randomIndex1] + " " + secondWords[randomIndex2];

console.log(
  `The startup: ${startupName} contains ${startupName.length} characters.`,
);
