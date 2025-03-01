// Get references to the form and popup elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const errorMessage = document.getElementById("errorMessage");
const popup = document.getElementById("popup");
const userNamePopup = document.getElementById("userNamePopup");

// Add event listener to handle form submission
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = usernameInput.value.trim();

  if (username) {
    // Save username in local storage
    localStorage.setItem("currentUser", username);

    // Show success popup
    userNamePopup.textContent = username;
    popup.style.display = "flex";
  } else {
    // Show error message if no username entered
    errorMessage.textContent = "Please enter a valid name.";
  }
});

// Redirect to the main Career Compass page
function redirectToHome() {
  window.location.href =
    "file:///C:/Users/Admin/Desktop/login%20cc/ccsv2/index.html"; // Replace with your actual main project URL
}

// Logout functionality
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html"; // Redirect to login page
}
