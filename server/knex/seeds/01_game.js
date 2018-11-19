exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
  .then(function () {
    // Inserts seed entries
    return knex('game').insert([
      {
        id: 1,
        game_name: 'DATAONE',
        current_bet: '5C',
        current_state: '1',
        player_one_score: '16',
        player_two_score: '28',
        active_cards: '0|1|2|3|6|7',
        discard: '1|2|5|6|7|2',
        p_one_hand: '1|2|3|6|7',
        p_two_hand: '3|4|8|9|0'
      },
      {
        id: 2,
        game_name: 'DATATWO',
        current_bet: '5C',
        current_state: '1',
        player_one_score: '16',
        player_two_score: '28',
        active_cards: '0|1|2|3|6|7',
        discard: '1|2|5|6|7|2',
        p_one_hand: '1|2|3|6|7',
        p_two_hand: '3|4|8|9|0'
      },
    ]);
  });
};