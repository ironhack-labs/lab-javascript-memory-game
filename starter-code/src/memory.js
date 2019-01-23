

var MemoryGame = function (cards) {
  this.cards = cards
  this.pickedCards= []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

// let shufflemuffle = (arr) => {
//   let randomNumber = Math.floor(Math.random()*arr.length)
//   let chosenOne
//   let shuffledArray = []
//   for (i = 0; i <= arr.length; i++) {
//     chosenOne = arr[randomNumber]
//     shuffledArray.push(chosenOne)
//   }
//   return shuffledArray
// }

MemoryGame.prototype.shuffleCards = function (arr) {
  // let randomNumber = Math.floor(Math.random()*arr.length)
  // for (i = 0; i <= arr.length; i++) {
  //   arr[randomNumber]
  // }

    var currentIndex = arr.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }


};



// console.log(shufflemuffle(this.cards))

MemoryGame.prototype.checkIfPair = function (arr) {

if (arr.length === 2) {

  const firstCard = arr[0]
  const secondCard = arr[1]

  if ($(firstCard).attr('name') === $(secondCard).attr('name')) {
    this.pairsGuessed++
    return true
  }
  return false
}
return false



// if (firstCard[name] === secondCard[name]) {
//   this.pairsGuessed++
//   this.pairsClicked++
//   removeClass('back') //COMO DIRECCIONO EL REMOVE CLASS A LO QUE HICE CLICK?????
// } else {
//   toggleClass('back') 
//   this.pairsClicked++
// }

}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsClicked === this.cards.length/2) {
    alert("Tha winner issa yu!")
  }
};