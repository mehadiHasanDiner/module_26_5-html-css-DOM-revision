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
const buttonBuy = document.getElementById("button-buy");
buttonBuy.addEventListener("click", function () {
  console.log("buttonBuy clicked");
});
