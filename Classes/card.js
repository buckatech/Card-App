module.exports = class Card {
  constructor(suit, val) {
    this.suit = suit;
    this.val = val
  }
  get SuitValue() {
    return `${this.suit}${this.val}`
  }
  get Suit() {
    return this.suit
  }
  get Value(){
    return this.val
  }
}
