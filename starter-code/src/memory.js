class MemoryGame{
    constructor(cards){
        this.cards = this.shuffleCards(cards);
        this.pickedCards = []
        this.pairsGuessed = 0
        this.pairsClicked = 0
    }
shuffleCards(cardsArr){
return cardsArr.sort(function(a,b){
    return (Math.random()-0.5)
})
//this.cards.sort(function(a,b){
//    return Math.random() - 0.5;
//})
}
checkIfPair(firstCard, secondCard){
    console.log('checking :' + firstCard + secondCard)
this.pairsClicked++;
if (firstCard === secondCard){
    this.pairsGuessed++;
    return true;
}
return false;
}
finished() {
    console.log('Finish activated')
    if (this.pairsGuessed === 12) {
      console.log('Bingo EndGame---------------------')
      return true;
    } else {
      return false;
    }
}
}