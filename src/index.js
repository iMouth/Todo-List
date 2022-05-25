import { format } from "date-fns";
import css from "./styles/styles.css";
import "./styles/normalize.css";
import "./styles/task.css";
import "./styles/details.css";
import "./styles/todo.css";

function addProject() {
  let projects = document.getElementById("projects");
  let projectName = document.getElementById("project-name").value;
  if (projectName == "") {
    return;
  }
  let projectBtn = document.createElement("button");
  projectBtn.setAttribute("id", "project");
  projectBtn.textContent = projectName;
  projects.appendChild(projectBtn);
  projectBtn.addEventListener("click", makeCurrent, projectBtn);

  changeProjectView();
  removeCurrent();
  todoDict[projectName] = {};
  curProject = projectBtn.textContent;
}

function makeCurrent(projectBtn) {
  removeCurrent();
  curProject = projectBtn.path[0].textContent;
  projectBtn.path[0].textContent = curProject;
  setUpTasks();
}

function removeCurrent() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });
}

function changeProjectView() {
  let projectBtn = document.getElementById("add-project");
  let projectForm = document.getElementById("project-form");
  if (projectBtn.style.display == "none") {
    projectBtn.style.display = "flex";
    projectForm.style.display = "none";
  } else {
    projectBtn.style.display = "none";
    projectForm.style.display = "flex";
  }
  document.getElementById("project-form").reset();
}

function changeTaskView() {
  // @todo Clear form when cancel is clicked
  if (curProject == null) {
    return;
  }
  changeOpacitiy();
  changeDisplay(document.getElementById("form-box"));
}

function addTask(nameText, dateText, priorityChoice) {
  const todo = document.getElementById("todo");

  const task = document.createElement("div");
  task.classList.add("task");
  todo.appendChild(task);

  const priority = document.createElement("div");
  priority.classList.add("priority");
  switch (priorityChoice) {
    case "Low":
      priority.style.backgroundColor = "lime";
      break;
    case "Medium":
      priority.style.backgroundColor = "goldenrod";
      break;
    case "High":
      priority.style.backgroundColor = "crimson";
      break;
  }
  task.appendChild(priority);

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = nameText;
  name.onclick = function finishedTask() {
    if (name.style.textDecoration == "line-through") {
      name.style.textDecoration = "none";
    } else {
      name.style.textDecoration = "line-through";
    }
  };
  task.appendChild(name);

  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = dateText;
  task.appendChild(date);

  const details = document.createElement("button");
  details.classList.add("details");
  details.textContent = "Details";
  details.addEventListener("click", setDetails);
  task.appendChild(details);

  const edit = document.createElement("button");
  edit.classList.add("edit");
  const editIcon = document.createElement("img");
  editIcon.classList.add("edit-icon");
  editIcon.setAttribute("src", "../dist/img/edit.png");
  edit.appendChild(editIcon);
  task.appendChild(edit);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  const deleteIcon = document.createElement("img");
  deleteIcon.classList.add("delete-icon");
  deleteIcon.setAttribute("src", "../dist/img/trash.png");
  deleteBtn.appendChild(deleteIcon);
  deleteBtn.addEventListener("click", deleteTask);
  task.appendChild(deleteBtn);
}

function changeOpacitiy() {
  const projectWrap = document.getElementById("project-wrap");
  const todo = document.getElementById("todo");
  if (projectWrap.style.opacity == "0.5") {
    projectWrap.style.opacity = "1.0";
    todo.style.opacity = "1.0";
  } else {
    projectWrap.style.opacity = "0.5";
    todo.style.opacity = "0.5";
  }
}

function changeDisplay(item) {
  if (item.style.display == "flex") {
    item.style.display = "none";
  } else {
    item.style.display = "flex";
  }
}

function changeDetailsView() {
  changeOpacitiy();
  changeDisplay(document.getElementById("details-box"));
}

function setUpTasks() {
  let projectName = curProject;
  const tasks = todoDict[projectName];
  if (tasks != null) {
    for (const [key, value] of Object.entries(tasks)) {
      addTask(value.name, value.date, value.priority);
    }
  }
}

function deleteTask(e) {
  console.log(e);
  console.log(todoDict);
  let name = e.path[2].childNodes[1].innerText;
  console.log(name);
  delete todoDict[curProject][name];
  console.log(todoDict);
  e.path[2].remove();
}

function setDetails(e) {
  changeDetailsView();
  let name = e.path[1].childNodes[1].innerText;
  let info = todoDict[curProject][name];
  document.getElementById("details-title").textContent = info.name;
  document.getElementById("details-project").textContent =
    "Project: " + curProject;
  document.getElementById("details-dueDate").textContent =
    "Due Date: " + info.date;
  document.getElementById("details-priority").textContent =
    "Priority: " + info.priority;
  document.getElementById("details-desc").textContent =
    "Description: " + info.desc;
}

function taskClick(e) {
  e.preventDefault();
  changeTaskView();
  const taskName = document.getElementById("task-name").value;
  const taskDesc = document.getElementById("task-desc").value;
  const taskDate = document.getElementById("task-date").value;
  const date = taskDate.split("-");
  const dateFormat = format(new Date(date[0], date[1], date[2]), "MMM do");
  const taskPriority = document.getElementById("priority-list").value;
  document.getElementById("add-form").reset();
  addTask(taskName, dateFormat, taskPriority, taskDesc);

  let projectName = curProject;

  let info = {
    name: taskName,
    date: dateFormat,
    priority: taskPriority,
    desc: taskDesc,
  };
  todoDict[projectName][taskName] = info;
}

let curProject = null;
let todoDict = {};
document.getElementById("add").addEventListener("click", addProject);
document.getElementById("cancel").addEventListener("click", changeProjectView);
document
  .getElementById("add-project")
  .addEventListener("click", changeProjectView);
document.getElementById("add-task").addEventListener("click", changeTaskView);
document.getElementById("cancel-btn").addEventListener("click", changeTaskView);
document.getElementById("add-form").addEventListener("submit", taskClick);
document
  .getElementById("details-exit")
  .addEventListener("click", changeDetailsView);
