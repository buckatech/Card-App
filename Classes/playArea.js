const Hand = require("./hand");
module.exports = class PlayArea {
  constructor(players) {
    this.activeCards = [];
    this.discardOne = [];
    this.discardTwo = [];
    this.transferCards = new Hand();
  }
  /* TODO refactor this.val.push(hand.REFACTOR.splice) */
  toTransfer(hand, Card) {
    hand.cards.forEach(element => {
      if (element.val === Card.val && element.suit === Card.suit) {
        let index = hand.cards.indexOf(element);
        if (index > -1) {
          this.transferCards.draw(hand.cards.splice(index, 1));
          hand.values.splice(index, 1);
          hand.suits.splice(index, 1);
        }
      }
    });
  }
  manyToTransfer(hand, Cardarr) {
    Cardarr.forEach(element => {
      this.toTransfer(hand, element);
    });
  }
  potTransfer(targetHand) {
    targetHand.drawMany(this.transferCards.cards, this.transferCards.cards.length);
    this.transferCards = new Hand()
  }
  drawToActive(DrawFrom) {
    this.activeCards.push(DrawFrom[0]);
    DrawFrom.shift();
  }
};
