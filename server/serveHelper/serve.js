exports.game = (knex, cb) => {
  return knex.select('*')
    .from('game')
    .where(function() {
      this
        .where('id', '1')
    })
    .then((results) => {
      results[0].activeCard = results[0].activeCard.split('|')
      results[0].P1Hand = results[0].P1Hand.split('|')
      results[0].P2Hand = results[0].P2Hand.split('|')
      results[0].discard = results[0].discard.split('|')  
    }).catch((err) => console.log(err))
}




// exports.userjoin = (knex) => {
//   return knex.select('*')
//     .from('userdb')
//     .where(function() {
//       this
//         .where('id', 'hi@hi.com')
//     })
//     .join('game', 'game.id', '=', 'userdb.game_id')
//     .orderBy('game.id', 'desc')
//     .then((results) => {
//       console.log(results)
//     }).finally(() => {
//       knex.destroy()
//     })
// }
