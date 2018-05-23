var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.timing = 800;

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
  this.flipCard(card);
  console.log(this.pickedCards);
  
};

//check if match
MemoryGame.prototype.checkIfPair = function (card1, card2) {  
  var dataCard1 = $(card1).attr('data'); idCard1 = $(card1).attr('id');
  var dataCard2 = $(card2).attr('data'); idCard2 = $(card2).attr('id');
  
  this.pickedCards = [];  
  
  if (dataCard1 === dataCard2) {
    this.msg('Dont click in the same card', 'wrong', 1500);     
  }  else{
    this.pairsClicked++;
    $('#pairs_clicked').text(this.pairsClicked);
    
    if (idCard1 === idCard2) {
      $(card1).addClass('blocked');
      $(card2).addClass('blocked');
      
      this.pairsGuessed++;
      $('#pairs_guessed').text(this.pairsGuessed); 
      this.msg('You found a match', 'success', this.timing);
      this.flipCard(card1, card2);
      this.finished();
      
    } else{      
      this.msg('Try again', 'wrong', this.timing);  
      this.flipCard(card1, card2);    
    } 
  }
};

//flip cards
MemoryGame.prototype.flipCard = function(card1, card2){
  $(card1).find('.back').removeClass('back').addClass('front');
  $(card1).find('.front:last').removeClass('front').addClass('back');
  $(card2).find('.back').removeClass('back').addClass('front');
  $(card2).find('.front:last').removeClass('front').addClass('back');
  
  setTimeout(function(){
    if ($(card1).hasClass('blocked')) {return;}
    if ($(card2).hasClass('blocked')) {return;}
    $(card1).find('.front').removeClass('front').addClass('back');
    $(card1).find('.back:last').removeClass('back').addClass('front');
    $(card2).find('.front').removeClass('front').addClass('back');
    $(card2).find('.back:last').removeClass('back').addClass('front');
    
  },this.timing);
  
};

//finish
MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed >= this.cards.length / 2) {
    confirm('you won, want to play again?');
    if (confirm) {
      location.reload();
    }
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

