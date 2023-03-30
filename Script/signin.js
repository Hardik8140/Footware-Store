let Form = document.querySelector("form:nth-child(1)");
let LSEmail = document.getElementById("semail");
let LSPass = document.getElementById("spass");

let SData = JSON.parse(localStorage.getItem("Register")) || [];

Form.addEventListener("submit", InpData);

let flag = false;
function InpData(e) {
  e.preventDefault();

  for (let i = 0; i < SData.length; i++) {
    if (LSEmail.value === SData[i].Email && LSPass.value === SData[i].Pass) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Sign In Successfull");
  } else {
    alert("Email And Password are different");
  }
}
