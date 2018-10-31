var MemoryGame = function (cards) {
  this.cards = cards; //cards = array
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    if(this.cards){
         shuffle(this.cards);
    }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    if(firstCard === secondCard){
        this.pairsGuessed ++;
        console.log(this.pairsGuessed);
        return true;
    }else{
        this.pairsClicked ++;
        console.log(this.pairsGuessed);
        return false;
    }
}

MemoryGame.prototype.isFinished = function () {

    if(this.pairsGuessed === (this.cards.length)/2){
        return true;
    }else{
        return false
    }
};