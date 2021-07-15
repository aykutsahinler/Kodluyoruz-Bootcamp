// Get Elements
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let eMail = document.getElementById("mail");
let checkBox = document.getElementById("checkBox");
let submitButton = document.getElementById("submitButton");
let warnings = document.querySelectorAll(".warning");
let passwordWarning = document.getElementById("passwordWarning");
let eMailWarning = document.getElementById("eMailWarning");
let checkboxWarning = document.getElementById("checkboxWarning");
let userNameWarning = document.getElementById("userNameWarning");
let okey = document.getElementById("okey");

// Event Listeners
submitButton.addEventListener("click", submit);

// Functions
function showWarning() {
  if (userName.value === "") {
    userNameWarning.style.display = "block";
    setTimeout(function () {
      userNameWarning.style.display = "none";
    }, 5000);
  }
  if (password.value.length < 8) {
    passwordWarning.style.display = "block";
    setTimeout(function () {
      passwordWarning.style.display = "none";
    }, 5000);
  }

  let mail = eMail.value;
  let isOkey = mail.indexOf("@");

  if (isOkey < 1) {
    eMailWarning.style.display = "block";
    setTimeout(function () {
      eMailWarning.style.display = "none";
    }, 5000);
  }

  if (checkBox.checked == false) {
    checkboxWarning.style.display = "block";
    okey.style.display = "none";
    setTimeout(function () {
      checkboxWarning.style.display = "none";
      okey.style.display = "block";
    }, 5000);
  }
}

function submit() {
  showWarning();
}
