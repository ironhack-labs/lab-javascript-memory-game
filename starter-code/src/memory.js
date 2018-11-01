class MemoryGame{
  constructor(cards){
    this.cards = cards;
    this.pickedCards = new Array();
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arrayInt) {
    var currentIndex = arrayInt.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = arrayInt[currentIndex];
      arrayInt[currentIndex] = arrayInt[randomIndex];
      arrayInt[randomIndex] = temporaryValue;
    }
  
    return arrayInt;
  }

  checkIfPair(firstCardInt, secondCardInt) {    //this is tho modify the score board
    
    let firstCardChosen = this.pickedCards[0];
    let secondCardChosen = this.pickedCards[1];

    this.pairsClicked += 1;

    if(firstCardChosen.name === secondCardChosen.name){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    };
  };

  isFinished(){
    if(this.pairsGuessed == '12'){
      alert('Game has finished, you won! Congratulations');
    };
  };
};




