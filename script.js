// trying to make a deck of cards
var deck = [
  {
    // cardPosition: "1",
    eWord: "Hello",
    kWord: "안녕하세요",
    // answered: false,
    correct: false,
  },

  {
    // cardPosition: "2",
    eWord: "excited",
    kWord: "신났다",
    // answered: false,
    correct: false,
  },

  {
    // cardPosition: "3",
    eWord: "What is your name?",
    kWord: "이름이 뭐예요?",
    // answered: false,
    correct: false,
  },
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
cardDisplay.addEventListener("click", flipCard);

//creating a new event listener and function to change the card current card using the next card button
var nextButton = document.querySelector("#nextButton")
nextButton.addEventListener("click", nextCard );

function nextCard () {
  current = current + 1
  currentCard  = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
}

//creating a new event listener for the previous card button

var previousButton = document.querySelector("#previousButton")
previousButton.addEventListener("click", previousCard );

function previousCard () {
  current = current - 1
  currentCard  = deck[current]
  cardDisplay.innerHTML = currentCard.eWord
}
