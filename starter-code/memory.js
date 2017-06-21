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
//memoryGame.shuffleCards();
MemoryGame.prototype.shuffleCards = function() {
 var currentIndex = this.cards.length, temporaryValue, randomIndex;
 while(0 !==currentIndex){
   randomIndex = Math.floor(Math.random()*currentIndex);
   currentIndex -=1;
   temporaryValue = this.cards[currentIndex];
   this.cards[currentIndex] = this.cards[randomIndex];
   this.cards[randomIndex] = temporaryValue;
 }
  return this.cards;
};
// SELECT A CARD
MemoryGame.prototype.selectCard = function(card) {
  this.selectedCards.push(card);
  if(this.selectedCards.length === 2) {
    this.pairsClicked++;
  } else {
  this.selectedCards.push(card);
} if (this.selectedCards[0] === this.selectedCards[1]){
  this.selectedCards = [];
  this.correctedPairs++;
  //FLIP CARD
} else {
  return "WRONG GUESS";
}
};
// WIN FUNCTION
MemoryGame.prototype.finished = function () {
  if(this.correctedPairs === this.cards/2) {
    return ("YOU WIN!");
}
};
//Psuedo-Code
// Shuffle cards
//

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;
$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame.shuffleCards();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  $('div.front').hide(); // This hides all front displays at the beginning of game
  $('.back').on('click',function(){
    var index = $('.back').index(this);
    console.log(index);
    $(this).hide();
    $('div.front').eq(index).show();
    // $('.front').css("display","block");
    // $(this).toggleClass('front');

  });

});

//Toggle back class
//enable front class

// 'style="background: url(\'img/' + pic.img + '\') no-repeat"'

//
// <div class="back" name="img/aquaman" id="aquaman.jpg"></div>
// <div class="front" style="background: url('img/aquaman.jpg') no-repeat;" id="aquaman.jpg"></div>
//$('div.back').hide(); this will hide all backs and show front
//$('div.car:nth-child(index starting from 1)') returns card
//$('div.card').get(0) returns specific card to flip
