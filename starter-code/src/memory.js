
class MemoryGame{
  constructor(cards){
    this.cards = cards;
    this.pickedCards=[]
    this.pairsClicked=0;
    this.pairsGuessed=0;
  }

  shuffleCards(cards) {
    let arrPush = [];
    for(let i = this.cards.length; i > 0; i--){
    let randomCardIndex = Math.floor(Math.random()*(i));
    arrPush.push(this.cards[randomCardIndex]);
    
    this.cards.splice(randomCardIndex,1);  
    }

  this.cards = arrPush;
  return arrPush;
  };

  
  checkIfPair() {

    let cardOne = this.pickedCards[0].attr("name");
    let cardTwo = this.pickedCards[1].attr("name");

    if(cardOne === cardTwo){
      this.pairsClicked ++;
      this.pairsGuessed ++;
      
  } else {
      this.pairsClicked ++;
      this.pickedCards[0].show();
      this.pickedCards[1].show();

      this.pickedCards[0].siblings().removeClass('back');
      this.pickedCards[1].siblings().removeClass('back');
  }

  this.pickedCards = [];


  $("#pairs_clicked")[0].innerHTML = this.pairsClicked;
  $("#pairs_guessed")[0].innerHTML = this.pairsGuessed;

    if(this.pairsGuessed === 12){
    alert("YAY! You won the game!")
  }

};

  // isFinished() {
  //   if(this.pairsGuessed === 12){
  //     alert("YAY! You won the game!")
  //   }
  // }
};
