var MemoryGame = function() {
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


function appendImages(game){
  var test = $(".pic");

  for(var i=0; i < game.Cards.length; i++){
      $(test[i]).attr("src", "img/" + game.Cards[i].img);
      $(test[i]).attr("name", game.Cards[i].name);
  }
}

function startGame(){
  $(".pic").toggle();
}

function showMe(){
  $(".tile").click(function(){
      if(!$(this).hasClass("winrar")){
        if($(".active").length < 2){
          console.log($(".active").length);
          $(this).children().toggle();
          $(this).toggleClass("active");
        }
      }
      if($(".active").length == 2){

        var timer = setTimeout(function(){
          checkCouple();
        }, 400);
        checkWin();
      }
  });

}

function checkCouple(){
  var check1 = $(".active")[0];
  var check2 = $(".active")[1];
  check1 = $(check1).children()[0];
  check2 = $(check2).children()[0];
  if ( ($(check1).attr('name')) == ($(check2).attr('name')) ) {
    $(".active").addClass("winrar");
    $(".tile.active").css("background-color", "rgba(60, 255, 69, 0.8)");
    $(".active").removeClass("active");
} else {

  $(".active").children().toggle();
  $(".active").removeClass("active");
}
}

function checkWin(){
  if($(".winrar").length == ($(".pic").length) -2) {
    $("#memory_board").toggle();
    $("#win").toggle();
  }


}

function playAgain(){
  $("#play-again").click(function(){
    location.reload();
  });
}

$(document).ready(function(){
  playAgain();
  var memory = new MemoryGame();

  appendImages(memory);
  //showing the cards at the start of the game
  var start = setTimeout(function(){
    startGame();
    //this stays also inside the timeout because otherwise we would be able toggle the tiles before the start of the game
    showMe();
  }, 2500);



});
