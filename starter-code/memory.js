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


MemoryGame.prototype._shuffleCards = function() {
    var counter = this.cards.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = this.cards[counter];
        this.cards[counter] = this.cards[index];
        this.cards[index] = temp;
    }

    return this.cards;
};

MemoryGame.prototype.selectCard = function() {
  //If user has selected a card last turn. (There is already a card object in array)
  if (this.selectedCards.length > 1) {
    console.log(this.selectedCards);
    //Add 1 to the amount of pairs clicked by user and display on page.
    this.pairsClicked += 1;
    $("#pairs_clicked").text(this.pairsClicked);

    var cardBool = this.selectedCards[0].id === this.selectedCards[1].id;
    console.log(cardBool);
    if (cardBool) {
      //Reset the array for next turn.
      this.selectedCards = [];
      //Add 1 to the amount of correct guesses and display on page.
      this.correctPairs += 1;
      $("#pairs_guessed").text(this.correctPairs);
    }
    else {
      //$("#memory_board").append("<p>WRONG!</p>");

    }
  }
  else {

  }
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  console.log(JSON.stringify(memoryGame._shuffleCards()));

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
  flip();

});

function flip() {
  $("div .back").on("click", function() {
    $(this).addClass("hide-card");
    $(this).next().addClass("front-view");
    memoryGame.selectedCards.push(this);
    memoryGame.selectCard()
    var count = 3;
    var intervalId = setInterval(function() {
      count--;
      if (count < 0) {
        flipBack();
        clearInterval(intervalId);
      }
    }, 500);
  });
}

function flipBack() {
  $("div .back").removeClass("hide-card");
  $("div .front-view").addClass("hide-card");
}

function matchCard() {
  if (true) {

  }
}
