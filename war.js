const Deck = require("./Classes/deck");
const PlayArea = require("./Classes/playArea");
const Hand = require("./Classes/hand");

const suits = ["H", "S", "C", "D"];
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let deck1 = new Deck(suits.splice(0, 2), values);
let deck2 = new Deck(suits, values);

let discard1 = new Deck();
let discard2 = new Deck();
deck1.shuffle();
deck2.shuffle();

const makeWar = (pOneDeck, pTwoDeck, iterations) => {
  if (pOneDeck.deck.length === 0) {
    return 'P2 Wins';
  }
  if (pTwoDeck.deck.length === 0) {
    return 'P1 Wins';
  }
  for (i = 0; i < iterations; i++) {
    if (pOneDeck.deck.length === 0) {
      pOneDeck.deck = discard1.deck;
      discard1.deck = [];
      pOneDeck.shuffle();
      makeWar(pOneDeck, pTwoDeck, pOneDeck.deck.length + 1);
    }
    if (pTwoDeck.deck.length === 0) {
      pTwoDeck.deck = discard2.deck;
      discard2.deck = [];
      pTwoDeck.shuffle();
      makeWar(pOneDeck, pTwoDeck, pTwoDeck.deck.length + 1);
    }
    if (!Array.isArray(pTwoDeck.deck) || !pTwoDeck.deck.length) {
      return 'Player 1 Wins'
    }
    if (!Array.isArray(pOneDeck.deck) || !pOneDeck.deck.length) {
      return 'Player 2 Wins'
    }

    if (pOneDeck.deck[0].val > pTwoDeck.deck[0].val) {
      discard1.deck.push(pOneDeck.deck[0]);
      discard1.deck.push(pTwoDeck.deck[0]);
      pOneDeck.deck.shift();
      pTwoDeck.deck.shift();
    } else if (pOneDeck.deck[0].val < pTwoDeck.deck[0].val) {
      discard2.deck.push(pOneDeck.deck[0]);
      discard2.deck.push(pTwoDeck.deck[0]);
      pOneDeck.deck.shift();
      pTwoDeck.deck.shift();
    } else {
      discard1.deck.push(pOneDeck.deck[0]);
      discard1.deck.push(pTwoDeck.deck[0]);
      pOneDeck.deck.shift();
      pTwoDeck.deck.shift();
    }
  }
};
console.log(makeWar(deck1, deck2, 27));
