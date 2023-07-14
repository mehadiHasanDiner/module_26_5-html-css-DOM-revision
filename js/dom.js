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

// card vanishes
function updateCardDisplayById(elementId1, elementId2) {
  const buttonUpdate = document.getElementById(elementId1);
  buttonUpdate.addEventListener("click", function () {
    const cardUpdate = document.getElementById(elementId2);
    cardUpdate.style.display = "none";
  });
}

updateCardDisplayById("button-buy-1", "card-1");
updateCardDisplayById("button-buy-2", "card-2");
updateCardDisplayById("button-buy-3", "card-3");
updateCardDisplayById("button-buy-4", "card-4");
updateCardDisplayById("button-buy-5", "card-5");
updateCardDisplayById("button-buy-6", "card-6");

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

// function setImageToTheCard(elementId, image1, image2) {
//   const elementProduct = document.getElementById(elementId);
//   elementProduct.onmouseenter.src = "images/shoes/" + image1 + ".png";
//   elementProduct.onmouseout.src = "images/shoes/" + image2 + ".png";
// }

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

// task-9
const subscribeContainer = document.getElementById("subscribe-container");
subscribeContainer.addEventListener("dblclick", () => {
  subscribeContainer.style.backgroundColor = "purple";
});
