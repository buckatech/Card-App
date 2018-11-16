
exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTable("users", function(table) {
    table.increments();
    table.integer("game_id");
  })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("users")]);
};
