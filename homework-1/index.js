/* Selectors */

let fullName = document.getElementById("nameSurname");
let age = document.getElementById("age");
let showBtn = document.getElementById("showBtn");
let linkedinUrl = document.getElementById("linkedinUrl");
let githubUrl = document.getElementById("githubUrl");
let cursor = document.getElementById("cursor");
let card = document.getElementById("card");

/* Add links to a href */

linkedinUrl.href = "https://www.linkedin.com/in/numan-aykut-%C5%9Fahinler/";
githubUrl.href = "https://github.com/aykutsahinler";

/* Event Listeners */

showBtn.addEventListener("click", showInfos);
window.addEventListener("mousemove", move);

/* Functions */

function showInfos() {
  let name = "Aykut";
  let surname = "Şahinler";
  let ageNum = 23;
  fullName.innerHTML = name + " " + surname;
  age.innerHTML = ageNum;
  showBtn.style.display = "none";
  createBall();
}

function move(e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  window.addEventListener("click", click);
  function click(e) {
    cursor.style.backgroundColor = "lightgrey";
    setTimeout(function () {
      cursor.style.backgroundColor = "transparent";
    }, 200);
  }
}

function createBall() {
  let avatar = document.createElement("DIV");
  for(let i = 0; i < 10; i++) {
    card.appendChild(avatar);
    avatar.classList.add("avatar");
  }
}