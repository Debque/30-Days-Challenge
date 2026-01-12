//Set Current Date
let isStarted = false;
let isCompleted = false;
let day = 4;
let status = "not-started";

document.getElementById("date").textContent = new Date().toDateString();

const buttons = document.querySelectorAll ("[data-action]");

buttons.forEach(button => {
  button.addEventListener ("click", () => {
const action = button.dataset.action;

if (action === "start") {
  updateProgress(50);
  updateStatus("In Progress")
}

if (action === "complete") {
  updateProgress(100);
  updateStatus("Completed")
  }
if (action === "toggle") {
  statusE1.textContent.includes("Completed") ? updateStatus ("In Progress") : updateStatus ("Completed")
  ? updateStatus ("In Progress")
  : updateStatus ("Completed")
}
if (action === "reset") {

  updateProgress(0);
  updateStatus("Not Completed")
}
  });
});

//Update Progress and Status
const progressE1 = document.querySelector(".progress");
const statusE1 = document.querySelector(".status-text");

function updateProgress(value) {
  progressE1.textContent = `progress: ${value}%`
}

function updateStatus(text) {
  statusE1.textContent = `Status: ${text}`;
}