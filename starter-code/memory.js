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

MemoryGame.prototype.shuffleCards = function() {
  var result = _.shuffle(this.cards);
  this.cards = result;
};

//MemoryGame.prototype.selectCard = function() {
  if (this.selectedCards.length === 2) {
      console.log(this.selectedCard[0]);
      console.log(this.selectedCard[0]);
      this.pairsClicked++;
      console.log(this.pairsClicked);
      console.log(memoryGame.selectedCards);
      if (this.compareCards() === true) {
        this.cleanSelectedCards();
        this.correctPairs++;
        } else {
        console.log("Fallaste");

//    }

//  }
//};


/*MemoryGame.prototype.selectCard = function() {
    if (this.selectedCards.length === 2){
      console.log(this.selectedCards[0]);
      console.log(this.selectedCards[1]);
      if(this.selectedCards[0] === this.selectedCards[1]){
        console.log("Acierto");
        this.selectedCards = [];
        this.correctPairs +=1;
        count =1;
        if(this.correctPairs === 12) {
          this.finished();
        }
        this.pairsClicked = 0;
        console.log(this.correctPairs);
      } else {
        console.log("Error");
        this.selectedCards = [];
        this.pairsClicked = 0;
        count = 1;
      }
    }

};*/

MemoryGame.prototype.compareCards = function() {
  if (this.selectedCards[0] == this.selectedCards[1]) {
    console.log('Iguales');
    this.correctPairs += 1;
  } else {
    console.log('Distintas');
  }
};

MemoryGame.prototype.cleanSelectedCards = function() {
  this.selectedCards = [];
};

MemoryGame.prototype.finished = function (){
  console.log("Has ganado");
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
    memoryGame = new MemoryGame();
    var html = '';
    memoryGame.shuffleCards();
    memoryGame.cards.forEach(function(pic, index) {
      var sanitizedName = pic.name.split(' ').join('_');

      html += '<div class= "card" id="card_' + sanitizedName + '">';
      html += '<div class="back"';
      html += '    name="img/' + pic.name + '"';
      html += '    id="' + pic.img + '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background: url(img/' + pic.img + '") no-repeat"';
      html += '    id="' + pic.img + '">';
      html += '</div>';
      html += '</div>';
    });

    // Add all the divs to the HTML
    document.getElementById('memory_board').innerHTML = html;

    //$('.card').click(function() {
    //  var cardName = $(this).attr('id');
    //  memoryGame.selectedCards.push(cardName);
    //});

    $(".card").click(function(){
       var clickCard = String($(this).attr("id"));
       $(this).find(":first-child").removeClass("back");
       $(this).find(":first-child").next().addClass("back");
       memoryGame.pairsClicked +=1;
       memoryGame.selectedCards.push(clickCard);
       memoryGame.selectCard();
     });






      memoryGame.selectCard();
      console.log(memoryGame.selectedCards);
});
