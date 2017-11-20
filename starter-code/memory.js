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
    this.control = 0;
};

//***********************  shuffle  *****************************//
MemoryGame.prototype._shuffleCards = function() {
  var array = this.cards;
  var size = array.length;
  var holder, randomIndex;

  while (size) {
    randomIndex = Math.floor(Math.random() * size--);
    holder = array[size];
    array[size] = array[randomIndex];
    array[randomIndex] = holder;
  }

  this.cards = array;
};
//_______________________________________________________________//

//***********************  score table  *************************//
MemoryGame.prototype.selectCard = function(card) {
  this.control += 1;
  if (this.selectedCards.length < 1) {
    this.selectedCards.push(card);
    match = false;
  } else if (this.selectedCards[0].attr("name") === card.attr("name")) {
    $(".back").addClass("blocked");
    this.correctPairs += 1;
    this.pairsClicked += 1;
    this.selectedCards[0].addClass("match").removeClass("back");
    card.addClass("match").removeClass("back");
    this.selectedCards = [];
  } else {
    $(".back").addClass("blocked");
    this.pairsClicked += 1;
    this.selectedCards = [];
  }
};
//_______________________________________________________________//

//************************  hide card  **************************//
function hideCard() {
  //debugger;
  $(".back").show();
  $(".back").next(".front").hide();
  document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked;
  document.getElementById("pairs_guessed").innerHTML = memoryGame.correctPairs;
  $(".back").removeClass("blocked");
}
//_______________________________________________________________//

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;
var diff;
var bleep = new Audio();
var easySound = new Audio();
var hardSound = new Audio();
var ggSound = new Audio();
var startSound = new Audio();
bleep.src = "audio/click-on.mp3";
easySound.src = "audio/yaaay.mp3";
hardSound.src = "audio/scary.mp3";
ggSound.src = "audio/smoke-weed.mp3";
ggSound.loop = true;
startSound.src = "audio/wonder-woman.mp3";
startSound.loop = true;

$(document).ready(function() {
  startSound.play();
  $("#gg").hide();
  $("#grayBackground").hide();
  $("#playAgain").hide();
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame._shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  $(".front").hide();

  $(".back").click(function() {
    bleep.play();
    $(this).hide();
    $(this).next(".front").show();
    memoryGame.selectCard($(this));
    if(memoryGame.control % 2 === 0) {
      setTimeout(hideCard, diff);
    }
    if(memoryGame.correctPairs === 12) {
      $("#gg").fadeIn(1000);
      $("#playAgain").fadeIn(1000);
      $("#grayBackground").fadeIn(1000);
      ggSound.play();
      $("#playAgain img").click(function() {
        location.reload();
      });
    }
  });

  $("#easy").click(function(){
    $("#difficulty").hide();
    startSound.pause();
    easySound.play();
    diff = 750;
  });

  $("#hard").click(function(){
    $("#difficulty").hide();
    startSound.pause();
    hardSound.play();
    diff = 50;
  });
});
