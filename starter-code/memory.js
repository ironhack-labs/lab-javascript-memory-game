// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
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
    this.selectedCards = [];
    this.pairsClicked =  parseInt($("#pairs_clicked").html());
    this.correctPairs = parseInt($("#pairs_guessed").html());


};

MemoryGame.prototype._shuffleCards = function(array) {


  var m = array.length;
  var t;
  var i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;

  }
  return array;

};
var cardsArray =[];



MemoryGame.prototype.selectCard = function(card) {

  cardsArray.push(card);

  var self = this;

  //console.log(cardsArray.length, cardsArray);
  if (cardsArray[0] !== cardsArray[1] && cardsArray.length > 1) {
      $("body").addClass("pointerDisabled");

    setTimeout(function () {

      $("." + cardsArray[0]).removeClass("visible");
      $("." + cardsArray[1]).removeClass("visible");
      $("." + cardsArray[0]).removeClass("hide");
      $("." + cardsArray[1]).removeClass("hide");
      $("body").removeClass("pointerDisabled");
      cardsArray = [];
    }, 1000);

    this.pairsClicked += 1;
    $("#pairs_clicked").text(this.pairsClicked);
    this.finished();
  }
  if (cardsArray[0] === cardsArray[1]) {

    cardsArray = [];


    this.correctPairs += 1;

    $("#pairs_guessed").text(this.correctPairs);
    self.finished();

  }
};
MemoryGame.prototype.finished = function() {

  if(this.correctPairs === 12) {

    $(".front").removeClass("visible");
    $(".back").removeClass("hide");
    $("#pairs_clicked").text("0");
    $("#pairs_guessed").text("0");
    alert("You Win");
    memoryGame = new MemoryGame();

  }
  if(this.pairsClicked === 12) {

    $(".front").removeClass("visible");
    $(".back").removeClass("hide");
    $("#pairs_clicked").text("0");
    $("#pairs_guessed").text("0");
    alert("You Lose");
    memoryGame = new MemoryGame();

  }
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame._shuffleCards(memoryGame.cards);
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back ' + sanitizedName + '"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       +  sanitizedName +  '">';
    html += '</div>';
    html += '<div class="front '+ sanitizedName +'" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       +  sanitizedName  +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.back').on('click', function(){
    $(this).addClass("hide" );
    $(this).next().addClass("visible");
    memoryGame.selectCard($(this).prop('id'));

  });
});
