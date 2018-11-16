const express = require('express');
const router = express.Router();

/**
 * 
 * @param {*} req 
 * @param {*} res
 * @example User requests homepage
 * Sends 'Index' via get req
 */
exports.render_homepage = (req, res) => {
  res.render('index');
}
exports.render_game_goof = (req, res) => {
  let deck = {
    cards:
    [{ suit: 'H', val: 0 },
      { suit: 'H', val: 1 },
      { suit: 'H', val: 2 },
      { suit: 'H', val: 3 },
      { suit: 'H', val: 4 },
      { suit: 'H', val: 5 },
      { suit: 'H', val: 6 },
      { suit: 'H', val: 7 },
      { suit: 'H', val: 8 },
      { suit: 'H', val: 9 },
      { suit: 'H', val: 10 },
      { suit: 'H', val: 11 },
      { suit: 'H', val: 12 }],
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    suits:
    ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'],
    img:
    ['0H.png',
      '1H.png',
      '2H.png',
      '3H.png',
      '4H.png',
      '5H.png',
      '6H.png',
      '7H.png',
      '8H.png',
      '9H.png',
      '10H.png',
      '11H.png',
      '12H.png'
    ]
  }
  res.render('goofSpiel', {Deck: deck});
};

exports.post_game_goof = (req, res) => {
  res.redirect('/');
}