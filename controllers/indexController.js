const express = require("express");
const router = express.Router();
const Deck = require("../Classes/deck");
const Card = require("../Classes/card")
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
  res.render('index');
};

exports.render_savegames = (req, res) => {
  res.render('savegames');
};

exports.render_game_goof = (req, res) => {
  //console.log(goofSpiel)
  if (goofSpiel.currentState === 0) {
    console.log(goofSpiel)
    res.render("goofSpiel", {
      Deck: goofSpiel.P1Hand.Images,
      Prize: goofSpiel.activeCard.Images[0],
      turn: goofSpiel.currentState,
      p1Score: goofSpiel.playerOneScore,
      p2Score: goofSpiel.playerTwoScore
    });
  } else if (goofSpiel.currentState === 1){
    res.render("goofSpiel", {
      Deck: goofSpiel.P2Hand.Images,
      Prize: goofSpiel.activeCard.Images[0],
      turn: goofSpiel.currentState,
      p1Score: goofSpiel.playerOneScore,
      p2Score: goofSpiel.playerTwoScore
    });
  } else {
    res.send('borked')
  }
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
    goofSpiel.discardCard(goofSpiel.activeCard.cards, 0)

    goofSpiel.currentState = 0
    res.redirect('/goofSpiel')
  } else {
    res.send('borked')
  }

};

exports.post_data = (req, res) => {
  console.log(req.body);
};