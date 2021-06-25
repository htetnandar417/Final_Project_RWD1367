let predefinedData = {
  email: "maria123@gmail.com",
  psw: "mnur456",
};
let email, psw;
let inputEmail = document.getElementById("email");
let inputPsw = document.getElementById("psw");
let btn = document.getElementById("btn");
btn.onclick = function () {
  email = inputEmail.value;
  psw = inputPsw.value;

  if (email == predefinedData.email && psw == predefinedData.psw) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", psw);
    window.location.href = "./adminPanel.html";
  } else if (email != predefinedData.email) {
    let p = document.getElementById("error");
    console.log(p);
    p.style.display = "initial";
    p.innerText = "Invalid email";
  } else if (psw != predefinedData.psw) {
    let p = document.getElementById("error");
    p.style.display = "initial";
    p.innerText = "Invalid password";
  }
};
