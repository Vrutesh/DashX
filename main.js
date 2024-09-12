//sidebar hamburger
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
  
    hamburger.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents click event from propagating to the document body
      if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        sidebar.style.width = "150px"; // Adjust the width as needed
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