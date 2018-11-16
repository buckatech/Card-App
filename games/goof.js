const Deck = require("../Classes/deck");
const GoofSpiel = require("../Classes/gameClasses/goof");
const prompt = require("prompt");

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let P1Deck = new Deck(["H"], values);
let P2Deck = new Deck(["S"], values);
let prizeDeck = new Deck(["C"], values);
let Goof = new GoofSpiel

const exampleReq = () => {
  console.log(Math.floor(Math.random() * 7) + 1)
}


const turn = () => {
  let play1Bet;
  let play2Bet;
}

getInput()

