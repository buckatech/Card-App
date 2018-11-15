const Card = require('./card')
module.exports = class Deck {
  constructor(suits, values) {
    this.deck = [];
    if (typeof(suits) === 'object' && typeof(values) === 'object' )
    suits.forEach(suitEle => {
      values.forEach(valEle => {
        let card = new Card(suitEle, valEle)
        this.deck.push(card)
      })
    });
  }

  shuffle(){
    let len = this.deck.length, int;
    while(len){
      int = Math.floor(Math.random() * len--);
      [this.deck[len], this.deck[int]] = [this.deck[int], this.deck[len]];
    }
    return this;
  }
  split(size){
    if (size === 'half'){
      let hand1 = this.deck.slice(0, this.deck.length/2)
      let hand2 = this.deck.slice(this.deck.length/2, 52)
      return [hand1, hand2]
    }
  }
  /* TODO - move valueCount to Hand.js */
  // checks if more than one of a value exists in hand
  valueCount(hand, valObj){
    hand.forEach(element => {
      valObj[element.val] = (valObj[element.val] ||0) + 1
    });
    return valObj
  }
}
