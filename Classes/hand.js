module.exports = class Hand {
  constructor(cards, values, suits) {
    this.cards = []
    this.values = []
    this.suits = []
  }
  draw(DrawFrom) {
    this.cards.push(DrawFrom[0]);
    this.values.push(DrawFrom[0].val)
    this.suits.push(DrawFrom[0].suit)
    DrawFrom.shift();
  }
  drawMany(DrawFrom, int) {
    for (let i = 0; i < int; i++) {
      this.draw(DrawFrom)
    }
  }
}

