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
MemoryGame.prototype.checkIfPair = function (card1, card2) {  
  
  this.pickedCards = [];  
  var dataCard1 = $(card1).attr('data');
  var dataCard2 = $(card2).attr('data');
  var idCard1   = $(card1).attr('id');
  var idCard2   = $(card2).attr('id');
  
  
  if (dataCard1 !== dataCard2) {
    
    this.pairsClicked++;
    $('#pairs_clicked').text(this.pairsClicked);
    
    if (idCard1 === idCard2) {     
      this.pairsGuessed++;
      $('#pairs_guessed').text(this.pairsGuessed); 
      this.msg('YOUT FOUND A MATCH', 'success', 1500);
      
    } else{
      this.flipCard(card1, card2);
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

//flip cards
MemoryGame.prototype.flipCard = function (card1, card2) {
  $(card1).find('.back').removeClass('back');
  $(card1).find(".front").addClass("back");
  $(card2).find('.back').removeClass('back');
  $(card2).find(".front").addClass("back");
    
  setTimeout(function(){
    $(card1).children(0).addClass('back');
    $(card1).find(".front").removeClass("back");
    $(card2).children(0).addClass('back');
    $(card2).find(".front").removeClass("back");

  }, 1500);
  
};

//finish
MemoryGame.prototype.finished = function () {
  return false;
  
};