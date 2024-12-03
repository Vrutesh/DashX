const addProject_btn = document.querySelector(".add-btn");
const titleContainer = document.querySelector(".title-container");
const detailsContainer = document.querySelector(".details-container");
const linkContainer = document.querySelector(".link-container");

// Function to create and append error messages
function errorMessage(container, message) {
  const error_msg = document.createElement("p");
  error_msg.style.color = "red";
  error_msg.style.marginLeft = "10px";
  error_msg.textContent = message;
  container.appendChild(error_msg);
}

addProject_btn.addEventListener("click", (event) => {
  event.preventDefault();
  const title_field = document.querySelector(".title").value;
  const details_field = document.querySelector(".details").value;
  const link_field = document.querySelector(".link").value;

  if (title_field === "") {
    errorMessage(titleContainer, "Title field can't be empty");
  } else if (details_field === "") {
    errorMessage(detailsContainer, "Please add Project details");
  } else if (link_field === "") {
    errorMessage(linkContainer, "Add project link");
  } else {
    // Create a new project object
    const newProject = {
      title: title_field,
      details: details_field,
      link: link_field,
    };

    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    // Add the new project to the array
    projects.push(newProject);

    localStorage.setItem("projects", JSON.stringify(projects));

    alert("Project added successfully!");

    // Clear the form fields after submission
    document.querySelector(".title").value = "";
    document.querySelector(".details").value = "";
    document.querySelector(".link").value = "";

    // Call getData again to update the project list on the page
    getData();
  }
});

// Logout functionality
const logout_btn = document.querySelector(".logout");
logout_btn.addEventListener("click", () => {
  confirm("Are you sure! you want to log out?");
  window.location.href = "/signup/adminLogin.html";
});

// Get project details and create a list of the projects
const getProjectList = (result) => {
  let project_header = document.createElement("div");
  project_header.classList.add("project-header");

  let list = document.createElement("li");
  list.textContent = result.title;

  let remove_btn_container = document.createElement("div");
  remove_btn_container.classList.add("remove-btn-container");

  let remove_btn = document.createElement("button");
  remove_btn.classList.add("remove-btn");
  remove_btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  remove_btn_container.appendChild(remove_btn);

  project_header.append(list, remove_btn_container);

  return project_header;
};

const getData = () => {
  const storedData = localStorage.getItem("projects");
  const projectListContainer = document.querySelector(".project-details");

  // Clear the existing list of projects before re-adding them
  projectListContainer.innerHTML = "";

  if (storedData) {
    const result = JSON.parse(storedData);
    console.log(result);

    result.forEach((project, index) => {
      const projectItem = getProjectList(project);
      const removeBtn = projectItem.querySelector(".remove-btn");

      // Add an event listener to the remove button
      removeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // Remove the project item from the DOM
        projectItem.remove();

        // Remove the project from localStorage
        result.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(result));

        // Re-render the project list after removal
        getData();
      });

      // Append the project item to the project list container
      projectListContainer.appendChild(projectItem);
    });
  }
};

// Call getData on initial load to render existing projects
getData();
