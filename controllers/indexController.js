const express = require("express");
const router = express.Router();
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
let goofSpiel = new GoofSpiel();

// Renders new deck in goofSpiel object to act as a 'prize' Deck
goofSpiel.activeCard = new Deck(["C"], values);

// Rearranges prize Deck order to random
goofSpiel.activeCard.shuffle();
const discardShift = (ind1, ind2) => {
  goofSpiel.shiftTo(P1Deck, ind1);
  goofSpiel.shiftTo(P2Deck, ind2);
  goofSpiel.shiftTo(goofSpiel.activeCard, 0);
};

/* TODO REMOVE TO TEST FOLDER */
// Function for hard values

const exampleReq = () => {
  return Math.floor(Math.random() * 13);
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @example User requests homepage
 * Sends 'Index' via get req
 */
exports.render_homepage = (req, res) => {
  res.render("index");
};
exports.render_game_goof = (req, res) => {
  let deck = P1Deck
  res.render("goofSpiel", { Deck: deck });
};

exports.post_game_goof = (req, res) => {
  let firstImg = req.body.first;
  let secondImg = req.body.second;
  
  let first = parseInt(req.body.first.replace(/[^0-9]/g, ""));
  let second = parseInt(req.body.second.replace(/[^0-9]/g, ""));
  // Shifts all relevent cards for the round to the discard pile in goofSpiel Object
  /* TODO needs to be refactored to a knex insert */
  // A single turn for the goofSpiel game
  const turn = (bet1, bet2) => {
    /* bet1 and bet2 will become res.body */
    // debug statements
    console.log(firstImg)
    console.log(`Player one bets ${bet1}`);
    console.log(`Player two bets ${bet2}`);
    // high bet scores prize card, all cards to discard
    if (bet1 > bet2) {
      goofSpiel.playerScored(0, goofSpiel.activeCard.values[0] + 1);
      //discardShift(goofSpiel, P1Deck, bet1, P2Deck, bet2);
      discardShift(firstImg, secondImg);
    } else if (bet1 < bet2) {
      goofSpiel.playerScored(1, goofSpiel.activeCard.values[0] + 1);
      //discardShift(goofSpiel, P1Deck, bet1, P2Deck, bet2);
      discardShift(firstImg, secondImg);
    }
    // debug statements
  };
  turn(first, second);
  res.send("Shwutt");
};
