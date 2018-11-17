module.exports = class Card {
  constructor(suit, val) {
    this.suit = suit;
    this.val = val;
  }
  set aCard(SuitVal) {
    this.suit = SuitVal.replace(/\d/g,'').toUpperCase();
    this.val = SuitVal.replace(/[a-zA-Z]/g, '')
  }
  get SuitValue() {
    return `${this.val}${this.suit}`
  }
  get Suit() {
    return this.suit
  }
  get Value(){
    return this.val
  }
  get Image(){
    return `${this.SuitValue}.png`
  }
}
