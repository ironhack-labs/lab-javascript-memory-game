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
    this.selectedCards = [ ];
    this.pairsClicked = 0;
    this.correctPairs = 0;
    this.firstCard = {};
    this.secondCard = {};
    this.turnOver = true;
};
//Win
MemoryGame.prototype.finished = function() {
    if (this.correctPairs === 12){
      this.turnCardUp(this.secondCard); //tampoco funciona
      alert("El juego ha acabado. Has levantado " + this.pairsClicked +" pares de cartas");
      window.location.reload();
  }
};

MemoryGame.prototype.turnCardUp = function(card){
  $(card).hide();
  $(card).next().toggleClass("back");
};
MemoryGame.prototype.turnCardDown = function(card){
  $(card).show();
  $(card).next().toggleClass("back");
};
//Selecting a card
MemoryGame.prototype.selectCard = function(e){
  if (this.selectedCards.length === 1) {
    this.secondCard = e.currentTarget;
    memoryGame.turnCardUp(this.secondCard);
    this.pairsClicked+=1;
       $("#pairs_clicked").html(this.pairsClicked);
    this.selectedCards.push(this.secondCard);
    this.selectedCards = [];
    if (this.firstCard.outerHTML == this.secondCard.outerHTML)  {
      this.correctPairs+=1;
      $("#pairs_guessed").html(this.correctPairs);
    } else {
      this.turnOver = false;
      var that = this;
      var timeOut = setTimeout(function(){
        memoryGame.turnCardDown(that.firstCard);
        memoryGame.turnCardDown(that.secondCard);
        that.turnOver = true;
      },500);
    }
  } else if (this.selectedCards.length === 0) {
    this.firstCard = e.currentTarget;
    this.selectedCards.push(this.firstCard);
    memoryGame.turnCardUp(this.firstCard);
  }
  memoryGame.finished();
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
var memoryGame;

$(document).ready(function(){


memoryGame = new MemoryGame();
var html = '';

  //Shuffle cards
  MemoryGame.prototype.shuffleCards = function() {
    var i = this.cards.length, j, temp;
    while(--i > 0) {
      j = (Math.floor(Math.random() * (i+1)));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
     return this.cards;
  };
  memoryGame.shuffleCards();

  MemoryGame.prototype.printCards = function (){
    this.cards.forEach(function(pic, index) {
      var sanitizedName = pic.name.split(' ').join('_');

     html += '<div class= "card" name="card_' + sanitizedName + '">';
      html += '<div class="back"';
      html += '    name="' + pic.name + '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background-image:url(img/' + pic.img +')"';
      html += '    name="'       + pic.name +  '">';
      html += '</div>';
      html += '</div>';
    });
  };
memoryGame.printCards();

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  //Listener to clicks from user
  $('.back').on('click', function(e){
    if (memoryGame.turnOver === true) {memoryGame.selectCard(e);}
  });

    //no funciona

    //Listener Button
  // $(".newGameBtn").on("click", function(){
  //   memoryGame.shuffleCards();
  //   memoryGame.printCards();
  //   console.log("hola");
  // });


  // //Counters
  // MemoryGame.prototype.updateCounters = function () {
  //   $("#pairs_clicked").html(this.pairsClicked);
  //   $("#pairs_guessed").html(this.correctPairs);
  // };
  // memoryGame.updateCounters();
});
