let myName = "";
const myTodos = [];

function getReply(command) {
  const lowerCommand = command.toLowerCase();

  if (lowerCommand.includes("hello my name is")) {
    //get name customer
    const parts = command.split(/hello my name is/i);
    myName = parts[1].trim();
    return "nice to meet you " + myName;
  }

  // management name
  if (lowerCommand.includes("what is my name")) {
    if (myName === "") {
      return "I don't know your name yet!";
    }
    return "Your name is " + myName;
  }

  // Add a task
  if (lowerCommand.startsWith("add ") && lowerCommand.endsWith(" to my todo")) {
    const parts = command.split(/add\s+/i);
    const taskParts = parts[1].split(/\s+to my todo$/i);
    const task = taskParts[0].trim();

    myTodos.push(task);
    return task + " added to your todo";
  }

  // Remove a task (e.g., "Remove fishing from my todo")
  if (
    lowerCommand.startsWith("remove ") &&
    lowerCommand.endsWith(" from my todo")
  ) {
    const parts = command.split(/remove\s+/i);
    const taskParts = parts[1].split(/\s+from my todo$/i);
    const taskToRemove = taskParts[0].trim();

    const position = myTodos.findIndex(
      (task) => task.toLowerCase() === taskToRemove.toLowerCase(),
    );

    if (position !== -1) {
      myTodos.splice(position, 1);
      return "Removed " + taskToRemove + " from your todo";
    }
    return "Task not found in your list.";
  }

  // Show tasks
  if (lowerCommand.includes("what is on my todo")) {
    if (myTodos.length === 0) {
      return "You have no todos right now.";
    }

    let finalMessage = "you have " + myTodos.length + " todos - ";
    for (let i = 0; i < myTodos.length; i++) {
      finalMessage = finalMessage + myTodos[i];
      if (i < myTodos.length - 1) {
        finalMessage = finalMessage + " and ";
      }
    }
    return finalMessage;
  }

  // get date
  if (lowerCommand.includes("what day is it today")) {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.getFullYear();
    return day + ". of " + month + " " + year;
  }

  if (lowerCommand.includes("what is")) {
    const expression = lowerCommand
      .replace("what is", "")
      .trim()
      .replaceAll(" ", "");
    const operators = "+-/*%";

    for (let i = 1; i < expression.length; i++) {
      if (
        operators.includes(expression[i]) &&
        !operators.includes(expression[i - 1])
      ) {
        const operator = expression[i];
        const numbers = expression.split(operator);

        return operation(numbers[0], numbers[1], operator);
      }
    }
  }

  function operation(numberOne, numberTwo, operator) {
    const first = Number(numberOne);
    const second = Number(numberTwo);

    if (operator === "+") return first + second;
    if (operator === "-") return first - second;
    if (operator === "*") return first * second;
    if (operator === "/") return first / second;
    if (operator === "%") return first % second;
  }

  // set timer
  if (lowerCommand.includes("set a timer for 4 minutes")) {
    setTimeout(
      function () {
        console.log("Timer done");
      },
      4 * 60 * 1000,
    );

    return "Timer set for 4 minutes";
  }

  if (lowerCommand.includes("how are you")) {
    return "I am just a robot, but I am doing great!";
  }

  return "Sorry, I don't understand that command.";
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add Playing football to my todo")); // "Playing football added to your todo"
console.log(getReply("Add throwing assignment to my todo"));
console.log(getReply("What is on my todos"));
console.log(getReply("What day is it today"));
console.log(getReply("what is 20 * 4"));
console.log(getReply("what is 5 + 3"));
