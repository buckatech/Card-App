const Deck = require("../deck");

module.exports = class GoofSpiel {
  constructor() {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.activeCard = []
    this.discard = new Deck;
  }
  playerScored(player, inputValue) {
    if (player === 0) {
      this.playerOneScore += inputValue
    } else if (player === 1) {
      this.playerTwoScore += inputValue
    }
  }
  shiftTo(deck, index){
    console.log(deck.img.indexOf(index))
    console.log('^^^^^^^^^^^^^^^')
    this.discard.draw(deck, index)
  }

}
