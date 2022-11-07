let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards-el");

let player = {
  name: "Yazeed",
  chips: 200,
  sayHello: function () {
    console.log("Heisann!");
  },
};
//player.sayHello(); this is how you invoke it

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    //cards.pop();
    renderGame();
  }
}

function getRandomCard() {
  let rand = Math.floor(Math.random() * 13) + 1;
  if (rand === 1) {
    rand = 11;
    return rand;
  } else if (rand > 10) {
    rand = 10;
    return rand;
  } else {
    return rand;
  }
}
