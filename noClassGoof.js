const suits = ["H", "S", "C", "D"];
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let prizeDeck = []
let p1Deck = []
let p2Deck = []
const makeDeck = (deck, suit) => {
  for (let i = 0; i < 13; i++) {
  deck.push({suit: suits[suit], val: values[i]})
}
return deck
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

makeDeck(prizeDeck, 0)
shuffle(prizeDeck)
makeDeck(p1Deck, 1)
makeDeck(p2Deck, 2)
let Currentprize = prizeDeck.shift()
let scoreP1 = 0
let scoreP2 = 0
const betForPrize = (p1Bet, p2Bet, prize, score1, score2) => {
  if (p1Bet.val > p2Bet.val) {
    score += Currentprize.val
  } else if (p1Bet.val < p2Bet.val) {
    score1 += Currentprize.val
  }
}
betForPrize({ suit: 'C', val: 3 }, { suit: 'S', val: 6 }, Currentprize, scoreP1, scoreP2)
console.log(scoreP1)
console.log(scoreP2)