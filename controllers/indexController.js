const express = require("express");
const router = express.Router();
const Deck = require("../Classes/deck");
const GoofSpiel = require("../Classes/gameClasses/goof");
const prompt = require("prompt");

// New GoofSpiel class to manage GoofSpiel specific logic
let goofSpiel = new GoofSpiel();

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
    res.render("goofSpiel", { Deck: goofSpiel.P1Hand });
};

exports.post_game_goof = (req, res) => {
  res.render("goofSpiel", { Deck: goofSpiel.P1Hand })
};

// const turn = (bet1, bet2) => {
//   /* bet1 and bet2 will become res.body */
//   // debug statements
//   console.log(firstImg)
//   console.log(`Player one bets ${bet1}`);
//   console.log(`Player two bets ${bet2}`);
//   // high bet scores prize card, all cards to discard
//   if (bet1 > bet2) {
//     goofSpiel.playerScored(0, goofSpiel.activeCard.values[0] + 1);
//     //discardShift(goofSpiel, P1Deck, bet1, P2Deck, bet2);
//     discardShift(firstImg, secondImg);
//   } else if (bet1 < bet2) {
//     goofSpiel.playerScored(1, goofSpiel.activeCard.values[0] + 1);
//     //discardShift(goofSpiel, P1Deck, bet1, P2Deck, bet2);
//     discardShift(firstImg, secondImg);
//   }