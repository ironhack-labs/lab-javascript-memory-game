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
    this.pairsClicked = 0;
    this.correctPairs = 0;
};
MemoryGame.prototype.selectCard = function(cardImgValue){
  var cardsMustRestart = false;

  if (this.selectedCards.length === 0){ // first card selection
    this.selectedCards.push(cardImgValue);

  }
  else if (this.selectedCards[0] === cardImgValue){ // second card selection correct case
    this.correctPairs += 1; // increment correctPairs
    this.pairsClicked += 1;   // increment pairsClicked
    this.selectedCards = []; // empty selectedCards
  }
  else { //second card selection wrong case
    this.pairsClicked += 1;   // increment pairsClicked
    this.selectedCards = [];   // empty selectedCards
    cardsMustRestart = true;
  }
  if (this.pairsClicked === 30){ //play 30 rounds max
    this.finished();
  }
  return cardsMustRestart;
};

MemoryGame.prototype.finished = function() {
  alert("Your final score is: " + this.correctPairs + " out of " + this.pairsClicked);
  location.reload(); //reload on click
};



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $(".card .front").hide();

  // my actual code starts here, M

  function updateScore(){
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    $("#pairs_guessed").text(memoryGame.correctPairs);
  }
  var lastCard;
  $('.back').on('click', function(){
    var currentImgValue = $(this).attr("id");

    var cardsMustRestart = memoryGame.selectCard(currentImgValue);

    if (memoryGame.selectedCards.length !== 0){
      lastCard = $(this);
    }
    else{
      updateScore();
    }

    var backside = $(this);
    var frontside = $(this).siblings();
    backside.hide();
    backside.addClass("blocked");
    frontside.show();

    function restartCards(){
      frontside.hide();
      backside.removeClass("blocked");
      backside.show();

      lastCard.siblings().hide();
      lastCard.removeClass("blocked");
      lastCard.show();
    }

    if (cardsMustRestart){
      setTimeout(restartCards, 2000);
    }

});




});
