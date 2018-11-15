const Deck = require("./Classes/deck");
const PlayArea = require("./Classes/playArea");
const Hand = require("./Classes/hand");
const prompt = require("prompt");

const suits = ["H", "S", "C", "D"];
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let prizeDeck = new Deck(["H"], values);
let p1Deck = new Deck(["S"], values).deck;
let p2Deck = new Deck(["C"], values).deck;
let p1Hand = new Hand();
let p2Hand = new Hand();
let playArea = new PlayArea();
let p1Score = 0;
let p2Score = 0;
prizeDeck.shuffle();
prizeDeck = prizeDeck.deck;

const prepHands = () => {
  p1Hand.drawMany(p1Deck, 13);
  p2Hand.drawMany(p2Deck, 13);
};

const example2Rounds = () => {
  playArea.drawToActive(prizeDeck, "activeCards");
  playArea.toTransfer(p1Hand, { suit: "S", val: 0 });
  playArea.toTransfer(p2Hand, { suit: "C", val: 5 });
  if (playArea.transferCards.values[0] > playArea.transferCards.values[1]) {
    p1Score += playArea.activeCards[0].val + 1;
  } else {
    p2Score += playArea.activeCards[0].val + 1;
  }
  playArea = new PlayArea();
  playArea.drawToActive(prizeDeck, "activeCards");
  playArea.toTransfer(p1Hand, { suit: "S", val: 7 });
  playArea.toTransfer(p2Hand, { suit: "C", val: 2 });
  if (playArea.transferCards.values[0] > playArea.transferCards.values[1]) {
    p1Score += playArea.activeCards[0].val + 1;
  } else {
    p2Score += playArea.activeCards[0].val + 1;
  }
};

prepHands();
example2Rounds();
console.log(p1Score);
console.log(p2Score);
