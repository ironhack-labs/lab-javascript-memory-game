 var MemoryGame = function (cards){
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = [];
   this.pairsGuesse = [];
 };
 console.log(this.cards);

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
    
    var shuffleArray = [];
    cardsArr.forEach(function(element, index) {
        var i = Math.floor(Math.random()*cardsArr.length);
        index = i;
        shuffleArray.push(element[index]);
        cardsArr.splice(index, 0);

    });

    console.log(shuffleArray);

 };

//MemoryGame.shuffleCard(cards);

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

// }

// MemoryGame.prototype.finished = function () {

// };
