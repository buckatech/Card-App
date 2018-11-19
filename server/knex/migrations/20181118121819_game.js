exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', function(table) {
    table.increments();
    table.string('currentBet').notNullable();
    table.string('currentState').notNullable();
    table.string('playerOneScore').notNullable();
    table.string('playerTwoScore').notNullable();
    table.string('activeCard').notNullable();
    table.string('discard').notNullable();
    table.string('P1Hand').notNullable();
    table.string('P2Hand').notNullable();
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game');
}