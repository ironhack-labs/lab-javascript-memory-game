var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};
MemoryGame.prototype.selectCard = function ($card){
  if($card.hasClass('waiting')){
    return;
  }
  if(this.pickedCards.length === 0){
    this.pickedCards.push($card);
  } else {
    $("#pairs_clicked").text(++this.pairsClicked);
  if(this.pickedCards[0].attr('name') == $card.attr('name')){

  } else {
    setTimeout(function(){
      $('.waiting').removeClass('waiting');
    }, 2000);
  }
  }
}

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  return shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard == secondCard){
    this.pairsGuessed++;
    return true;
  }else{
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed == 0){
    return false;
  }
  // if(this.pickedCards.length == 0){
  //   return false;
  // }
  console.log(this.pairsGuessed, this.cards.length/2);
  if(this.pairsGuessed == this.cards.length/2){
    return true;
  }
  else{
    return false;
  }
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
