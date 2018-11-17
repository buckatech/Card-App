const Deck = require("../Classes/deck");
const Card = require("../Classes/card")
const GoofSpiel = require("../Classes/gameClasses/goof");
const prompt = require("prompt");

let goofSpiel = new GoofSpiel();

goofSpiel.discard.cards.push((goofSpiel.P1Hand.cards.splice(0, 2)))
console.log(goofSpiel)

