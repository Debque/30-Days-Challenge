import { useState } from "react";

function App() {
  const [status, SetStatus] = useState("Not Started");
  const [progress, setProgress] = useState(0);
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub"];

  return (
    <main className="container">
      <h1>My Coding Journey - Day 8</h1>
      <p>{new Date().toDateString()}</p>

      <p>I am learning web development because I want to build real products and understand how the web works behind the scenes.</p>
   
<h2>Skills I'm Working on</h2>
<ul>
  {skills.map((skill) => (
    <li key = {skill}>{skill}</li>
  ))}
</ul>

<div className="controls">
  <button onClick={() => {
    SetStatus("In Progress");
    setProgress(50);
  }}>
    Start Day
  </button>

<button onClick= {() => {
  SetStatus("Completed");
  setProgress(100);
}}>
  Mark as Completed
</button>

<button onClick = {() => {
  SetStatus("Not Started");
  setProgress(0);
}}>
  Reset Day
</button>
</div>

<p>Progress: {progress}%</p>
<p>Status: {status}</p>
    </main>
  );

}
 
export default App;