const Deck = require("../Classes/deck");
const GoofSpiel = require("../Classes/gameClasses/goof");
const prompt = require("prompt");

// Initial values
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// New deck rendered for 'Heart' suit
let P1Deck = new Deck(["H"], values);
// New Deck rendered for 'Spade' Suit
let P2Deck = new Deck(["S"], values);
// New GoofSpiel class to manage GoofSpiel specific logic
let goofSpiel = new GoofSpiel

// Renders new deck in goofSpiel object to act as a 'prize' Deck
goofSpiel.activeCard = new Deck(["C"], values);

// Rearranges prize Deck order to random
goofSpiel.activeCard.shuffle()

/* TODO REMOVE TO TEST FOLDER */
// Function for hard values

exports.exampleReq = () => {
  return Math.floor(Math.random() * 13)
}

// Shifts all relevent cards for the round to the discard pile in goofSpiel Object
discardShift = (game, deck1, bet1, deck2, bet2) => {
  game.discard.draw(deck1, bet1)
  game.discard.draw(deck2, bet2)
  game.discard.draw(game.activeCard, 0)
  return game
}

/* TODO needs to be refactored to a knex insert */
// A single turn for the goofSpiel game
exports.turn = (bet1, bet2) => {
  /* bet1 and bet2 will become res.body */
  // debug statements
  console.log(`Player one bets ${bet1}`)
  console.log(`Player two bets ${bet2}`)
  // high bet scores prize card, all cards to discard
  if (bet1 > bet2) {
    goofSpiel.playerScored(0, goofSpiel.activeCard.values[0] + 1)
    discardShift(goofSpiel, P1Deck, bet1, P2Deck, bet2)
  } else if (bet1 < bet2) {
    goofSpiel.playerScored(1, goofSpiel.activeCard.values[0] + 1)
    discardShift(goofSpiel, P1Deck, bet1, P2Deck, bet2)
  }
  // debug statements
}


