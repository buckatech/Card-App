const Goof = require('../../Classes/gameClasses/goof')

let goof = new Goof
exports.user = (knex) => {
  return knex('game').insert(goof.insertData())
  .then((results) => {
    console.log(`Added ${results.rowCount} Row`)
  }).finally(() => {
    knex.destroy()
  })
}
