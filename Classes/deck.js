const Card = require('./card')
const classHelp = require('../helpers/classHelper')
const removeFromValues = classHelp.removeFromValues
/** Class representing a Deck */
module.exports = class Deck {
  constructor(suits, values) {
    this.cards = [];
    this.img = []
    if (typeof(suits) === 'object' && typeof(values) === 'object' )
    suits.forEach(suitEle => {
      values.forEach(valEle => {
        let card = new Card(suitEle, valEle)
        this.cards.push(card)
        this.img.push(`${card.val}${card.suit}.png`)
      })
    });
  }
  get SuitValues() {
    let outArr = []
    this.cards.forEach(element => {
      outArr.push(element.SuitValue)
    });
    return outArr
  }
  get Values() {
    let outArr = []
    this.cards.forEach(element => {
      outArr.push(element.Value)
    })
    return outArr
  }
  get Suits() {
    let outArr = []
    this.cards.forEach(element => {
      outArr.push(element.Suit)
    })
    return outArr
  }
  /**
   * Places the first card from TargetDeck into This Deck
   * @memberof Deck
   * @param {Object} Deck - Object with Class Deck.
   * @example
   * Deck1.draw(Deck2)
   * // returns 
      Deck1 { cards: 
        [ Card { suit: 'H', val: 0 }, 
        Card { suit: 'S', val: 0 } ],
      values: [ 0, 0 ],
      suits: [ 'H', 'S' ] }
      Deck2 { cards: [], values: [], suits: [] }
   * Deck1 has Card, value, and suit of Deck2[0]
   * Deck2, value, and suit of TargetDeck[0] removed
   */
  draw(TargetDeck, cardIndex) {
    this.cards.push(TargetDeck.cards[cardIndex]);
    this.img.push(TargetDeck.img[cardIndex])
    removeFromValues(TargetDeck, cardIndex)
  }
  /**
   * @param {Object} Deck - Object with Class Deck.
   * @param {number} int - Number of cards you want to Draw
   */
  /* TODO figure out how to link jsdoc comments together */
  drawMany(TargetDeck, targetIndex, int) {
    for (let i = 0; i < int; i++) {
      this.draw(TargetDeck)
    }
  }
  /**
   * Call on a deck to randomize the order of each array
   */
  shuffle(){
    let len = this.cards.length, int;
    while(len){
      int = Math.floor(Math.random() * len--);
      [this.cards[len], this.cards[int],
      this.img[len], this.img[int]] 
      = 
      [this.cards[int], this.cards[len], 
      this.img[int], this.img[len]];
    }
    return this;
  }
  /* TODO Refactor for better use
  split(size){
      let hand1 = this.cards.slice(0, this.cards.length/2)
      let hand2 = this.cards.slice(this.cards.length/2, 52)
      return [hand1, hand2]
  }
  */
  /* TODO Refactor for use in deck.js
  valueCount(hand, valObj){
    hand.forEach(element => {
      valObj[element.val] = (valObj[element.val] ||0) + 1
    });
    return valObj
  }
  */
}
