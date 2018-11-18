
exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTable("users", function(table) {
    table.increments();
    table.integer("game_id");
    table.string('email');
    table.string('password');
  })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("users")]);
};
