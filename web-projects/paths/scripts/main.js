/*
// first exercise using the browser JS console 20230313

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// conditional exercise. copy and paste it into the console in order to run it.

let favoriteFlavor = "chocolate";
if(favoriteFlavor === "chocolate"){
    alert("Adoro!");
} else {
    alert("OK. Tá valendo!");
}

// a function using multiply

let num1 = 1;
let num2 = 2;

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

// same as above but firing an alert to display the result. But it didn't work...

let num1 = 1;
let num2 = 2;

function multiply(num1, num2) {
    let result = num1 * num2;
    alert(result);
  }

// now some multiplications using a function

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

//first example of an event and an event handler. this one will react to a mouse click by throwing an alert

document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});



document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

*/

// image change exercise 20230314

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/imagem.jpg") {
    myImage.setAttribute("src", "images/foto.jpg");
    // const myWidth = myImage.getAttribute("width"); I found out this line wasn't necessary.
    myWidth.setAttribute("width", "64px"); // just sets the value to width
  } else {
    myImage.setAttribute("src", "images/imagem.jpg");
  }
};

// storing value in the browser via prompt and recalling it later 20230315

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi ${myName}`;
  }
  localStorage.setItem("name", myName);             // API call that stores data into the browser 
  myHeading.textContent = `Hi ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome back, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

