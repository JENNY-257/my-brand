const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
form.onsubmit = async (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);
  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
  
  //if eField and pField doesn't contains error class that mean user filled details properly
  // if(!eField.classList.contains("error") && !pField.classList.contains("error")){
  //     //redirecting user to the specified url which is inside action attribute of form tag
  // }
 let signupEmail ;
 let signupPassword;

 let emailValue = eInput.value
 let passwordValue = pInput.value
 await axios.get("https://iribagiza-jean.onrender.com/api/v1/users")
.then((res)=>{

    for(let value of res.data){

        signupEmail = value.email
        signupPassword = value.password
    }
    console.log("response",res.data)
    

}).catch((err)=>{
    console.log("error", err)
})
console.log(eInput.value)
   //if(emailValue == signupEmail || passwordValue === signupPassword){
   
    let loginData = {
      "email": eInput.value,
      "password": pInput.value, 
  
     }

    
    
    axios.post("https://iribagiza-jean.onrender.com/api/v1/login", loginData)
  .then((res)=>{
   console.log("response", res)
   localStorage.setItem("token", res.data.token)
   window.location ="dashboard.html";
  }).catch((err)=>{console.log("error", err)})

  // }

  checkPass()
}
//}
function checkPass(){ //checkPass function
  if(pInput.value == ""){ //if pass is empty then add error and remove valid class
    pField.classList.add("error");
    pField.classList.remove("valid");
  }else{ //if pass is empty then remove error and add valid class
    pField.classList.remove("error");
    pField.classList.add("valid");
  }
}