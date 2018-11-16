exports.up = function (knex, Promise) {
  return Promise.all([knex.schema.createTable("games", function (table) {
    table.increments();
    table.string("game_type");
  })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("games")]);
};
