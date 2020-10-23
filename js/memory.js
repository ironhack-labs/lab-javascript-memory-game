class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairClicked = [];
    this.pairsGuessed = [];
  }
  shuffleCards() { // found this on Stack overflow.
    function shuffle() {
      // creating the current index based on this.cards array length.
      var currentIndex = this.cards.length, 
      temporaryValue, randomIndex;
    
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
  }


  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1.name === card2.name) {
      this.pairsGuessed++;
      return true
    } else {
      return false
    };
  }

  isFinished() {
    
  }
}



/* Resources used:

Shuffle card game:

3 - found here:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?noredirect=1&lq=1





2 - found here: https://www.programiz.com/javascript/examples/shuffle-card

for (let i = deck.length - 1; i > 0; i--) {  // create the loop
    let j = Math.floor(Math.random() * i); // create the randomizing variable
    let temp = deck[i]; declares the temporary index
    deck[i] = deck[j]; // declares the deck's index
    deck[j] = temp; // declares 
}





1 - Following the wikipedia logic:
    // here, we have 1. cards array (name & img) 2. overall number of cards 3. 
    //Total of cards is 12 = this.card.length
    // let currentIndex = this.cards.lentgth;

    // we want to attribute a randomized index to each card, everytime we shuffle:
    let randomIndex = this.cards[Math.random()*this.cards.lentgth]


*/