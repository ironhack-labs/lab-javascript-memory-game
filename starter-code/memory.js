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

  memoryGame.cards.forEach(function(pic, index) {
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

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  //Selecting a card
  MemoryGame.prototype.selectCard = function(e){
    if (this.selectedCards.length === 1) {
      var actualCard = e.currentTarget;
      //console.log(clickedCard.outerHTML);
      $(actualCard).hide();
      $(actualCard).next().toggleClass("back");
      this.selectedCards.push(clickedCard);
      this.pairsClicked+=1;
      $("#pairs_clicked").html(this.pairsClicked);
      console.log(this.selectedCards);

      if (this.selectedCards[0] == this.selectedCards[1]){
          console.log("las cratas son guales");
          console.log(this.selectedCards[0]);
          console.log(this.selectedCards[1]);
        }//   alert("acierto");
        //   this.correctPairs +=1;
        //   console.log("correct pairs: "+this.correctPairs);
        // } else {
        //   alert("fallo");
        //   $(clickedCard).show();
        //   $(clickedCard).next().toggleClass("back");
        // }
      this.selectedCards = [];
    } else if (this.selectedCards.length === 0) {
      var oldCard = e.currentTarget;
      this.selectedCards.push(oldCard);
    }
  };


  //Win
  MemoryGame.prototype.finished = function() {
  };

  $('.back').on('click', function(e){
    memoryGame.selectCard(e);
  });

});
