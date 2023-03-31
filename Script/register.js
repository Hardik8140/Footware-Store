let myForm = document.querySelector("form:nth-child(2)");

let Email = document.getElementById("email");
let CEmail = document.getElementById("Cemail");
let Pass = document.getElementById("pass");
let Cpass = document.getElementById("Cpass");

let RData = JSON.parse(localStorage.getItem("Register")) || [];

myForm.addEventListener("submit", InpData);

function InpData(e) {
  e.preventDefault();

  let Fname = document.getElementById("fname").value;
  let Lname = document.getElementById("lname").value;
  let Email = document.getElementById("email").value;
  let CEmail = document.getElementById("Cemail").value;

  let Pass = document.getElementById("pass").value;
  let Cpass = document.getElementById("Cpass").value;

  RData.push({ Fname, Lname, Email, CEmail, Pass, Cpass });
  localStorage.setItem("Register", JSON.stringify(RData));
}
function checkEmail() {
  if (Email.value === CEmail.value) {
    alert("Email Address Match");
  } else {
    alert("Email Address Not Match");
  }
}
function checkPassWord() {
  if (Pass.value === Cpass.value) {
    alert("Password Match");
  } else {
    alert("Password Not Match");
  }
}
