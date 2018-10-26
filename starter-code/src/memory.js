class MemoryGame{

  constructor(cards){
    this.cards = cards;

    // list of cards that are currently picked
    this.pickedCards = [];

    // Number of pairs clicked
    this.pairsClicked = 0;

    // Number of pairs guesses
    this.pairsGuessed = 0;
  }


  /**
   * Method to shuffle the cards
   */
  shuffleCards(){
    this.cards = this._shuffle(this.cards)
  }

  /**
   * implements recursively a Fisher-Yates Shuffle
   * @param arr to shuffle
   * @private
   */
  _shuffle(arr){

    if(arr.length <= 1 || arr === undefined){
      return arr;
    }
    else{
      // 1. draw one random element
      var ixRandomElement = Math.floor(Math.random()*arr.length);
      var randomElement = arr[ixRandomElement];

      // 2. create a new array without the element
      var arrSmall = arr.slice();
      arrSmall.splice(ixRandomElement, 1);

      // 3. execute the shuffle function on the former array
      var shuffledArrSmall = this._shuffle(arrSmall);

      // 4. concatenate the result
      shuffledArrSmall.push(randomElement)

      return shuffledArrSmall
    }
  }

  /**
   * Returns true if and only if the two cards in the argument of the function are the same
   * @param firstCard
   * @param secondCard
   */
  checkIfPair(firstCard, secondCard){

    var areEqual = firstCard === secondCard;

    this.pairsClicked += 1;
    this.pairsGuessed += (areEqual)? 1 : 0;

    return areEqual
  }


  /**
   * Returns true if and only if all the cards are returned
   */
  isFinished(){
    return (this.pairsGuessed * 2) === this.cards.length;

  }




}

