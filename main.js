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

// create card function 



