var MemoryGame = function() {
  this.numTry = 0;
  this.numSuc = 0;
  this.board = $(".board");
  this.userSelect1 = "";
  this.userSelect2 = "";

  this.Cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
  this.picked_cards  = [];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;

  this._shuffleCard();


  //rellenar el grid
  this.createBoard();
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

MemoryGame.prototype.compareCards = function(cards) {
  if (cards[0].name === cards[i].name) {
    //Dejar fijas
    //Añadir contador de exitos
    this.numSuc+=1;
  } else {
    //Voltear
    //Añadir contador intentos
    this.numTry+=1;
  }
};

MemoryGame.prototype.createBoard = function(){
  var currentDivID;
  var currentDiv;
  for (var i=0; i<this.Cards.length; i++) {
    currentDivID = ("#"+i);
    currentDiv = $(currentDivID);
    $(this.board).append("<div class='pic data-card-name=''" + this.Cards[i].name + "' id='" + i + "'></div>");
    //$("#"+i).css("background-image", "url('img/"+ this.Cards[i].img + "')");
    $("#"+i).css("background-image", '');
    that = this;
    $("#"+i).on("click", this.divClick);
  }
};

MemoryGame.prototype.divClick = function (e){
    //console.log(e.currentTarget.id);
    var id = e.currentTarget.id;
    console.log(id);
    var ele = $("#"+id);
    if (ele.css("background-image")=="none") {
      //e.css("background-image","url('img/"+ this.Cards[i].img + "')");
      ele.css("background-image", "url('img/"+ that.Cards[id].img + "')");
    } else {
      ele.css("background-image", '');
    }
};

var memoryGame;

clicks = [];
MemoryGame.prototype.checkClick = function(id) {
  if (clicks.length < 2 ) {
    if (clicks.length == 1) {

    } else {
      clicks.push(id);
    }
  } else {

  }
};



$(document).ready(function(){
  memoryGame = new MemoryGame();



});
