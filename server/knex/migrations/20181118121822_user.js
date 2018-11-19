exports.up = function(knex, Promise) {
  return knex.schema.createTable('userdb', function(table) {
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.integer('game_id').references('id').inTable('game');
    
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userdb');
}
