
exports.game = (knex) => {
  return knex('game').insert(goof.insertData())
  .then((results) => {
    console.log(`Added ${results.rowCount} Row`)
  }).finally(() => {
    knex.destroy()
  })
}
exports.user = (knex) => {
  return knex('userdb').insert({'email': 'hi2@hi2.com', 'password': 'hiPass2', 'game_id': '1'})
  .then((results) => {
    console.log(`Added ${results.rowCount} Row`)
  }).finally(() => {
    knex.destroy()
  })
}
