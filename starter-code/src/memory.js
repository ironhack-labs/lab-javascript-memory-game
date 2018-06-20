
//constructor
var MemoryGame = function (cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
};

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
        //un loop para checar todo el array
     var currentIndex = cardsArr.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
     //randomizas el currentindex
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
      }
        temporaryValue = cardsArr[currentIndex];
        cardsArr[currentIndex] = cardsArr[randomIndex];
        cardsArr[randomIndex] = temporaryValue;
      
        return cardsArr;
    };

    MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
        //checa cuando el click hace par con otro click
            this.pairsClicked++;
            if (firstCard==secondCard)
            this.pairsGuessed++;
        
            return (firstCard===secondCard);
};

MemoryGame.prototype.finished = function () {
    
        if (this.pairsGuessed==12){
            return true;
        } else {return false;}
                
     };
