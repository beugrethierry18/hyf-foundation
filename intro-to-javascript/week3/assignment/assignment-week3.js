// exercise 1:

/* Item array removal
Remove the item in names that is equal to nameToRemove
Copy the code below to your assignment */

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

// Write some code here

const nameToRemove = "Ahmad";
const index = names.indexOf(nameToRemove);
console.log(index);
if (index !== -1) {
  const removed = names.splice(index, 1);
}

// Code done

console.log(names);

// exercise 2:
/* When will we be there??
Write a function where you specify your speed in km/h and how far you have to go in km. The function has to return the time it will take to arrive at your destination. The time should be formatted like this: 3 hours and 34 minutes.
Hint: For formatting your best friend is Google! */

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function specifyYourSpeed() {
  const speed = travelInformation.speed;
  const distance = travelInformation.destinationDistance;
  const calculTimeTotalInMinutes = Math.round((distance / speed) * 60);
  const calculTimeInHour = Math.floor(calculTimeTotalInMinutes / 60);
  const calculTimeTravelInMinutes = calculTimeTotalInMinutes % 60;

  return `Your speed is: ${speed} km/h and you have to go in ${distance} Km. it'll take ${calculTimeInHour} hours and ${calculTimeTravelInMinutes} minutes`;
}

const travelTime = specifyYourSpeed(travelInformation);
console.log(travelTime);

// exercise 3 series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
const lifeSpan = 80;
seriesDurations.unshift({ title: "Suits", days: 3, hours: 21, minutes: 48 });
console.log(seriesDurations);

function logOutSeriesText() {
  let totalPercentage = 0;
  for (const seriesDuration of seriesDurations) {
    const convertSeriesDurationInDays =
      seriesDuration.days +
      seriesDuration.hours / 24 +
      seriesDuration.minutes / (24 * 60);
    const convertYearInDays = lifeSpan * 365;
    const calculPercentage =
      (convertSeriesDurationInDays / convertYearInDays) * 100;
    totalPercentage += calculPercentage;
    console.log(
      `${seriesDuration.title} took ${calculPercentage.toFixed(3)}% of my life`,
    );
  }
  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}
logOutSeriesText();

// exercise 4 NOnoN0nOYes

//(Note taking app)

const notes = [];
function saveNote(content, id) {
  if (content && id) {
    return notes.push({ content, id });
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

//Get note

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
    if (id === undefined || id === null) {
      return "ERROR";
    }
  }
}

const firstNote = getNote(3);
console.log(firstNote);

// Log out notes

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`,
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// exercise 5

// Exercice CactusIO-interactive (Smart phone usage app)

const activities = [];

function addActivity(date, activity, duration) {
  const newActivity = {
    date: date,
    activity: activity,
    duration: duration,
  };
  activities.push(newActivity);
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
addActivity("23/7-18", "News", 28);
console.log(activities);

//show my status

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }
  const numberOfActivities = activities.length;
  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    totalDuration = totalDuration + activities[i].duration;
  }
  console.log(
    "You have added " +
      numberOfActivities +
      " activities. They amount to " +
      totalDuration +
      " min. of usage",
  );
}

showStatus();
