class MemoryGame {
  constructor(card){
    this.cards = cards;
    //the length of this arr is 2, and contains 2 cards we will be comparing
    this.pickedCards = [];
    // this number opdates every 12
    this.pairsClicked = 0;
    // the goal is to get to 12 guessed pairs
    this.pairsGuessed = 0;
    this.shuffleCards(cards);
  }


  shuffleCards(someArr) {
    let theLength = someArr.length;
    while (theLength > 0 ){
      // getting the random number
      let index = Math.floor(Math.random ()* theLength);
      theLength --;
      // create a tem variable that will get the value of the last element in the arr
      let tempVar = someArr[theLength];
      //fill up the last element with the random array  elem
      someArr[theLength]= someArr[index];
      // fill up the empty space where the random element was in the tempVar
      someArr[index] = tempVar;
    }
    return someArr;
  }



  checkIfPair(card1, card2) {
this.pairsClicked += 1
if (card1 === card2){
  this.pairsGuessed +=1
  $("#pairs_guessed").html(this.pairsGuessed)
  $("#pairs_clicked").html(this.pairsClicked)
return true

}else{
  this.pairsClicked += 1
  $("#pairs_clicked").html(this.pairsClicked)
  return false;
}

  }
  isFinished() {
    
    
    return false
  }

  
}

