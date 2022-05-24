import { add, format } from "date-fns";
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
  projectBtn.addEventListener("click", makeCurrent, projectBtn);
  projects.appendChild(projectBtn);
  changeView();
}

function makeCurrent(projectBtn) {
  removeCurrent();
  let name = projectBtn.target.innerHTML;
  name = "- " + name + " -";
  projectBtn.target.innerHTML = name;
  curProject = projectBtn.target;
}

function removeCurrent() {
  if (curProject == null) {
    return;
  }
  let name = curProject.textContent;
  name = name.substring(2, name.length - 2);
  curProject.textContent = name;
}

function changeView() {
  let projectBtn = document.getElementById("add-project");
  let projectForm = document.getElementById("project-form");
  changeDisplay(projectBtn);
  changeDisplay(projectForm);
  document.getElementById("project-name").value = "";
}

function makeExample() {
  let projects = document.getElementById("projects");
  let projectBtn = document.createElement("button");
  projectBtn.setAttribute("id", "project");
  projectBtn.textContent = "- Example -";
  projectBtn.addEventListener("click", makeCurrent, projectBtn);
  projects.appendChild(projectBtn);
  curProject = projectBtn;
}

function changeTaskView() {
  // @todo Clear form when cancel is clicked
  const taskModal = document.getElementById("form-box");
  changeOpacitiy();
  changeDisplay(taskModal);
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
  // @todo: change details for the clicked todo item
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
  addTask(taskName, dateFormat, taskPriority);
}

function changeDetailsView() {
  const details = document.getElementById("details-box");
  changeOpacitiy();
  changeDisplay(details);
}

let curProject = null;
makeExample();
document.getElementById("add").addEventListener("click", addProject);
document.getElementById("cancel").addEventListener("click", changeView);
document.getElementById("add-project").addEventListener("click", changeView);
document.getElementById("add-task").addEventListener("click", changeTaskView);
document.getElementById("cancel-btn").addEventListener("click", changeTaskView);
document.getElementById("add-form").addEventListener("submit", taskClick);
document
  .getElementById("details-exit")
  .addEventListener("click", changeDetailsView);
