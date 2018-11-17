const Deck = require("../deck");

module.exports = class GoofSpiel {
  
  constructor() {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.currentBet = 0
    this.currentState = 0;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.activeCard = new Deck(['C'], values).shuffle()
    this.discard = new Deck;
    this.P1Hand = new Deck(['H'], values)
    this.P2Hand = new Deck(['S'], values)
  }
  playerScored(player, inputValue) {
    if (player === 0) {
      this.playerOneScore += inputValue
    } else if (player === 1) {
      this.playerTwoScore += inputValue
    }
  }
  shiftTo(deck, index){
    this.discard.draw(deck, index)
  }
  // const discardShift = (ind1, ind2) => {
  //   goofSpiel.shiftTo(P1Deck, ind1);
  //   goofSpiel.shiftTo(P2Deck, ind2);
  //   goofSpiel.shiftTo(goofSpiel.activeCard, 0);
  // };
}
