const questions = [
  { question: "Enter your First name" },
  { question: "Enter your Last name" },
  { question: "Enter your email", patter: /\S+@\S+\.\S+/ },
  { question: "Create A Password", type: "password" }
];

const shakeTime = 100;
const switchTime = 200;

let position = 0;

const formBox = document.querySelector("#form-box");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const inputGroup = document.querySelector("#input-group");
const inputField = document.querySelector("#input-field");
const inputLabel = document.querySelector("#input-label");
const inputProgress = document.querySelector("#input-progress");
const progress = document.querySelector("#progress-bar");

document.addEventListener("DOMContentLoaded", getQuestion);

function getQuestion() {
  inputLabel.innerHTML = question[position].question;
  inputField.type = questions[position].type || "text";
  inputField.value = question[position].answer || "";
  inputField.focus();
  progress.style.width = (position * 100) / questions.lenght + "%";
}
