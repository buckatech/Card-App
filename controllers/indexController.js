const express = require("express");
const router = express.Router();
const Deck = require("../Classes/deck");
const Card = require("../Classes/card")
const GoofSpiel = require("../Classes/gameClasses/goof");
const serve = require("../server/server");
const prompt = require("prompt");
const knex = require('../server/knex/knex.js');

exports.set_data = (req, res, next) => {
  knex('game').select('*').first()
  .then((game) => {
    let goofSpiel = new GoofSpiel
    goofSpiel.dbGoof = game
    global.goofSpiel = goofSpiel
    next()
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @example User requests homepage
 * Sends 'Index' via get req
 */
exports.render_homepage = (req, res) => {
  res.render('index')
};

exports.render_savegames = (req, res) => {
  res.render('savegames');
};

exports.render_game_goof = (req, res) => {
  if (goofSpiel.currentState === 0) {
<<<<<<< HEAD
    res.render("goofSpiel", { Deck: goofSpiel.P1Hand.Images });

  } else if (goofSpiel.currentState === 1){
    res.render("goofSpiel", { Deck: goofSpiel.P2Hand.Images })
=======
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
>>>>>>> 683caa698c6fe89e0d48326f0859625d19d5dc40
  } else {
    res.send('borked')
  }
};

exports.post_game_goof = (req, res) => {
  if (goofSpiel.currentState === 0) {
    let drawIndex = goofSpiel.P1Hand.Images.indexOf(`${req.body.card}.png`)
    goofSpiel.discardCard(goofSpiel.P1Hand.cards, drawIndex)
    goofSpiel.currentState = 1
    knex('game').first().update(goofSpiel.insertData())
      .then(() => {
        res.redirect('/goofSpiel')
      })
  } else if (goofSpiel.currentState === 1){
    let drawIndex = goofSpiel.P2Hand.Images.indexOf(`${req.body.card}.png`)
    goofSpiel.discardCard(goofSpiel.P2Hand.cards, drawIndex)
    goofSpiel.discardCard(goofSpiel.activeCard.cards, 0)
    goofSpiel.currentState = 0
    knex('game').first().update(goofSpiel.insertData())
    .then(() => {
      res.redirect('/goofSpiel')
    })
  } else {
    res.send('borked')
  }
};

exports.post_data = (req, res) => {
  console.log(req.body);
};
