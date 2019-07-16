class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards =[];
    this.pairsClicked = null;
    this.pairsGuessed = null;
    this.success = true;
    }
}

// MemoryGame.prototype.isFinished = function(pairsGuessed){
//   if (pairsGuessed === 12){
//     return ("Game Over")
//   }
// }

MemoryGame.prototype.checkIfPair = function(card1, card2) {
  this.pairsClicked ++
  if (card1 === card2){
    this.pairsGuessed++
    return this.success == true
  } else {
    return this.success == false
  }
}

MemoryGame.prototype.shuffleCards = function(array) {
  var theLength = array.length - 1
  var toSwap // the random number
  var temp
  for (let i = theLength; i>0; i--){
    toSwap = Math.floor(Math.random()* i)
    temp = array[i]
    array[i] = array[toSwap]
    array[toSwap] = temp
  }
  return array
}