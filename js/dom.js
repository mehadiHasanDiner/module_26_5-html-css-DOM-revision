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
