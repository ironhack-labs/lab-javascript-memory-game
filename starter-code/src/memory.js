var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards=[];
   this.pairsClicked=0;
   this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    let shuffledCard=cardsArr;
    for(let i=shuffledCard.length-1;i>1;i--){
        let j=Math.floor(Math.random()*shuffledCard.length);
        let actual=shuffledCard[i];
        shuffledCard[i]=shuffledCard[j]
        shuffledCard[j]=actual;
    }
    return shuffledCard;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    return ((firstCard==secondCard) ? (this.pairsGuessed++, true): false);
}

MemoryGame.prototype.finished = function () {
    return (this.pairsClicked==0 ? false: (this.pairsGuessed==(this.cards.length/2) ? true: false));
};
