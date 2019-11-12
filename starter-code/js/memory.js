class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
  let arr = this.cards;
  let i = this.cards.length, j, temp;
  while(--i > 0){
    j= Math.floor(Math.random() * (i+1));
    temp= arr[j];
    arr[j]= arr[i];
    arr[i]= temp;
  }
  return arr;

  }
  checkIfPair(card1, card2) {
  
    if(card1.attributes[1].value === card2.attributes[1].value){
      this.pairsGuessed++;
      return true;
     
    }else{
      this.pairsClicked++;
      return false;
    }
    
  }
  turnCard(areSame,card1,card2){
    if(!areSame){
      setTimeout(function(){
        card1.classList.toggle("turned");
        card2.classList.toggle("turned");
       
      }, 1000);
    }
  }
  isFinished() {
   
    if(this.cards.length/2 ==this.pairsGuessed ){

      setTimeout(function(){
        alert("You win!!");
       
      }, 500);
      return true;
    }else{
      return false;
    }
  }

  addPaisClicked(){
    let spanPairClicled= document.getElementById("pairs_clicked");
    spanPairClicled.innerHTML= this.pairsClicked;   
  }
  addPaisGuessed(){
    let spanPairGuessed= document.getElementById("pairs_guessed");
    spanPairGuessed.innerHTML= this.pairsGuessed;
  }
}