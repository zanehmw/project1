var cardDisplay = document.querySelector("#flash_card")
var current = 0
var currentCard = deck[current]
var correctCards = []
var correctButton = document.querySelector("#correctButton")
var previousButton = document.querySelector("#previousButton")
var nextButton = document.querySelector("#nextButton")
var incorrectButton = document.querySelector("#incorrectButton")
var userPoints = 0
var displayScore = document.querySelector("#scoreplace")

cardDisplay.innerHTML = currentCard.eWord
displayScore.innerHTML = "Score: " + userPoints

cardDisplay.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);
previousButton.addEventListener("click", previousCard);
correctButton.addEventListener("click", selectCorrect);
incorrectButton.addEventListener("click", selectIncorrect);

function flipCard() {
  if (cardDisplay.innerHTML == currentCard.eWord) {
    cardDisplay.innerHTML = currentCard.kWord
  } else {
    cardDisplay.innerHTML = currentCard.eWord
  }
};

function nextCard() {
  if (current == deck.length - 1) {
    current = -1
  }
  current = current + 1
  currentCard = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
};

function previousCard() {
  if (current == 0) {
    current = deck.length - 1
  } else {
    current = current - 1
  }
  currentCard = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
};

function selectCorrect() {
  console.log("poop")
  currentCard.correct = "true";
  moveCorrect()
  currentCard = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
};

function selectIncorrect() {
  console.log("poop alot")
  userPoints = userPoints - 5;
  displayScore.innerHTML = "Score: " + userPoints
};

function moveCorrect() {
  if (currentCard.correct = "true") {
    correctCards.push(currentCard);
    deck.splice(current, 1);
    userPoints = userPoints + 10;
    displayScore.innerHTML = "Score: " + userPoints
  }
};

var spanishButton = document.querySelector("#spanishButton")
spanishButton.addEventListener("click", switchSpanish);

function switchSpanish() {
  var currentSpanCard = sdeck[current]
  cardDisplay.innerHTML = currentSpanCard.sWord
};

// It would be awesome if there was also a way to remove the spanish words after they are added or remove the korean words when the spanish button was clicked.
