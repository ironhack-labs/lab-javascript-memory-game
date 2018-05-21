var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

//shuffle
MemoryGame.prototype.shuffleCard = function (cardsArr) {
  for (var i = 0; i < cardsArr.length; i++) {
    var randomCard = Math.floor(Math.random() * cardsArr.length);
    var aux = cardsArr[randomCard];
    cardsArr[randomCard] = cardsArr[i];
    cardsArr[i] = aux;    
  }
  return cardsArr;
};

//add card
MemoryGame.prototype.addCardToPickedCards = function (card) {  
  this.pickedCards.push(card);  
};

//check if match
MemoryGame.prototype.checkIfPair = function ($firstCard, $secondCard) {  
  this.pickedCards = [];
  var $card1 = $firstCard.children()[0];
  var $card2 = $secondCard.children()[0];
  
  if ($card1.getAttribute('data') !== $card2.getAttribute('data')) {
    
    this.pairsClicked++;
    $('#pairs_clicked').text(this.pairsClicked);
    
    if ($firstCard.attr('id') === $secondCard.attr('id')) {     
      this.pairsGuessed++;
      $('#pairs_guessed').text(this.pairsGuessed); 
      this.msg('YOUT FOUND A MATCH', 'success', 1500);
      
    } else{
      this.flipCard($card1, $card2);
      this.msg('Try again', 'wrong', 1500);      
    }
  }  else{
    this.msg('Dont click in the same card', 'wrong', 1500);      
  }
};

//message
MemoryGame.prototype.msg = function (mensaje, type, tiempo) {
  $('.message').addClass('reveal' + ' ' +  type);
  $('.message').text(mensaje).css({color: "white", textAlign: "center", fontSize:'70px' });
  
  setTimeout(function(){
    $('.message').removeClass('reveal' + ' ' +  type);
  }, tiempo);
};


//finish
MemoryGame.prototype.flipCard = function (card ,card2) {
  // $(card).toggleClass('back front');
  // $(card).next().addClass('front back');
  // $(card2).toggleClass('back front');
  // $(card2).next().addClass('front back');
  $(card).find('.back').removeClass('back').addClass('blocked');
  $(card).find(".front").addClass("back");
  
};


MemoryGame.prototype.finished = function () {
  return false;
  
};