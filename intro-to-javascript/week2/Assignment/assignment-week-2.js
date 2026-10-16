// step 3; smart-ease - Goes Global
const person1 = ["KONAN", "Esther"];
const person2 = ["BENJAMIN", "Hugues"];

const getFullName = (FirstName, surname, userFormalName, isWomen) => {
  if (FirstName && surname && userFormalName === true) {
    return `Lord ${FirstName} ${surname}`;
  } else if (
    FirstName &&
    surname &&
    userFormalName === true &&
    isWomen === true
  ) {
    return `Lady ${FirstName} ${surname}`;
  } else if (FirstName && surname) {
    return `${FirstName} ${surname}`;
  } else {
    return `firstName, surname and isWomen are missing. Please fill them in.`;
  }
};

const fullName1 = getFullName(person1[0], person1[1], false, true);
const fullName2 = getFullName(person2[0], person2[1], true, false);
const fullName3 = getFullName("", "");

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);

// Event Application

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(daysFromToday) {
  const today = new Date().getDay();
  const daysIndex = (today + daysFromToday) % 7;

  return daysOfWeek[daysIndex];
}
getEventWeekday();
console.log(getEventWeekday(9));
console.log(getEventWeekday(29));

//Weather wear

function chooseYourClothesOfDay(temperature) {
  if (temperature < 0) {
    return `it's very cold today. Please you should wear clothing for Cooling: Jacket and hat!`;
  } else if (temperature >= 0 && temperature < 10) {
    return `Today you'll need a warm jacket.`;
  } else if (temperature >= 10 && temperature < 20) {
    return `Today the weather looks beautiful, you can wear A jumper and light jacket.`;
  } else {
    return `Youppii today is relaxed's clothes day, you can wear Shorts and t-shirt.`;
  }
}

const clotchesToWear = chooseYourClothesOfDay(18);
console.log(clotchesToWear);

// Student manager

const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Cannot add an empty string.");
    return;
  }

  let isAlreadyInClass = false;
  for (let i = 0; i < class07Students.length; i++) {
    if (class07Students[i] === studentName) {
      isAlreadyInClass = true;
    }
  }

  if (isAlreadyInClass) {
    console.log(`Student ${studentName} is already in the class.`);
    return;
  }

  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
  console.log(`Welcome to class 07, ${studentName}!`);
}
addStudentToClass("koffi YAO");
addStudentToClass("Kouakou KAN");
addStudentToClass("Zah BI");
addStudentToClass("Zrou LOU");
addStudentToClass("Camara KANDIA");
addStudentToClass("Zokou GBELI");
addStudentToClass("POCHAON TAS");
addStudentToClass("Queen");
addStudentToClass("");
console.log();
console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;
}
getNumberOfStudents();

const test = getNumberOfStudents();
console.log(test);
