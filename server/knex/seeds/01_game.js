exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
  .then(function () {
    // Inserts seed entries
    return knex('game').insert(
      { 
        id: 1,
        currentBet: 0,
        currentState: 0,
        playerOneScore: 0,
        playerTwoScore: 0,
        activeCard: '1|0|6|4|10|11|5|12|3|8|9|7|2',
        discard: '',
        P1Hand: '0|1|2|3|4|5|6|7|8|9|10|11|12',
        P2Hand: '0|1|2|3|4|5|6|7|8|9|10|11|12' 
      }
    );
  });
};