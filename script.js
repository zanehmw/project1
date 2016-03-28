// trying to make a deck of cards
var deck = [
  { cardPosition: "1",
    eWord: "Hello",
    kWord: "안녕하세요",
    answered: false,
    correct: false,
  },
  {
    cardPosition: "2",
    eWord: "excited",
    kWord: "신났다",
    answered: false,
    correct: false,
  },
  {
    cardPosition: "3",
    eWord: "What is your name?",
    kWord: "이름이 뭐예요?",
    answered: false,
    correct: false,
  },
];

var cardDisplay = document.querySelector("#flash_card")



cardDisplay.innerHTML = deck[0].eWord
//this function shows english word if korean word is displayed and vice versa
function flipCard() {
  if (cardDisplay.innerHTML = deck[0].eWord) {
    cardDisplay.innerHTML = deck[0].kWord
  }
};

cardDisplay.addEventListener("click", flipCard);
