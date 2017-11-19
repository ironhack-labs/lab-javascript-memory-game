// //******************************************************************
// // Game Logic
// //******************************************************************


var MemoryGame = function() {
  this.cards = [{
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
    {
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
  ];

  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
  this.shuffleCards();
};

MemoryGame.prototype.shuffleCards = function() {
  let counter = this.cards.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = this.cards[counter];
    this.cards[counter] = this.cards[index];
    this.cards[index] = temp;
  }
  return this.cards;
}

MemoryGame.prototype.selectCard = function(card) {

  card.removeClass("back").addClass("front");
  card.siblings().removeClass("front").addClass("back");

  if (this.selectedCards.length === 0) {
    this.selectedCards.push(card)
  } else {
    var previousCard = this.selectedCards[0]
    this.pairsClicked++;
    $("#pairs_clicked").text(this.pairsClicked)
    if (previousCard.attr("name") === card.attr("name")) {
      this.selectedCards.splice(0, this.selectedCards.length)
      this.correctPairs++
        $("#pairs_guessed").text(this.correctPairs)
    } else {
      this.selectedCards.splice(0, this.selectedCards.length)
      $(".card").children().addClass("blocked")
      setTimeout(function() {
        card.removeClass("front").addClass("back");
        card.siblings().removeClass("back").addClass("front");
        previousCard.removeClass("front").addClass("back");
        previousCard.siblings().removeClass("back").addClass("front");
        $(".card").children().removeClass("blocked")
      }, 1000)
    }
  }
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';


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

  $('.back').on('click', function() {
    memoryGame.selectCard($(this));

  });

  fartscroll(50);
});
