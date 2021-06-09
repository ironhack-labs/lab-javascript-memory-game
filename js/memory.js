class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.shuffleCards(this.cards);
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var m = this.cards.length, t, i;
    
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      console.log('Pairs guessed: ' + this.pairsGuessed)
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed == this.cards.length/2) return true
    return false
  }
}

// let game = new MemoryGame(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
// console.log(game.cards);
// game.cards = game.shuffleCards();
// console.log(game.cards);
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[1]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[2]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[3]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[4]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[5]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[6]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[7]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[8]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[9]))
// console.log('Opening two cards... Are they the same? ' + game.checkIfPair(game.cards[0],game.cards[10]))
// console.log('Has the game finished yet? ' + game.checkIfFinished())

// let game2 = new MemoryGame(['1', '2', '1', '2']);
// console.log(game2.cards);
// game2.cards = game2.shuffleCards();
// console.log(game2.cards);
// console.log('Opening two cards... Are they the same? ' + game2.checkIfPair(game2.cards[0],game2.cards[1]))
// console.log('Has the game finished yet? ' + game2.checkIfFinished())
// console.log('Opening two cards... Are they the same? ' + game2.checkIfPair(game2.cards[0],game2.cards[2]))
// console.log('Has the game finished yet? ' + game2.checkIfFinished())
// console.log('Opening two cards... Are they the same? ' + game2.checkIfPair(game2.cards[0],game2.cards[3]))
// console.log('Has the game finished yet? ' + game2.checkIfFinished())
// console.log('Opening two cards... Are they the same? ' + game2.checkIfPair(game2.cards[1],game2.cards[2]))
// console.log('Has the game finished yet? ' + game2.checkIfFinished())
// console.log('Opening two cards... Are they the same? ' + game2.checkIfPair(game2.cards[1],game2.cards[3]))
// console.log('Has the game finished yet? ' + game2.checkIfFinished())


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
