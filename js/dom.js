// task-1
console.log("I am here form DOM");

// task-2
const allHeadings2 = document.querySelectorAll("h2");
for (headings of allHeadings2) {
  headings.style.color = "lightblue";
}

// task-3
const backpackContainer = document.getElementById("backpack");
backpackContainer.style.backgroundColor = "tomato";

// task-4
const cardsClass = document.getElementsByClassName("card");
for (cards of cardsClass) {
  cards.style.borderRadius = "30px";
}

// task-5
const buttonBuy1 = document.getElementById("button-buy-1");
buttonBuy1.addEventListener("click", function () {
  console.log("buttonBuy clicked");
  // task-6
  const buyNowCard1 = document.getElementById("card-1");
  buyNowCard1.style.display = "none";
});

const buttonBuy2 = document.getElementById("button-buy-2");
buttonBuy2.addEventListener("click", function () {
  // task-6
  const buyNowCard2 = document.getElementById("card-2");
  buyNowCard2.style.display = "none";
});

const buttonBuy3 = document.getElementById("button-buy-3");
buttonBuy3.addEventListener("click", function () {
  // task-6
  const buyNowCard3 = document.getElementById("card-3");
  buyNowCard3.style.display = "none";
});

const buttonBuy4 = document.getElementById("button-buy-4");
buttonBuy4.addEventListener("click", function () {
  // task-6
  const buyNowCard4 = document.getElementById("card-4");
  buyNowCard4.style.display = "none";
});

const buttonBuy5 = document.getElementById("button-buy-5");
buttonBuy5.addEventListener("click", function () {
  // task-6
  const buyNowCard5 = document.getElementById("card-5");
  buyNowCard5.style.display = "none";
});

const buttonBuy6 = document.getElementById("button-buy-6");
buttonBuy6.addEventListener("click", function () {
  // task-6
  const buyNowCard6 = document.getElementById("card-6");
  buyNowCard6.style.display = "none";
});

// task-7
const emailFiledValue = document.getElementById("exampleInputEmail1");
emailFiledValue.addEventListener("keyup", function (event) {
  const submitButton = document.getElementById("submit-button");
  const text = event.target.value;
  if (text === "email") {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", true);
  }
});

// task-8
function setNewImage1() {
  document.getElementById("shoe-1").src = "images/shoes/shoe-3.png";
}
function setOldImage1() {
  document.getElementById("shoe-1").src = "images/shoes/shoe-1.png";
}

function setNewImage2() {
  document.getElementById("shoe-2").src = "images/shoes/shoe-2.png";
}
function setOldImage2() {
  document.getElementById("shoe-2").src = "images/shoes/shoe-3.png";
}

function setNewImage3() {
  document.getElementById("shoe-3").src = "images/shoes/shoe-1.png";
}
function setOldImage3() {
  document.getElementById("shoe-3").src = "images/shoes/shoe-2.png";
}

function setNewImage4() {
  document.getElementById("bag-1").src = "images/bags/bag-1.png";
}
function setOldImage4() {
  document.getElementById("bag-1").src = "images/bags/bag-2.png";
}

function setNewImage5() {
  document.getElementById("bag-2").src = "images/bags/bag-3.png";
}
function setOldImage5() {
  document.getElementById("bag-2").src = "images/bags/bag-1.png";
}

function setNewImage6() {
  document.getElementById("bag-3").src = "images/bags/bag-2.png";
}
function setOldImage6() {
  document.getElementById("bag-3").src = "images/bags/bag-3.png";
}
