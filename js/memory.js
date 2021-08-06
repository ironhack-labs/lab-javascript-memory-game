class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    const valorInincial = 0;
    if (this.cards == undefined) {
      return undefined;
    }
    this.cards.forEach(() => {
      const valorFinal = this.cards.length;
      //embaralhador
      const result = Math.floor(Math.random() * (valorFinal - valorInincial));
      const selectorCards = this.cards[result];
      //apagar cartas quando errar
      this.cards.splice(result, 1);
      // // adiconar cartas numa array quando acertar
      this.cards.push(selectorCards);
    });
  }
  checkIfPair(card1, card2){
    // ... write your code here
    //verificar se as cartas são iguais
    this.pairsClicked += 1;

    if (card1 === card2) {
      // se for true, deve adiconar 1 para o array pairsGuessedf
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    // criar logida de saida de jogo, ao completar verificando se a pairsGuessed completou

    if (this.cards.length / 2 == this.pairsGuessed) {
      return true;
    } else {
      return false;
    }
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
const cardsArray = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' }
];
const memory = new MemoryGame(cardsArray)
console.log(memory.cards)
memory.shuffleCards()
console.log(memory.cards)
