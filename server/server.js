
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const serve = require('./serveHelper/serve')
const insert = require('./serveHelper/insert')

const input = process.argv
let i = 0;
/*
if(input[2] === 'user'){
  insert.user(knex)
} else if (input[2] === 'game') {
  insert.game(knex)
}
*/
exports.getGoofSpiel = () => {
  return serve.game(knex)
}
exports.getTestRoute = () => {
  knex.select('*').from('userdb')
}

// load page needs to include game_id

