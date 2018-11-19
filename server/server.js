const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const serve = require('./serveHelper/serve')
const insert = require('./serveHelper/insert')

const input = process.argv
let i = 0;

if(input[2] === 'find'){
  serve.getGame(knex)
} else if (input[2] === 'insert') {
  insert.user(knex)
}

