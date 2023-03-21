// Get the form element and input fields
const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const errorMessage = document.querySelector("#error-message");

// Add event listener to the form
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Check if the username or password fields are empty
  if (username.value === "" || password.value === "") {
    // Display an error message if the fields are empty
    errorMessage.textContent = "Please fill in all fields.";
  } else if (username.value !== "user" || password.value !== "password") {
    // Display an error message if the username or password is incorrect
    errorMessage.textContent = "Incorrect username or password.";
  } else {
    // Redirect to a different page if the login is successful
    window.location.href = "secret-page.html";
  }
});
