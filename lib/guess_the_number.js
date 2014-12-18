var randNum = Math.floor(Math.random() * 1000);
var name = prompt("What is your name?")
response = parseInt(prompt("pick a number between 1 and 1000"));

while (response !== randNum) {
  if (response < randNum) {
  response = parseInt(prompt(name + " Too Low! Try again!"));
} else if (response > randNum) {
    response = parseInt(prompt(name + " Too High Try Again!"));
  }
} alert("Congratulations you guessed the number!");
