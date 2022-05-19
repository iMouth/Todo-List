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

let curProject = null;
makeExample();
document.getElementById("add").addEventListener("click", addProject);
document.getElementById("cancel").addEventListener("click", changeView);
document.getElementById("add-project").addEventListener("click", changeView);
