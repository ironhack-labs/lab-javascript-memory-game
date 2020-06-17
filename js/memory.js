class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0
  }


  shuffleCards(array) {
  	if(arguments.length==0)
  	return undefined
  
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
  
  checkIfPair(card1, card2) {/*
  	this.pairsClicked+=1*/
  	if(card1==card2)
  		this.pairsGuessed+=1
  	return card1==card2


  }

  isFinished() {
  	return this.pairsGuessed==12
  }
}