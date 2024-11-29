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
    let id = 0
    id++
    const newProject = {
      title: title_field,
      details: details_field,
      link: link_field,
    };

    localStorage.setItem("projectKey" + id, JSON.stringify(newProject));

    alert("Project added successfully!");

    // Clear the form fields after submission
    document.querySelector(".title").value = "";
    document.querySelector(".details").value = "";
    document.querySelector(".link").value = "";
  }
});
