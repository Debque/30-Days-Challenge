//Set Current Date
let isStarted = false;
let isCompleted = false;
let day = 3;

document.getElementById("date").textContent = new Date().toDateString();

//Define Variables
const skill = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub"]
const skillsList = document.getElementById("skillsList")
const statusText = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const completeBtn = document.getElementById("completeBtn");
const resetBtn = document.getElementById("resetBtn");
const progress = document.getElementById("progress");


//SkillsList Event Listener
skill.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
})

//Start Button Event Listener
startBtn.addEventListener("click", () => {
  if (isStarted) return;
  isStarted = true;
  alert("Day 3 Started");
  progress.textContent = "Progress: 50%";
  startBtn.disabled = true;
  startBtn.style.opacity = 0.5;
  startBtn.style.cursor = "not-allowed";
});

//Completed Button Event Listener
completeBtn.addEventListener("click", () => {
  if (!isStarted || isCompleted) return;
  isCompleted = true;
  statusText.textContent = "Status: Completed";
  statusText.classList.add("completed");
  progress.textContent = "Progress: 100%";
  //Disable the button after marking as completed
  completeBtn.disabled = true;
  completeBtn.style.opacity = 0.5;
  completeBtn.style.cursor = "not-allowed";
});

//Progress Button Event Listener
resetBtn.addEventListener("click", () => {
  isStarted = false;
  isCompleted = false;
  statusText.innerText = "Status: Not Completed";
  statusText.classList.remove("completed");
  progress.textContent = "Progress: 0%";
  startBtn.disabled = false;
  completeBtn.disabled = false;
  startBtn.style.opacity = 1;
  completeBtn.style.opacity = 1;
  startBtn.style.cursor = "pointer";
  completeBtn.style.cursor = "pointer";
 
  
 
  
  if (progress) {
    progress.style.width = "0%";
  }
});

let learningLog = [
  "Understood Arrays",
  "Learned forEach loop",
  "Rendered HTML dynamically"
];

learningLog.forEach(log => {
  console.log("✅" + log);
});

// React is used for building fast and interacting user interfaces for web applications. Component in React are reusable pieces of code that represent parts of a user interface. They allow developers to break down complex UIs into smaller, manageable, and independent pieces, making it easier to build, maintain, and scale applications. Components can be functional or class-based, and they can accept inputs called "props" to customize their behavior and appearance. By using components, developers can create modular and reusable code, leading to more efficient development processes and better user experiences.
//JSX stands for JavaScript XML, It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside your JavaScript files. It is preferred because it makes the code more readable and easier to understand, you can also put any JavaScript expression inside JSX by wrapping it inside curly braces. React uses JSX to figure out exactly what needs to change on the screen, making your applications faster.
//State in React is a built-in object that allows components to manage and track data that can change over time. It is used to store information that affects the rendering of a component and can be updated in response to user interactions or other events. When the state of a component changes, React automatically re-renders the component and its child components to reflect the updated state, ensuring that the user interface stays in sync with the underlying data. State is typically managed using the useState hook in functional components or the this.state object in class components.