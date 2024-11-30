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
  
    // Save the updated array back to localStorage
    localStorage.setItem("projects", JSON.stringify(projects));

    alert("Project added successfully!");

    // Clear the form fields after submission
    document.querySelector(".title").value = "";
    document.querySelector(".details").value = "";
    document.querySelector(".link").value = "";
  }
});

// logout 
const logout_btn = document.querySelector(".logout")
logout_btn.addEventListener("click",()=>{
  confirm("Are you sure ! you want to logged out ?")
  window.location.href = "/signup/adminLogin.html"
})
