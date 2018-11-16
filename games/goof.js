const Deck = require("../Classes/deck");
const GoofSpiel = require("../Classes/gameClasses/goof");
const prompt = require("prompt");

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let P1Deck = new Deck(["H"], values);
let P2Deck = new Deck(["S"], values);
let Goof = new GoofSpiel

Goof.activeCard = new Deck(["C"], values);
Goof.activeCard.shuffle()

const exampleReq = () => {
  return Math.floor(Math.random() * 13)
}

const discardShift = (game, deck1, bet1, deck2, bet2) => {
  game.discard.draw(deck1, deck1.values.indexOf(bet1))
  game.discard.draw(deck2, deck2.values.indexOf(bet2))
  game.discard.draw(game.activeCard, 0)
  return game
}

const turn = () => {
  let play1Bet = exampleReq() 
  let play2Bet = exampleReq()
  console.log(`Player one bets ${play1Bet}`)
  console.log(`Player two bets ${play2Bet}`)
  if (play1Bet > play2Bet) {
    Goof.playerScored(0, Goof.activeCard.values[0] + 1)
    discardShift(Goof, P1Deck, play1Bet, P2Deck, play2Bet)
  } else if (play1Bet < play2Bet) {
    Goof.playerScored(1, Goof.activeCard.values[0] + 1)
    discardShift(Goof, P1Deck, play1Bet, P2Deck, play2Bet)
  }
  console.log(Goof.playerOneScore)
  console.log(Goof.playerTwoScore)
}

turn()

