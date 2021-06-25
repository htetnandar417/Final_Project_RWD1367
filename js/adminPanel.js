let predefinedData = {
  email: "maria123@gmail.com",
  image: "./images/user-profile2.jpg",
  name: "Maria Nur",
};
let profile = document.getElementById("profile");
let overlayDiv = document.createElement("div");
overlayDiv.setAttribute("class", "overlay");
profile.appendChild(overlayDiv);
let headerDiv = document.createElement("div");
headerDiv.setAttribute("class", "box header");
profile.appendChild(headerDiv);
let img = document.createElement("img");
img.setAttribute("src", predefinedData.image);
headerDiv.appendChild(img);
let h2 = document.createElement("h2");
let h2Text = document.createTextNode(predefinedData.name);
h2.appendChild(h2Text);
headerDiv.appendChild(h2);
let h4 = document.createElement("h4");
let h4Text = document.createTextNode(predefinedData.email);
h4.appendChild(h4Text);
headerDiv.appendChild(h4);
let footerDiv = document.createElement("div");
footerDiv.setAttribute("class", "box footer");
profile.appendChild(footerDiv);
let btn = document.createElement("button");
btn.setAttribute("type", "button");
let btnText = document.createTextNode("Logout");
btn.appendChild(btnText);
footerDiv.appendChild(btn);
btn.onclick = function () {
  window.location.href = "./login.html";
  localStorage.clear();
};
