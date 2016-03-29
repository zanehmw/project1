var cardDisplay = document.querySelector("#flash_card")
var current = 0
var currentCard = deck[current]
var correctCards= []
var correctButton = document.querySelector("#correctButton")
var previousButton = document.querySelector("#previousButton")
var nextButton = document.querySelector("#nextButton")
var incorrectButton = document.querySelector("#incorrectButton")

cardDisplay.innerHTML = currentCard.eWord

cardDisplay.addEventListener( "click", flipCard );
nextButton.addEventListener( "click", nextCard );
previousButton.addEventListener( "click", previousCard );
correctButton.addEventListener( "click", selectCorrect );
incorrectButton.addEventListener( "click", selectIncorrect );

function flipCard() {
  if (cardDisplay.innerHTML == currentCard.eWord) {
    cardDisplay.innerHTML = currentCard.kWord
  }
  else {
    cardDisplay.innerHTML = currentCard.eWord
  }
};

function nextCard () {
  current = current + 1
  currentCard  = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
};

function previousCard () {
  current = current - 1
  currentCard  = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
};

function selectCorrect () {
  console.log("poop")
  currentCard.correct = "true";
  moveCorrect()
  nextCard()
};

function selectIncorrect () {
  console.log("poop alot")
};

function moveCorrect() {
  if (currentCard.correct = "true") {
    correctCards.push(currentCard);
    deck.splice(current, 1);
  }
};
