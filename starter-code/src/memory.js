///////////////////////////////////////
///////    DEFINE VARIABLES    ////////
///////////////////////////////////////

var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
 };

///////////////////////////////////////
////////    SHUFFLE ARRAYS    /////////
///////////////////////////////////////

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    console.log(cardsArr.length);
    for(i=0; i < cardsArr.length; i++){
    var j = (Math.floor(Math.random() * cardsArr.length));
     var temp= cardsArr[i];
     cardsArr[i]=cardsArr[j];
     cardsArr[j]=temp;
    }
    return cardsArr;
};

///////////////////////////////////////
////////    CHECK IF PAIRS    /////////
///////////////////////////////////////

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked = this.pairsClicked + 1;
    if(firstCard == secondCard){
        this.pairsGuessed = this.pairsGuessed + 1;
        return true
    }else {
        return false
    }
 }

///////////////////////////////////////
///////////    END GAME    ////////////
///////////////////////////////////////

 MemoryGame.prototype.finished = function () {
    if(this.pairsGuessed === 0){
        return false
    } else if (this.pairsGuessed < 12){
        return false
    } else if (this.pairsGuessed === 12){
        return true
    }
    
 };

////////////////////////////////////////////////
///////////    WEIRD CODE... O.o    ////////////
////////////////////////////////////////////////

 //cards[]
/*
 function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}*/
