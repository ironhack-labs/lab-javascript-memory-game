 var MemoryGame = function (cards){
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
 };
 console.log(this.cards);

 MemoryGame.prototype.shuffleCard = function (cardsArr) {

  var currentIndex = cardsArr.length;
  var temp = 0;
  var randomIndex = 0;

  while (currentIndex !== 0) {
    
    randomIndex = Math.floor(Math.random() * currentIndex);
    // loop backwards through array:
    currentIndex -= 1;

    //swap random and current index using temp value
    temp = cardsArr[currentIndex];
    cardsArr[currentIndex] = cardsArr[randomIndex];
    cardsArr[randomIndex] = cardsArr[temp];
  }

  return cardsArr;
  
    /*var shuffleArray = [];
    cardsArr.forEach(function(element, index) {
        var i = Math.floor(Math.random()*cardsArr.length);
        index = i;
        shuffleArray.push(element[index]);
        cardsArr.splice(index, 0);

    });*/

 };

//MemoryGame.shuffleCard(cards);

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard == secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if(  this.pairsGuessed === (this.cards.length / 2)){
    return true;
  } else {
    return false;
  };
};
