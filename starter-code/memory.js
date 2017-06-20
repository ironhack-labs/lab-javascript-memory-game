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
    this.shuffleCards();
    this.isCorrect = false;
};
MemoryGame.prototype.shuffleCards = function() {
  this.cards = _.shuffle(this.cards);

};

MemoryGame.prototype.selectCard = function(card){
  this.selectedCards.push(card);
  //console.log(this.selectedCards);
  if (this.selectedCards.length == 2) {
    this.pairsClicked++;

      if (this.selectedCards[0] === this.selectedCards[1]) {
        this.correctPairs++;
        this.selectedCards = [];
        this.isCorrect = true;

        console.log("Parejas correctas: " + this.correctPairs);
            console.log("Parejas elegidas: "+ this.pairsClicked);
            return true;
      }else{
        console.log('no coinciden, reiniciamos turno');
        this.selectedCards = [];
        return false;
      }
  }else {
    console.log("elige otra carta");
  }
};
MemoryGame.prototype.finish = function(){

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

    html += '<div class= "card" id="' + sanitizedName + '">';
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

   function flip(){
     if (memoryGame.isCorrect){
       console.log('acertado');
     }else {
        $(".card").find(':first-child').addClass('back');
        $(".card").find(':first-child').next().removeClass('back');
      }
  }
  $(".card").click(function(){
     var card = $(this).attr('id');
     console.log(card);

  if(memoryGame.selectCard(card);) 
   $(this).find(':first-child').removeClass('back');
    $(this).find(':first-child').next().addClass('back');



  });

});
