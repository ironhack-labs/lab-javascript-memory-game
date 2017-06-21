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
};

MemoryGame.prototype._shuffleCards = function() {
  for (var i = 0; i < this.cards.length; i++) {
    var randomIndex = i + Math.floor(Math.random() * (this.cards.length - i));
    var bufferCard = $.extend({}, this.cards[i]);
    this.cards[i] = this.cards[randomIndex];
    this.cards[randomIndex] = bufferCard;
  }
};

MemoryGame.prototype.selectCard = function(card) {
  var numOfCards = this.selectedCards.length;
  var oldCard;
  if (numOfCards === 0) {
    this.selectedCards.push(card);
    return {
      op: -1, //Operation -1: Check card
      card: [card]
    };
  } else if (card === this.selectedCards[0]) {
    console.log("Unselect card");
    this.selectedCards = [];
    return {
      op: 0, //Operation 0: Uncheck card
      card: [card]
    };
    //Remove number from ther class name to get the card type
  } else if (this.selectedCards[0].replace(/[0-9]+/, '') === card.replace(/[0-9]+/, '')) {
    oldCard = this.selectedCards[0];
    this.selectedCards = [];
    this.pairsClicked++;
    this.correctPairs++;
    return {
      op: 1, //Operation 1: MATCH! block cards
      card: [oldCard, card],
      pairsClicked: this.pairsClicked,
      correctPairs: this.correctPairs
    };
  } else {
    oldCard = this.selectedCards[0];
    this.selectedCards = [];
    this.pairsClicked++;
    return {
      op: 2, //Operation 2: Fail hide cars
      card: [oldCard, card],
      pairsClicked: this.pairsClicked
    };
  }
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  resetGame();

  // //******************************************************************
  // // Helpers
  // //******************************************************************

  /**
   * resetGame - Resets the MemoryGame and updates the board
   *
   */
  function resetGame() {
    $("#win-panel").addClass("hidden");
    memoryGame = new MemoryGame();
    memoryGame._shuffleCards();
    console.table(memoryGame.cards);
    var html = '';

    memoryGame.cards.forEach(function(pic, index) {
      var sanitizedName = pic.name.split(' ').join('_');

      html += '<div class= "card" id="card_' + sanitizedName + index + '">';
      html += '<div class="back visible"';
      html += '    name="img/' + pic.name + '"';
      html += '    id="' + pic.img + '">';
      html += '</div>';
      html += '<div class="front hidden" ';
      html += 'style="background: url(img/' + pic.img + '") no-repeat"';
      html += '    id="' + pic.img + '">';
      html += '</div>';
      html += '</div>';
    });

    // Add all the divs to the HTML
    document.getElementById('memory_board').innerHTML = html;
    $("#pairs_clicked").html("0");
    $("#pairs_guessed").html("0");

    $(".card").click(function() {
      var card = $(this);
      var result = memoryGame.selectCard(card.attr('id'));

      switch (result.op) {
        case -1:
          console.log("Select card");
          showCard($("#" + result.card[0]));
          break;
        case 0:
          console.log("Unselect card");
          hideCard($("#" + result.card[0]));
          break;
        case 1:
          console.log("Pairs");
          showCard($("#" + result.card[1]));
          //Detach listenerts
          $("#" + result.card[0]).off("click");
          $("#" + result.card[1]).off("click");
          //Update scoreboards
          $("#pairs_clicked").html(result.pairsClicked);
          $("#pairs_guessed").html(result.correctPairs);

          //Win condition
          if (result.correctPairs == 12) {
            $("#win-panel").removeClass("hidden");

            //Reset game
            setTimeout(function() {
              resetGame();

            }, 3000);
          }
          break;
        case 2:
          console.log("Fail");
          showCard($("#" + result.card[1]));
          $("#pairs_clicked").html(result.pairsClicked);

          setTimeout(function() {
            hideCard($("#" + result.card[0]));
            hideCard($("#" + result.card[1]));
          }, 500);
          break;
      }
    });
  }

  showCard = function(card) {
    card.find(".back").addClass("hidden");
    card.find(".back").removeClass("visible");
    card.find(".front").addClass("visible");
    card.find(".front").removeClass("hidden");
  };

  hideCard = function(card) {
    card.find(".back").addClass("visible");
    card.find(".back").removeClass("hidden");
    card.find(".front").addClass("hidden");
    card.find(".front").removeClass("visible");
  };
});
