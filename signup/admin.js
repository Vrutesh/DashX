// dark mode
let darkmode_btn = document.querySelector(".switch-theme");
const body = document.getElementsByTagName("body")[0];
const titleHeading = document.querySelector(".greet-msg");
let switch_btn = document.querySelector(".switch-theme img");
let previous_btn_img = document.querySelector(".previous-btn i");
darkmode_btn.addEventListener("click", () => {
  const currentBgColor = window.getComputedStyle(body).backgroundColor;

  body.classList.toggle("dark-mode");
  titleHeading.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    switch_btn.src = "/assets/images/moon-icon.svg";
    previous_btn_img.style.color = "#000";
  } else {
    switch_btn.src = "/assets/images/sun-icon.svg";
  }
});

//back to dashx
let previous_btn = document.querySelector(".previous-btn");
previous_btn.addEventListener(
  "click",
  () => (window.location.href = "/index.html")
);

// login
const login_btn = document.querySelector(".login-btn");
const email_container = document.querySelector(".email-container");
const password_container = document.querySelector(".password-container");
const isValid = false;

const validEmail = "admin@10";
const validPassword = "1022";

let error_msg = document.createElement("p");
error_msg.style.color = "red";
error_msg.style.marginTop = "10px";

// resuable function for error message
function showError(container, message) {
  error_msg.textContent = message;
  container.appendChild(error_msg);
}

login_btn.addEventListener("click", (event) => {
  event.preventDefault();
  let email_field = document.querySelector("#email-field").value;
  const password_field = document.querySelector("#password-field").value;

  if (email_field === "") {
    showError(email_container, "Please enter a valid email id");
  } else if (email_field !== validEmail) {
    showError(email_container, "Incorrect email id");
  } else if (password_field === "") {
    showError(password_container, "Please enter a password");
  } else if (password_field !== validPassword) {
    showError(password_container, "Incorrect password");
  } else {
    // After 2 seconds, hide the message and redirect
    setTimeout(() => {
      showMessage("Successfully logged In");
      // Wait for 3 seconds before redirecting
      setTimeout(() => {
        window.location.href = "/projectcard/card.html"; // Redirect to the next page
      }, 700);
    }, 300);
  }
});

// Function to Show the successful Message
function showMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.style.position = "fixed";
  messageDiv.style.top = "10%";
  messageDiv.style.left = "50%";
  messageDiv.style.transform = "translate(-50%, -50%)";
  messageDiv.style.backgroundColor = "#4CAF50"; // Green background
  messageDiv.style.color = "white"; // White text color
  messageDiv.style.padding = "10px 20px";
  messageDiv.style.borderRadius = "5px";
  messageDiv.style.fontSize = "16px";
  messageDiv.style.zIndex = "1000";
  messageDiv.style.textAlign = "center";
  messageDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

  document.body.appendChild(messageDiv);
}
