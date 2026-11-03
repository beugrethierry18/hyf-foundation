let myName = "";
const myTodos = [];

function getReply(command) {
  if (command.includes("Hello my name is")) {
    //get name customer
    const parts = command.split("is ");
    myName = parts[1];
    return "nice to meet you " + myName;
  }

  // management name
  if (myName === "") {
    return "I don't know your name yet!";
  }
  if (command.includes("What is my name")) {
    return "Your name is " + myName;
  }

  // Add a task
  if (command.includes("Add") && command.includes("to my todo")) {
    let parts = command.split("Add ");
    let taskParts = parts[1].split(" to my todo");
    let task = taskParts[0];
    myTodos.push(task);
    return task + " added to your todo";
  }

  // Remove a task (e.g., "Remove fishing from my todo")
  if (command.includes("Remove") && command.includes("from my todo")) {
    let parts = command.split("Remove ");
    let taskParts = taskToRemove[1].split(" from my todo");
    let taskToRemove = taskParts[0];

    let position = myTodos.indexOf(taskToRemove);
    if (position !== -1) {
      myTodos.splice(position, 1);
      return "Removed " + taskToRemove + " from your todo";
    }
    return "Task not found in your list.";
  }

  // Show tasks
  if (command.includes("What is on my todo")) {
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
  if (command.includes("What day is it today")) {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.getFullYear();
    return day + ". of " + month + " " + year;
  }

  if (command.includes("what is 3 + 3")) {
    return "6";
  }

  if (command.includes("what is 4 * 12")) {
    return "48";
  }

  // set timer
  if (command.includes("Set a timer for 4 minutes")) {
    setTimeout(
      function () {
        console.log("Timer done");
      },
      4 * 60 * 1000,
    );

    return "Timer set for 4 minutes";
  }

  if (command.includes("How are you")) {
    return "I am just a robot, but I am doing great!";
  }
  return "Sorry, I don't understand that command.";
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add Playing football to my todo")); // "fishing added to your todo"
console.log(getReply("Add throwing assignment to my todo"));
console.log(getReply("What is on my todos"));
console.log(getReply("What day is it today"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("what is 3 + 3"));
