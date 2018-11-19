const express = require('express');
const router = express.Router();
const Deck = require('../Classes/deck');
const Card = require('../Classes/card');
const GoofSpiel = require('../Classes/gameClasses/goof');
const serve = require('../server/server');
const prompt = require('prompt');
const knex = require('../server/knex/knex.js');

const randomNumberGenerator = function () {
  let random = '';
  const characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz0123456789';
  for (var i = 0; i < 6; i++) {
    random += characterList.charAt(
      Math.floor(Math.random() * characterList.length)
    );
  }
  return random;
};


exports.set_data = (req, res, next) => {
  knex('game').select('*').first()
    .then((game) => {
      data = game;
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
  next();
};

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
  if (goofSpiel.currentState === 0) {
    console.log(goofSpiel);
    res.render('goofSpiel', {
      Deck: goofSpiel.P1Hand.Images,
      Prize: goofSpiel.activeCard.Images[0],
      turn: goofSpiel.currentState,
      p1Score: goofSpiel.playerOneScore,
      p2Score: goofSpiel.playerTwoScore
    });
  } else if (goofSpiel.currentState === 1){
    res.render('goofSpiel', {
      Deck: goofSpiel.P2Hand.Images,
      Prize: goofSpiel.activeCard.Images[0],
      turn: goofSpiel.currentState,
      p1Score: goofSpiel.playerOneScore,
      p2Score: goofSpiel.playerTwoScore
    });
  } else {
    res.send('borked');
  }
};

exports.post_game_goof = (req, res) => {
  if (goofSpiel.currentState === 0) {
    let drawIndex = goofSpiel.P1Hand.Images.indexOf(`${req.body.card}.png`);
    goofSpiel.discardCard(goofSpiel.P1Hand.cards, drawIndex);
    goofSpiel.currentState = 1;
    res.redirect('/goofSpiel');
  } else if (goofSpiel.currentState === 1){
    let drawIndex = goofSpiel.P2Hand.Images.indexOf(`${req.body.card}.png`);
    goofSpiel.discardCard(goofSpiel.P2Hand.cards, drawIndex);
    goofSpiel.discardCard(goofSpiel.activeCard.cards, 0);

    goofSpiel.currentState = 0;
    res.redirect('/goofSpiel');
  } else {
    res.send('borked');
  }
};

exports.register_user = (req, res) => {
  const id = randomNumberGenerator();
  let email = req.body.regEmail;
  let password = req.body.regPassword;
  req.session.user_id = id;
  knex('userdb').insert({
    email: email,
    password: password
  }).then(function (ret) {
    res.json({ success: true, message: 'ok'/*,ret:ret*/ });
  });
};


exports.login_user = (req, res) => {
  const id = randomNumberGenerator();
  let email = req.body.loginEmail;
  let password = req.body.loginPassword;
  req.session.user_id = id;
  if(knex('usersdb').where({
    email: email,
    password: password
  })) {
    res.redirect('/');
  }
  res.redirect('/');
};