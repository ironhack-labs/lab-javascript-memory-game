var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.cardOpen = 0;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.drawOnPage = function () {
  var html = '';
  this.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back card-back" name="'+ pic.img +'"></div>';
    html += '  <div class="front card-image" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
   // Add all the div's to the HTML
   $('#memory_board').html(html);
};

MemoryGame.prototype.shuffleCards = function () {
  let i = this.cards.length;
  let randomShuffle; 
  let temporaryStorage;
  while(i){
    randomShuffle = Math.floor(Math.random() * i--);
    temporaryStorage = this.cards[randomShuffle];
    this.cards[randomShuffle] = this.cards[i];
    this.cards[i] = temporaryStorage;
  }
};

MemoryGame.prototype.checkIfPair = function (first, second) {
  if(first === second){
    this.pairsGuessed++;
    this.pairsClicked++;
  } else {
    this.pairsClicked++;
  }
  $('#pairs_guessed').html(this.pairsGuessed);
  $('#pairs_clicked').html(this.pairsClicked);

  if(first === second){
    return true;
  } else {
    return false;
  }
}


MemoryGame.prototype.flipCard = function(card){
  if($(card).hasClass('found')){
    return;
  }
  if($(".card-image.back").length < 2) {
    $(card).children().toggleClass("back front");

    if ($(".card-image.back").length == 2) {
      let firstCard = $(".card-image.back").parent()[0];
      let secondCard = $(".card-image.back").parent()[1];
      let firstCardName = $(firstCard).attr('data-card-name');
      let secondCardName = $(secondCard).attr('data-card-name');
      let isPair = this.checkIfPair(firstCardName, secondCardName);
      if(!isPair) {
        setTimeout(function(){ 
          $(".card-image.back").parent().children().toggleClass("back front");
        }, 1000);
      } else {
        $(".card-image.back").parent().addClass('found');
        $(".card-image.back").removeClass('card-image');
      }
    }
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length / 2) {
    $('#congratulations').css('display: flex');
    $("#memory_board").hide();
  }
};