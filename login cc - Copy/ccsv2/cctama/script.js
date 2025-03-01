// script.js
const careerData = {
  developer: {
    title: "Software Developer",
    tasks: [
      { task: "Learn HTML & CSS", completed: false },
      { task: "Master JavaScript", completed: false },
      { task: "Build Projects", completed: false },
      { task: "Learn Node.js", completed: false },
      { task: "Build a Portfolio", completed: false },
    ],
  },
  designer: {
    title: "Graphic Designer",
    tasks: [
      { task: "Learn Photoshop", completed: false },
      { task: "Master Illustrator", completed: false },
      { task: "Create Mockups", completed: false },
      { task: "Learn UI/UX Design", completed: false },
      { task: "Build a Portfolio", completed: false },
    ],
  },
  "data-scientist": {
    title: "Data Scientist",
    tasks: [
      { task: "Learn Python", completed: false },
      { task: "Master SQL", completed: false },
      { task: "Understand Machine Learning", completed: false },
      { task: "Work on Data Projects", completed: false },
      { task: "Contribute to Open Source", completed: false },
    ],
  },
  marketer: {
    title: "Digital Marketer",
    tasks: [
      { task: "Learn SEO", completed: false },
      { task: "Master Google Analytics", completed: false },
      { task: "Run Paid Ads Campaigns", completed: false },
      { task: "Create Content Marketing Strategies", completed: false },
      { task: "Build a Portfolio", completed: false },
    ],
  },
};

function loadCareerTasks(career) {
  // Set the career title
  const careerInfo = careerData[career];
  document.getElementById("career-title").textContent = careerInfo.title;

  // Clear the current task lists
  document.getElementById("completed-tasks").innerHTML = "";
  document.getElementById("future-tasks").innerHTML = "";

  // Loop through tasks and display them based on completion status
  careerInfo.tasks.forEach((taskObj, index) => {
    const taskElement = document.createElement("li");
    taskElement.textContent = taskObj.task;

    if (taskObj.completed) {
      taskElement.classList.add("completed");
    } else {
      const button = document.createElement("button");
      button.textContent = "Mark as Completed";
      button.disabled = index > 0 && !careerInfo.tasks[index - 1].completed; // Disable if previous task not completed
      button.onclick = () => completeTask(career, index);
      taskElement.appendChild(button);
    }

    document
      .getElementById(taskObj.completed ? "completed-tasks" : "future-tasks")
      .appendChild(taskElement);
  });
}

function completeTask(career, taskIndex) {
  // Mark the task as completed
  careerData[career].tasks[taskIndex].completed = true;

  // Reload the tasks to update the UI
  loadCareerTasks(career);
}

// Initialize with a default career path
loadCareerTasks("developer");
