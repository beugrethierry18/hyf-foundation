const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const nameInput = document.querySelector("#student-name");
const assignBtn = document.querySelector("#assign-house-btn");
const resultEl = document.querySelector("#house-result");

function getRandomHouse() {
  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
}

assignBtn.addEventListener("click", () => {
  const studentName = nameInput.value.trim();

  if (!studentName) {
    return (resultEl.textContent =
      "Please enter your name first before choosing a house.");
  }

  const chosenHouse = getRandomHouse();
  resultEl.textContent = `${studentName} belongs in ${chosenHouse}! Click again to try another house.`;
});
