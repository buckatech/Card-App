const express = require("express");
const router = express.Router();
const Deck = require("../Classes/deck");
const GoofSpiel = require("../Classes/gameClasses/goof");
const prompt = require("prompt");

// New GoofSpiel class to manage GoofSpiel specific logic
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let goofSpiel = new GoofSpiel();

const discardIndex = () => {
  console.log(goofSpiel)
  console.log(goofSpiel.activeCard.SuitValues)
  console.log(goofSpiel.activeCard.Values)
  console.log(goofSpiel.activeCard.Suits)
}
discardIndex()
