$(document).ready(function(){
});

var MemoryGame = function() {
  this.Cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captainamerica", img: "captain-america.jpg" },
  		{ name: "fantasticfour",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "greenarrow",     img: "green-arrow.jpg" },
  		{ name: "greenlantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "theavengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captainamerica", img: "captain-america.jpg" },
      { name: "fantasticfour",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "greenarrow",     img: "green-arrow.jpg" },
  		{ name: "greenlantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "theavengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
  this.picked_cards  = [];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;
  this._shuffleCard();
};
// this function just takes the array of cards above and shuffles them into a random order
MemoryGame.prototype._shuffleCard = function() {
  var counter = this.Cards.length;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = this.Cards[counter];
    this.Cards[counter] = this.Cards[index];
    this.Cards[index] = temp;
  }
  return;
};

var card1 = "";
var card2 = "";
var index = "";
var pickedCard1 = "";
var pickedCard2 = "";
var pairsGuessed = Number($('#pairs-guessed').text());
var pairsClicked = Number($('#pairs-clicked').text());

var memoryGame;
$(document).ready(function(){
  memoryGame = new MemoryGame();

  var cardSwitch = true;

  $(".card").on("click", function(){
    if(cardSwitch === true){
    index = $(this).parent().text() - 1;
    $(this).addClass(memoryGame.Cards[index].name);
    pickedCard1 = $(this);
    card1 = memoryGame.Cards[index].name;
    cardSwitch = false;
  }
    else{
    index = $(this).parent().text() - 1;
    $(this).addClass(memoryGame.Cards[index].name);
    pickedCard2 = $(this);
    card2 = memoryGame.Cards[index].name;
    cardSwitch = true;
    pairsClicked = pairsClicked + 1;
    $("#pairs-clicked").text(pairsClicked);
    if(card1 === card2){
      pairsGuessed = pairsGuessed + 1;
      $("#pairs-guessed").text(pairsGuessed);
      console.log(memoryGame.pairs_guessed);
    }
    else{
      var timeoutId = setTimeout(function () {
      $(pickedCard1).removeClass(card1);
      $(pickedCard2).removeClass(card2);
      }, 1000);
    }
    // console.log(pairsCliked);
    // console.log(pairsGuessed);
    // $("#pairs_clicked").text(pairsCliked);
    // $("#pairs_guessed").text(pairsGuessed);
  }
});
});
