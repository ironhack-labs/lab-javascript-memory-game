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

  //CALLING THE FUNCTIONS
  this._shuffleCards();
  this.selectCard();
  // this.flipCard();


};


//SHUFFLE THE CARDS WORKING
MemoryGame.prototype._shuffleCards = function() {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = this.cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
  return this.cards;
};




// MemoryGame.prototype.flipCard = function() {
//function WORKS in console and in ready
//   $("div[style*='background']").on('click', function() {
//     $(this).children().toggleClass('back front');
//     memoryGame.selectedCards.push(this);
//     console.log(memoryGame.selectedCards);
//   });
// };

//CHECK IF FLIPPED CARDS IS EQUAL
MemoryGame.prototype.selectCard = function(card) {

};

// if (selectedCards[0].children.name !== selectedCards[1].children.name) {
//   console.log('fuck');
// }



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
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;


  //FLIP CARD WHEN USER CLICKS IT
  //move function out of ready and use callback?
  $('.card').on('click', function() {
    $(this).children().toggleClass('back front active');
    memoryGame.selectedCards.push(this.innerHTML);
    if (memoryGame.selectedCards.length === 2) {
      if (memoryGame.selectedCards[0] !== memoryGame.selectedCards[1]) {
        setTimeout(function() {
          $('.active').toggleClass('back front active');
          console.log(memoryGame.pairsClicked);
        }, 1000);
      } else {
        memoryGame.correctPairs += 1;
        $('.active').toggleClass('active');
        $('#pairs_guessed').innerHTML = memoryGame.correctPairs;
      }
      memoryGame.selectedCards = [];
      memoryGame.pairsClicked += 1;
      $('span#pairs_clicked').innerHTML = memoryGame.pairsClicked;


    }
  });



});
