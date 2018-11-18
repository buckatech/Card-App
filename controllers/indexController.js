const express = require("express");
const router = express.Router();
const Deck = require("../Classes/deck");
const Card = require("../Classes/card")
const GoofSpiel = require("../Classes/gameClasses/goof");
const prompt = require("prompt");
const knex = require("knex");
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
  if (goofSpiel.currentState === 0) {
    res.render("goofSpiel", { Deck: goofSpiel.P1Hand.Images });

  } else if (goofSpiel.currentState === 1){
    res.render("goofSpiel", { Deck: goofSpiel.P2Hand.Images })
  } else {
    res.send('borked')
  }
    //{ Deck: goofSpiel.P2Hand.Images }
};

exports.post_game_goof = (req, res) => {
  if (goofSpiel.currentState === 0) {
    let drawIndex = goofSpiel.P1Hand.Images.indexOf(`${req.body.card}.png`)
    goofSpiel.discardCard(goofSpiel.P1Hand.cards, drawIndex)
    goofSpiel.currentState = 1
    res.redirect('/goofSpiel')
  } else if (goofSpiel.currentState === 1){
    let drawIndex = goofSpiel.P2Hand.Images.indexOf(`${req.body.card}.png`)
    goofSpiel.discardCard(goofSpiel.P2Hand.cards, drawIndex)
    goofSpiel.currentState = 0
    res.redirect('/goofSpiel')
  } else {
    res.send('borked')
  }

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

//user registration
exports.post_register = (req, res) => {
  console.log(req.body)
  let email = 0;
  let password = req.body.password;
  if (email && password) {
    let insertValue = {
      email: email,
      password: password
    };
    knex("users")
      .insert(insertValue)
      .into("users")
      .finally(function() {
        knex.destroy();
      });
  }
  res.redirect('/');
};