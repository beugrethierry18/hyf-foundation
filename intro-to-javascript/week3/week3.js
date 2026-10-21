// exercise 1 (object and array)

const user = {
  name: "Thierry",
  age: 33,
  skills: ["HTML", { CSS1: "grid", CSS2: "flex" }, "JS"],
};

console.log(user.name);
console.log(user["name"]);
const myAge = user.age;
console.log(myAge);
user.city = "Copenhagen";
user.age = 34;
console.log(user);
console.log(user.skills[1]);
console.log(user.skills[1].CSS2);

// exercise 2 (object)

const productOne = { name: "Bread", price: 5, inStock: true };
const productTwo = { name: "Yoghurt", price: 25, inStock: false };
const productThree = { name: "Cheese", price: 400, inStock: true };

const products = [productOne, productTwo, productThree];
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  if (product.inStock) {
    console.log(product.name, product.price);
  }
}

// exercise 3 (push and pop method)

const namesOne = ["Emil", "Zoey"];
names.push("Fowad");
console.log(namesOne);
console.log(names.length);
names.pop();
console.log(namesOne);
console.log(namesOne.length);
/*when i use .push() method to add item in array there is a new name at the end of array and length changes as well. when i use .pop() method to remove something inside array that removes the end.*/

// // exercise 4

// exercise 5 (unshift and shift method)

const namesTwo = ["Emil", "Zoey"];
names.unshift("Fowad");
console.log(namesTwo);
console.log(names.length);
names.shift();
console.log(namesTwo);
console.log(namesTwo.length);
/*.unshift() method allow me to add item at the beginning of array and .shift*/

// exercise 6

const names = ["Amina", "Emil", "Zoey", "Ahmad"];
const nameToremove = "Zoey";
const index = names.indexOf(nameToremove);
console.log(index);
if (index !== -1) {
  const removed = names.splice(index, 1);
  console.log(removed);
}
console.log(names);

const absentName = "Sofia";
const absentIndex = names.indexOf(absentName);
if (absentIndex !== -1) {
  const absentNameRemoved = names.splice(absentIndex, 1);
}
console.log(names);

//exercise 7

const array = ["HTML", "CSS", "JavaScript"];
array.includes("CSS");
[1, 2, 3].includes("2");
console.log(array.includes("CSS"));
console.log([1, 2, 3].includes(2));

// exercise 8

const studentObject = [{ name: "Koffi" }, { name: "Yao" }];
const isStudent = true;

function markStudents(students) {
  for (let i = 0; i < students.length; i++) {
    students[i].isStudent = true;
  }
}
markStudents(studentObject);
console.log(studentObject);
/*With the empty array, the console output an empty array*/

// test call stack

function double(number) {
  return number * 2;
}
function makeTotal(price) {
  const total = double(price);
  return total + 5;
}
console.log(makeTotal(10));
