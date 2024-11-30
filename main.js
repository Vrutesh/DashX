// sidebar hamburger
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  hamburger.addEventListener("click", function (event) {
    event.stopPropagation(); 
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
      sidebar.style.width = "150px"; 
    } else {
      sidebar.style.width = "0";
    }
  });

  // Close sidebar when clicking outside of it
  document.body.addEventListener("click", function (event) {
    const target = event.target;
    if (target !== sidebar && !sidebar.contains(target)) {
      sidebar.style.width = "0";
    }
  });
});


// helper function to get card data 
const createCard = (result) => { 
  const project_item = document.createElement("div");
  project_item.classList.add("project-item");

  const project_card = document.createElement("div");
  project_card.classList.add("project-card");


  //project image
  const laptop_imgContainer = document.createElement("div")
  laptop_imgContainer.classList.add("laptop")

  const laptop_image = document.createElement("img")
  laptop_image.classList.add("laptop-image")
  laptop_image.src = "assets/images/laptop.webp"

  const project_image = document.createElement("img")
  project_image.classList.add("project-image")

  laptop_imgContainer.append(laptop_image, project_image)

  // project title
  const project_title = document.createElement("h2");
  project_title.classList.add("project-title");
  project_title.textContent = result.title;  

  // project description
  const project_desc = document.createElement("p");
  project_desc.classList.add("project-desc");
  project_desc.textContent = result.details;  

  // project link
  const linkBtn_container = document.createElement("div");
  linkBtn_container.classList.add("project-btn");

  const project_link = document.createElement("a");
  project_link.classList.add("glow-btn");
  project_link.textContent = "Get Started";
  project_link.href = result.link;  

  linkBtn_container.appendChild(project_link);

  project_card.append(laptop_imgContainer, project_title, project_desc);
  project_item.append(project_card, linkBtn_container);

  return project_item;
};

// get project details function 
const getProject = () => {
  const storeddata = localStorage.getItem("projects");
  if (storeddata) {
    const result = JSON.parse(storeddata);
    console.log(result)
    // append project details 
    const project_list = document.querySelector(".project-list");
    for (const projects of result) {
      project_list.appendChild(createCard(projects)); 
      console.log(projects)
    }
  }

  // console.log(storeddata);
};

getProject();

