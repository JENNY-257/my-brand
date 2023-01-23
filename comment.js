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
    errorMessage.innerHTML = "Please enter your name.";
    name.parentNode.insertBefore(errorMessage, name.nextSibling);
    name.classList.add("error");
    return;
  } else {
    name.classList.remove("error");
  }

  // check if the message field is empty
  if (!message.value) {
    // create and insert the error message
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.innerHTML = "Please enter a message.";
    message.parentNode.insertBefore(errorMessage, message.nextSibling);
    message.classList.add("error");
    return;
  } else {
    message.classList.remove("error");
  }

  // if no errors, submit the form
  form.submit();
}
