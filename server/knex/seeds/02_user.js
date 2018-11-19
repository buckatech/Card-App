exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userdb').del()
  .then(function () {
    // Inserts seed entries
    return knex('userdb').insert([
      {
        email: 'hi@hi.com',
        password: 'hiPass',
        game_id: 1
      },
      {
        email: 'example@example.com',
        password: 'examplePass',
        game_id: 1
      },
    ]);
  });
};
