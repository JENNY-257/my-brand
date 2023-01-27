const form = document.getElementById("comment-form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault(); // prevent the form from being submitted

  const name = document.getElementById("name");
  const message = document.getElementById("message");

  // remove any existing error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(error => error.remove());

  // check if the name field is empty
  if (!name.value) {
    // create and insert the error message
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "Please enter your name.";
    name.parentNode.insertBefore(errorMessage, name.nextSibling);
    name.classList.add("error");
  } else {
    name.classList.remove("error");
  }

  // check if the message field is empty
  if (!message.value) {
    // create and insert the error message
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "Please enter a message.";
    message.parentNode.insertBefore(errorMessage, message.nextSibling);
    message.classList.add("error");
  } else {
    message.classList.remove("error");
  }

  // check if there are no errors
  if (!document.querySelectorAll(".error").length) {
    form.submit();
  }
}