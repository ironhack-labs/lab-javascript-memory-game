// var MemoryGame = function (cards) {
//   this.cards = cards;
// };

// MemoryGame.prototype.shuffleCards = function () {
// };

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
// }

// MemoryGame.prototype.isFinished = function () {
// };

class MemoryGame {


  constructor(cards) {
    this.cards = cards;
    
    // let newArray = this.pickedCards
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards = [];
  
 
}
choosingCards(card){
  this.pairsClicked += 1;
  //  card.toggleClass("back");
  $(card).toggleClass("show") ;
  $(card).siblings().toggleClass("show");
  
  // $(card).siblings().addClass("seen") /* would mark card as seen and would compare the 2 cards - but didnt work */
 let cardName = $(card).attr('name');
 
  this.pickedCards.push(cardName);
  console.log(this.pickedCards);
}


checkIfPair(firstCard,secondCard){
  firstCard = this.pickedCards[0];
  secondCard = this.pickedCards[1];


  if(firstCard === secondCard){
    $("#pairs_guessed").text(guessCount+=1);
    this.pickedCards.splice(0, 2);
    console.log(this.pickedCards)
    console.log("right Combination")
    return true 
  }  if(this.pickedCards.length > 1 && firstCard !== secondCard ) {
      this.pickedCards.splice(0, 2);

    console.log(firstCard)
      console.log("Wrong Combination");
      $("#pairs_clicked").text(clickCount+=1);

    //   if (console.log("Wrong Combination") === true){
        
    //     $(firstCard).addClass("show");
    //     // console.log("------"$(firstCard))
    // }
      // $(this).hide()
    return false
  }
}

  shuffleCards(cards) {
    let currentIndex = cards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return cards;
  }


}
// // this.pairsGuessed =+ 1
// console.log(secondCard)
// this.pairsClicked =+ 1;
