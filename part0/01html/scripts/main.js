// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox_logo.svg") {
    myImage.setAttribute("src", "images/firefox_logo_old.png");
  } else {
    myImage.setAttribute("src", "images/firefox_logo.svg");
  }
});

const myButton = document.getElementById("btn");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName); // uses Web Storage API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

myButton.addEventListener("click", () => {
  setUserName()
});

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

