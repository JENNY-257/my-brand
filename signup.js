const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (username.value === '') {
    usernameError.textContent = 'Please enter a username.';
    usernameError.style.color = 'red';
  } else {
    usernameError.textContent = '';
  }

  if (email.value === '') {
    emailError.textContent = 'Please enter an email.';
    emailError.style.color = 'red';
  } else {
    emailError.textContent = '';
  }

  if (password.value === '') {
    passwordError.textContent = 'Please enter a password.';
    passwordError.style.color = 'red';
  } else {
    passwordError.textContent = '';
  }
 


if(password.value ===""|| email.value === ""){

  let signupData = {
    "username": username.value,
    "email": email.value ,
    "password": password.value, 

   }

  axios.post("https://iribagiza-jean.onrender.com/api/v1/users", signupData)
  .then((res)=>{
   console.log("response", res)
   localStorage.setItem("token", res.data.token)
  }).catch((err)=>{
    console.log("error", err)
    passwordError.textContent = err.data.message;
  })
   

}
  


});
