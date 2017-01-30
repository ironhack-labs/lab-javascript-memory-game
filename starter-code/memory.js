// ******************************************************************
// Game Logic
// ******************************************************************

function MemoryGame (cards){
this.Cards = cards;
this.clickAttemps = 0;
this.couples = 0;
this.randomCards(cards);
this.newPanel();
this.discover();
}

MemoryGame.prototype.randomCards = function(array) {
var createArrayCards = array.concat(array);
this.Cards = _.shuffle(createArrayCards);
};

MemoryGame.prototype.selectCard = function(nameOfCard1,nameOfCard2){
    that = this;
    if(nameOfCard1 === nameOfCard2){
      this.couples ++;
      this.hit(nameOfCard1);
    }else{
      setTimeout(function(){that.cover();},1000);
    }
};

MemoryGame.prototype.finished = function(){
    alert("YOU ARE AWEOSME");

};


//******************************************************************
// HTML/CSS Interactions
//******************************************************************
var heroCards = [{
  name:"aquaman"
},{
  name:"batman"
},{
  name:"captain-america"
},{
  name:"fantastic-four"
},{
  name:"flash"
},{
  name:"green-arrow"
},{
  name:"green-lantern"
},{
  name:"ironman"
},{
  name:"spiderman"
},{
  name:"superman"
},{
  name:"the-avengers"
},{
  name:"thor"
}];
$(document).ready(function(){

MemoryGame.prototype.newPanel = function(){
  for (var i = 0; i < this.Cards.length; i++){
      $('.row-cards').append($('<div>')
        .addClass('pic')
        .attr('data-name', this.Cards[i].name)
      );
    }
};

MemoryGame.prototype.discover = function(){
  var nameOfCard2;
  that = this;
  $('.pic').on('click', function(){
    var nameOfCard1 = $(this).attr('data-name');
    that.clickAttemps += 1;

    $(this).addClass('clicked');
    $(this).css("background-image", "url('img/"+nameOfCard1+".jpg')");
    if (that.clickAttemps%2 === 0) {
      that.selectCard(nameOfCard1,nameOfCard2);
    }else{
      nameOfCard2 = nameOfCard1;
    }
  });
};

MemoryGame.prototype.cover = function (){
    $('.clicked').css('background-image', 'none');
    $('.clicked').removeClass('clicked');
};

MemoryGame.prototype.hit = function (nameOfCard1){
    $('data-'+nameOfCard1).css("background-image", "url('img/"+nameOfCard1+".jpg')");
    // $('.hit').attr('data-role',true);
    $('.pic').removeClass('clicked');
    if (this.couples === (this.Cards.length/2)) {
        this.finished();}
};

var newGame = new MemoryGame(heroCards);

});
