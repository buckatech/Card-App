exports.game = (knex) => {
  return knex.select('*')
    .from('userdb')
    .where(function() {
      this
        .where('email', 'hi@hi.com')
    })
    .join('game', 'game.id', '=', 'userdb.game_id')
    .orderBy('game.id', 'desc')
    .then((results) => {
      console.log(results)
    }).finally(() => {
      knex.destroy()
    })
}
