const Deck = require("../deck");
const serv = require('../../server/server')


module.exports = class GoofSpiel {

  constructor() {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.id = 1
    this.currentBet = 0
    this.currentState = 0;
    this.playerOneScore = parseInt(0);
    this.playerTwoScore = 0;
    this.activeCard = new Deck(['C'], values).shuffle()
    this.discard = new Deck;
    this.P1Hand = new Deck(['H'], values)
    this.P2Hand = new Deck(['S'], values)
  }
  set dbGoof(dbData) {
    this.id = 1
    this.currentBet = dbData.currentBet
    this.currentState = dbData.currentState
    this.playerOneScore = dbData.playerOneScore
    this.playerTwoScore = dbData.playerTwoScore
    this.activeCard = new Deck(['C'], dbData.activeCard.split('|'))
    this.discard = new Deck
    this.P1Hand = new Deck(['H'], dbData.activeCard.split('|'))
    this.P2Hand = new Deck(['S'], dbData.activeCard.split('|'))
  }

  playerScored(player, inputValue) {
    if (player === 0) {
      this.playerOneScore += inputValue
    } else if (player === 1) {
      this.playerTwoScore += inputValue
    }
  }
  insertData() {
    let outObj = {}
    Object.keys(this).forEach(element => {
      if (typeof this[element] === 'object') {
        outObj[element] = this[element].Values.join('|')
      } else {
        outObj[element] = this[element]
      }
    });
    return outObj
    }
    
  /*
  {
    email: 'example123@example123.com',
    password: 'example123Pass',
    game_id: 2
  },
  */
  discardCard(targetDeck, cardIndex) {
    this.discard.cards.push((targetDeck.splice(cardIndex, 1)))
  }
  // const discardShift = (ind1, ind2) => {
  //   goofSpiel.shiftTo(P1Deck, ind1);
  //   goofSpiel.shiftTo(P2Deck, ind2);
  //   goofSpiel.shiftTo(goofSpiel.activeCard, 0);
  // };
}
