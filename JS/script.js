const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");

const body = document.body;

button1.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

button2.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

button3.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

button4.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});

button5.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});

