import { add } from "date-fns";
import css from "./styles/styles.css";
import "./styles/normalize.css";

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
  if (projectBtn.style.display == "none") {
    projectBtn.style.display = "flex";
    projectForm.style.display = "none";
  } else {
    projectBtn.style.display = "none";
    projectForm.style.display = "flex";
  }
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
  let taskModal = document.getElementById("form-box");
  if (taskModal.style.display == "flex") {
    taskModal.style.display = "none";
  } else {
    taskModal.style.display = "flex";
  }
}

function addTask() {
  const todo = document.getElementById("todo");

  const task = document.createElement("div");
  task.classList.add("task");

  const priority = document.createElement("div");
  priority.classList.add("priority");
  task.appendChild(priority);

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = "Go to work";
  task.appendChild(name);

  const details = document.createElement("button");
  details.classList.add("details");
  details.textContent = "Details";
  task.appendChild(details);

  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = "July 19th";
  task.appendChild(date);

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

  todo.appendChild(task);
}

let curProject = null;
makeExample();
addTask();
document.getElementById("add").addEventListener("click", addProject);
document.getElementById("cancel").addEventListener("click", changeView);
document.getElementById("add-project").addEventListener("click", changeView);
document.getElementById("add-task").addEventListener("click", changeTaskView);
document.getElementById("cancel-btn").addEventListener("click", changeTaskView);
