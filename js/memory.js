//SINGLE PLAYER VERSION 1.0  <link rel="stylesheet" href="./css/style.css" />
class MemoryGame {
  //cards: Array de objetos
  constructor(cards) {
    //Establece cards en la propiedad this.cards
    this.cards = cards;
    // add the rest of the class properties here
    //Array donde se almacenan las tarjetas en las que el usuario ha hecho click
    //para poder compararlas en el metodo checkifPair
    let pickedCards = []
    this.pickedCards = pickedCards
    //Declaramos la variable pairsClicked, que inicializaremos a 0
    //Propiedad donde se iran agregando las cards que el usuario elija
    let pairsClicked = 0
    this.pairsClicked = pairsClicked
    //Declaramos la variable pairsGuessed, que inicializaremos a 0
    let pairsGuessed = 0
    //Propiedad donde se iran agregando las cards que el usuario adivine
    this.pairsGuessed = pairsGuessed
  }
  //barajar
  shuffleCards() { }
  //comparara tarjertas
  checkIfPair(card1, card2) { }
  //comprobar si el juego esta terminado
  isFinished() { }
}