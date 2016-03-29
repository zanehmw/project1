// trying to make a deck of cards
var deck = [
  {
    eWord: "Hello",
    kWord: "안녕하세요",
    correct: "false",
  },

  {
    eWord: "excited",
    kWord: "신났다",
    correct: "false",
  },

  {
    eWord: "What is your name?",
    kWord: "이름이 뭐예요?",
    correct: "false",
  },
  {
    eWord: "poop",
    kWord: "똥",
    correct: "false",
  },
  {
    eWord: "That man is good-looking",
    kWord: "그남자가 잘 생겼다",
    correct: "false",
  }
];

var cardDisplay = document.querySelector("#flash_card")
var current = 0
var currentCard = deck[current]
cardDisplay.innerHTML = currentCard.eWord
//this function shows english word if korean word is displayed and vice versa
function flipCard() {
  if (cardDisplay.innerHTML == currentCard.eWord) {
    cardDisplay.innerHTML = currentCard.kWord
  }
  else {
    cardDisplay.innerHTML = currentCard.eWord
  }
};
cardDisplay.addEventListener( "click", flipCard );

//creating a new event listener and function to change the card current card using the next card button
var nextButton = document.querySelector("#nextButton")
nextButton.addEventListener( "click", nextCard );

function nextCard () {
  current = current + 1
  currentCard  = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
}

//creating a new event listener for the previous card button

var previousButton = document.querySelector("#previousButton")
previousButton.addEventListener( "click", previousCard );

function previousCard () {
  current = current - 1
  currentCard  = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
}

//creating an event listener for the correct and incorrect buttons
var correctCards= []

var correctButton = document.querySelector("#correctButton")
correctButton.addEventListener( "click", selectCorrect );

function selectCorrect () {
  console.log("poop")
  currentCard.correct = "true";
  moveCorrect()
};

var incorrectButton = document.querySelector("#incorrectButton")
incorrectButton.addEventListener( "click", selectIncorrect );

function selectIncorrect () {
  console.log("poop alot")

};

// attempting to push correct cards to a different array in the function below

function moveCorrect() {
  if (currentCard.correct = "true") {
    correctCards.push(currentCard);
    deck.splice(current, 1);
  }
}
