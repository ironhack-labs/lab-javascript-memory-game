// ******************************************************************
// Game Logic
// ******************************************************************

var MemoryGame = function(){
this.Cards = [{
    name:"aquaman",
    image:"./img/aquaman.jpg"
  },{
    name:"batman",
    image:"./img/batman.jpg"
  },{
    name:"captainAmerica",
    image:"./img/captain-america.jpg"
  },{
    name:"fantasticFour",
    image:"./img/fantastic-four.jpg"
  },{
    name:"flash",
    image:"./img/flash.jpg"
  },{
    name:"greenArrow",
    image:"./img/green-arrow.jpg"
  },{
    name:"greenLantern",
    image:"./img/green-lantern.jpg"
  },{
    name:"ironman",
    image:"./img/ironman.jpg"
  },{
    name:"spiderman",
    image:"./img/spiderman.jpg"
  },{
    name:"superman",
    image:"./img/superman.jpg"
  },{
    name:"theAvengers",
    image:"./img/the-avengers.jpg"
  },{
    name:"thor",
    image:"./img/thor.jpg"
  }];
};

MemoryGame.prototype._shuffleCard = function(array) {
var randomCards = array.concat(array);
return _.shuffle(randomCards);
};

MemoryGame.prototype.selectCard = function(card,array){
  $(card).css('background-image','url('+array.image+')');

};

MemoryGame.prototype.finished = function() {
};


//******************************************************************
// HTML/CSS Interactions
//******************************************************************
$(document).ready(function(){
  var newGame = new MemoryGame();
  var newPosition = newGame._shuffleCard(newGame.Cards);
  var elements = document.getElementsByClassName("pic");
  putCards(newPosition,elements);

  function putCards(arrayPositions,arrayElements){
    for (var i = 0; i < arrayPositions.length; i++) {
      // $(elements[i]).attr("background-image", array[i].image);
      $(arrayElements[i]).on("click", newGame.selectCard(arrayElements[i],arrayPositions[i]),false);
      // $(elements[i]).css('background-image','url('+array[i].image+')');
      // elements[i].setAttribute("background-image", array[i].image);
      //elements[i].addEventListener("click", newGame.selectCard(elements[i]),false);

    }
  }

// $(".row-cards").on("click", "div", function() {
//   $(this).parent('div').on(eventName, eventHandler);}





});
