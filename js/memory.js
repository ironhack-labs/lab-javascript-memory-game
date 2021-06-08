class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // FISHER YATES SHUFFLE
  shuffleCards(arr) {
    let copiedDeck = this.cards.slice();
    let shuffledDeck = [];
    function shuffle() { return Math.floor(Math.random() * copiedDeck.length) }
    for (let i = 0; i < 24; i++) {
      let x = shuffle();
      shuffledDeck.push(copiedDeck[x])
      copiedDeck.splice(x, 1, copiedDeck[copiedDeck.length - 1])
      copiedDeck.pop();
    }
    this.cards = shuffledDeck
    

  }

  checkIfPair(card1, card2) {
    let a=card1.attributes['data-card-name'].value
    let b=card2.attributes['data-card-name'].value
    this.pairsClicked += 1;
    document.getElementById('pairs-clicked').innerHTML=this.pairsClicked
    
    if (a === b) { 

      this.pairsGuessed += 1;
      card1.setAttribute('class','card turned blocked')
      card2.setAttribute('class','card turned blocked')
      this.pickedCards=[];
      document.getElementById('pairs-guessed').innerHTML=this.pairsGuessed;
      this.checkIfFinished();
      return true };
      
      setTimeout(()=>{card1.classList.toggle('turned', false)},2000);
      setTimeout(()=>{card2.classList.toggle('turned', false);this.pickedCards=[]},2000);
      
      return false;
    
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {alert('YOU WON!!')} 
  }


}

/*
const karten = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

*/

//const testGame = new MemoryGame(karten)







// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
