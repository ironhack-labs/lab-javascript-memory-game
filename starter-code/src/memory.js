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
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
 
}
  choosingCards(card){
    
    this.pairsClicked += 1;
    //  card.toggleClass("back");
    $(card).toggleClass("show") ;
    $(card).siblings().toggleClass("show")
    console.log($(card).siblings());
    this.pickedCards.push($(card).siblings());
    // console.log(this.pickedCards[0].outerHTML)
    // console.log(this.pickedCards[1].outerHTML)
    if (this.pickedCards.length > 1) {
      if ($(card).siblings() === this.pickedCards[0]){
        console.log("got it")
      }
    }
    // console.log(card);
    // console.log(this.pickedCards);
  // $(".hide").toggleClass("show")

  // $(card).sibling().toggleClass("hide")
  
  
};



}





//  if(card.hasClass("back")){
//    card.addClass("front");
//    card.removeClass("back");
  // } 
  // if (card.hasClass("front")) {
  //   card.addClass("back");
  //   card.removeClass("front");
  // }


  // if($(".back").is(":visible")){
  //   card.addClass("front");
  // }

    // compairingCards(){

    // }
    // equalCards(){

    // }

    
    /*chosenCards - jquery syntax for click action */
  //   // pickedCards.push(chosenCards);
  //   /* card clicked pointed by jquery are put into the array  = */ this.pairsClicked;
  //  /* compare cards clicked function - > and than we compare object[0] - object [1] */ = this.pairsGuessed;
  //  if this.pairsGuessed = true > blueCard Class disappear.
  
