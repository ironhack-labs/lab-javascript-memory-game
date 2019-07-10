/*
+++++++ Crea un método para barajar las cartas, de modo que cada vez que crees un juego nuevo, 
        el orden de las cartas cambia. Solo necesitarás cambiar la propiedad de las cartas de 
        tu objeto. Sugerencia: sería una buena idea implementar algo como un Shuffle de 
        Fisher-Yates. Si tiene dificultades con esta función, puede omitir por el momento y 
        volver a utilizarla más tarde.

+++++++  Como Memory no tiene un 'Game Over', solo necesitamos una función 'Win', 
         en la que necesitamos verificar si nuestros pares de propiedades Admitieron los números 
         de pares que tiene el juego.
*/


class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  
  shuffleCards() {}


  // shuffleCards(cards) {
  //   cards.forEach(funtion(cards))
  // }
  
  checkIfPair(card1, card2) {
    if(card1===card2){
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    }else{
      this.pairsClicked += 1
      return false
    }
  }
  isFinished() {
   if(this.pickedCards==[]){
      return false     
      }else if(this.pickedCards<cards){
        return false
      }else(this.pickedCards==cards)
  }
}


// The other important interaction is the click listener. Remember to add the listeners when 
// the document is loaded.

document.addEventListener("DOMContentLoaded", function(event) { 

  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      // TODO: write some code here
      console.log('Card clicked')
    }
  });



});