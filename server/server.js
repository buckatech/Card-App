
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const game = require('../controllers/indexController')
const input = process.argv
let i = 0;
//console.log(goof.insertData())
exports.insertGame = (knex) => {
  return knex('game').insert(goofSpiel.insertData())
  .then((results) => {
    console.log(`Added ${results.rowCount} Row`)
  }).finally(() => {
    knex.destroy()
  })
}