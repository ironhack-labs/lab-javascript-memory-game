class MemoryGame {
  constructor(cards,){
    this.cards = cards;
    this.clickedCards = [];
    this.pairedCards = [];
    this.clicked = 0;
    this.guesses = 0;
  }

  showCard(card){
    if(this.clickedCards.length < 2){
      $(card).find('div:first-of-type').removeClass('back');
    }
  }

  hideCards(){
    setTimeout(function(){
      $('.card:not(.paired)').find('div:first-of-type').addClass('back');
    }, 200);
  }

  addToClickedCards(card){
    let newCard = {name: $(card).attr('data-card-name'), index: $(card).attr('id')};
    
    if(this.clickedCards.length === 0){
      this.clickedCards.push(newCard);
    }

    if(this.clickedCards.length == 1 && this.clickedCards[0].index !== newCard.index){
      this.clickedCards.push(newCard);
    }
  }

  clearClickedCards(){
    this.clickedCards = [];
  }

  checkIfPair(){
    if(this.clickedCards.length == 2){
      if(this.clickedCards[0].name === this.clickedCards[1].name){
        this.pairedCards.push(this.clickedCards[0]);
        this.pairedCards.push(this.clickedCards[1]);

        $('#'+this.clickedCards[0].index).addClass('paired');
        $('#'+this.clickedCards[1].index).addClass('paired');

        return true;
      }else{
        return false;
      }
    }else{
      return undefined;
    }
  }

  addToPairedCards(){
    if(this.clickedCards[0].name === this.clickedCards[1].name){
      this.pairedCards.push(cards[0]);
      this.pairedCards.push(cards[1]);
    }
  }

  updateCardsGuessed(){
    this.guesses++;
    $('#pairs_guessed').text(this.guesses);
  }

  updateCardsClicked(){
    this.clicked++;
    $('#pairs_clicked').text(this.clicked);
  }

  shuffleCards(cardsToShuffle){

    let currentIndex = cardsToShuffle.length;
    let tempValue;
    let randomIndex;

    while(0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = cardsToShuffle[currentIndex];
      cardsToShuffle[currentIndex] = cardsToShuffle[randomIndex];
      cardsToShuffle[randomIndex] = tempValue;
    }

  }

  isFinished(){
    if(this.pairedCards.length === this.cards.length){
      return true;
    }
  }
}