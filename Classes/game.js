const Deck = require('./deck')
const Hand = require('./hand')
const PlayArea = require('./playArea')
const deck1 = new Deck();
const playerOneHand = new Hand();
const playerTwoHand = new Hand();
const playArea1 = new PlayArea();


//deckFirstHalf = deck1.split('half')[0]
//console.log(deck1.deck)
//playerOneHand.draw(deck1.deck)
//console.log(playerOneHand)
playerOneHand.drawMany(deck1.deck, 5)
playerTwoHand.draw(deck1.deck)
//console.log(deck1)
playArea1.manyToTransfer(playerOneHand, [{ suit: 'H', val: 1 }, { suit: 'H', val: 3 }, { suit: 'H', val: 4 } ]);
playArea1.potTransfer(playerTwoHand)
console.log(playArea1)
console.log(playerTwoHand)
//console.log(playArea1)
//console.log(playerOneHand.cards)
// console.log('---------------')
// console.log(playArea1)

