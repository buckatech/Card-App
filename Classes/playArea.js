/* Refactor this page to work with deck class refactor */

module.exports = class PlayArea {
  constructor(players) {
    this.activeCards = [];
    this.discardOne = [];
    this.discardTwo = [];
    this.transferCards = new Deck();
  }
  /* TODO refactor this.val.push(Deck.REFACTOR.splice) */
  toTransfer(Deck, Card) {
    Deck.cards.forEach(element => {
      if (element.val === Card.val && element.suit === Card.suit) {
        let index = Deck.cards.indexOf(element);
        if (index > -1) {
          this.transferCards.draw(Deck.cards.splice(index, 1));
          Deck.values.splice(index, 1);
          Deck.suits.splice(index, 1);
        }
      }
    });
  }
  manyToTransfer(Deck, Cardarr) {
    Cardarr.forEach(element => {
      this.toTransfer(Deck, element);
    });
  }
  potTransfer(targetDeck) {
    targetDeck.drawMany(this.transferCards.cards, this.transferCards.cards.length);
    this.transferCards = new Deck()
  }
  drawToActive(DrawFrom) {
    this.activeCards.push(DrawFrom[0]);
    DrawFrom.shift();
  }
};
