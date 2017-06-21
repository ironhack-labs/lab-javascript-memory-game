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

MemoryGame.prototype.selectCard = function() {{
    this.pairsClicked++;
    console.log(this.pairsClicked);
    if (this.selectedCards[1] === this.selectedCards[0]) {
        this.correctPairs++;
        this.selectCards=[];
        return "Right";

      } else {
        this.selectedCards=[];
        return "Wrong";

      }

    }



};

MemoryGame.prototype._shuffleCards = function() {
  for (var i = this.cards.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = this.cards[i];
          this.cards[i] = this.cards[j];
          this.cards[j] = temp;
      }
      return this.cards;

};

MemoryGame.prototype.finished = function() {
  if (this.pairsClicked === (this.cards.length/2)) {
    if((this.pairsClicked === this.correctPairs) && this.pairsClicked !== 0) {
      return "Win!";
    } else {
    return "Loose!";
    }
  }
};
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame._shuffleCards();
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


  var myPairs=[];

  document.getElementById('memory_board').innerHTML = html;

  $(".card").on("click", function (event) {
    memoryGame.selectedCards.push($(this).attr("id"));

    myCard=$(this).find(":first");
    myFront=$(this).find(":last");
    myCard.toggleClass("back");
    myFront.toggleClass("show");

    myPairs.push({back:myCard, front:myFront});

    if (myPairs.length ===2) {
    result=memoryGame.selectCard();
    $("#pairs_clicked").text(memoryGame.pairsClicked);
      if (result==="Wrong") {
        myPairs.forEach(function(card) {
          card.back.toggleClass("back");
          card.front.toggleClass("show");
          memoryGame.selectedCards=[];
        });
         myPairs = [];
         memoryGame.selectedCards=[];
       } else {
         $("#pairs_guessed").text(memoryGame.correctPairs);
         myPairs=[];
         memoryGame.selectedCards=[];
       }
     }


     if (memoryGame.finished()==="Win!") {
       console.log("win");
         $(".win").show();
         $("#memory_board").hide();
       } else if (memoryGame.finished()==="Loose!") {
         console.log("loose");
         $(".loose").show();
         $("#memory_board").hide();
       }

   });


});
