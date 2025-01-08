const strength = document.querySelector("#strength");
const showHides = document.querySelectorAll(".show-hide");
const firstInput = document.querySelector(".input-field1");
const secondInput = document.querySelector(".input-field2");
const submit = document.querySelector('.button')
const msg = document.querySelector('#message')

submit.addEventListener('click', function(){
  if(firstInput.value!= secondInput.value){
    msg.innerText = 'Confirm Password is wrong'
    secondInput.value = ''
  }
  else{
    msg.innerText = ''
  }
})

// Add a fixed width to the button to prevent layout shift
showHides.forEach(showHide => {
  showHide.style.width = "60px"; // Set a fixed width for consistency

  showHide.addEventListener("click", () => {
    if (showHide.textContent === "Show") {
      showHide.textContent = "Hide";
      firstInput.type = "text";
      secondInput.type = "text";
    } else {
      showHide.textContent = "Show";
      firstInput.type = "password";
      secondInput.type = "password";
    }
  });
});

// Select the correct input field
const passwordInput = document.querySelector("#password");

// Password strength evaluation function
function evaluatePasswordStrength(password) {
  if (!password) {
    strength.innerHTML = "";
    strength.style.color = "inherit";
    strength.style.display = "none";
    return;
  }

  let strengthMessage = "Very Weak";
  let color = "#8B0000"; // Dark red
  strength.style.display = "block";

  if (password.length <= 3) {
    strengthMessage = "Very Weak";
    color = "#8B0000";
  } else if (password.length > 3 && password.length <= 5) {
    strengthMessage = "Weak";
    color = "#FF4500";
  } else if (password.length > 5 && password.length <= 7) {
    strengthMessage = "Medium";
    color = "#FF8C00";
  } else if (password.length > 7) {
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[\W_]/.test(password);

    if (hasLower + hasUpper + hasNumber + hasSpecial >= 3) {
      strengthMessage = "Strong";
      color = "#008000"; // Green
    } else if (hasLower + hasUpper + hasNumber + hasSpecial >= 2) {
      strengthMessage = "Medium";
      color = "#FF8C00";
    } else {
      strengthMessage = "Weak";
      color = "#FF4500";
    }

    if (hasSpecial) {
      strengthMessage = "Very Strong";
      color = "#006400"; // Dark green
    }
  }

  strength.innerHTML = strengthMessage;
  strength.style.color = color;
  strength.style.display = "block";
}

// Add an input event listener for dynamic password strength checking
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  evaluatePasswordStrength(password);
});
