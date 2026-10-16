// Exercise 1

const balance = 1000;

if (balance <= 0) {
  console.log(`Please deposit some money!`);
} else if (balance > 0 && balance <= 1000) {
  console.log(`Your balance is looking okay`);
} else if (balance > 1000 && balance <= 3000) {
  console.log(`Your balance is looking good`);
} else if (balance < 3000 && balance <= 10000) {
  console.log(`Your balance is looking okay`);
} else {
  console.log(`Your balance is looking fantastic`);
}

// exercise 2
function getCircleArea(radius) {
  return `The circle area is: ${Math.PI * radius * radius}`;
}
const result = getCircleArea(3);
console.log(result);

//exercise 3

function celsiusToFahrenheit(celsius) {
  return `${(celsius * 9) / 5 + 32} degree`;
}

const fahrenheit = celsiusToFahrenheit(100);

console.log(fahrenheit);

// exercise 4

const global = "global";

function scopeTest() {
  console.log(localScope);
  console.log(global);
  const localScope = "localScope";

  function tester() {
    console.log(global);
    const testerVariable = "testerVariable";
  }

  tester();
  console.log(testerVariable);
}

scopeTest();

// exercise 5
function logString(string, repetitions) {
  for (let i = 0; i < 3; i = i + 1) {
    console.log(string);
  }
}

logString("hello", 3);

// exercise 6

for (let i = 74; i <= 98; i++) {
  console.log(i);
}

// exercise

const emailList =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|" +
  "ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com";
const allEmail = emailList.split("|");
console.log(allEmail);

function sendEmailTo(recipient) {
  for (let i = 0; i < 3; i++) console.log("email sent to" + recipient);
}

//exercise final

function getTicketPrice(age, isStudent) {
  if (age > 0 && age < 6) {
    return `0`;
  } else if (isStudent || age >= 65) {
    return `50 for students or aged 65 and above`;
  }
}
console.log(getTicketPrice);

// exercise

const getRectangleArea = (width, height) => {
  return width * height;
};
const randomNumber = Math.random();
console.log(randomNumber);

let toDoItem = ["Groceries", "cahier"];
console.log(toDoItem);

function checkItem() {
  toDoItem = toDoItem + " - done";
  console.log(toDoItem);
}
checkItem();
console.log(`You bought: ${toDoItem}`);

function multiply(a, b) {
  return a * b;
}

const resultMultiply = multiply(255, 8);
console.log(resultMultiply);
