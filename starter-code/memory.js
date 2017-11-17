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
MemoryGame.prototype._shuffleCards = function(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

MemoryGame.prototype.selectCard = function(card) {
  $(card).click(function(event) {
    // this.selectedCards = [];
    // var valor=$(this).parent().attr("name");
    // alert(memoryGame.selectedCards);
    if (memoryGame.selectedCards.length <= 2) {
      $(this).removeClass('back');
      $(this).addClass('front');
      $(this).next().removeClass('front');
      $(this).next().addClass('back');
      memoryGame.selectedCards.push($(this).attr("index"));
      // debugger;
    }
    if (memoryGame.selectedCards.length === 2) {
      memoryGame.pairsClicked++;
      if (memoryGame.selectedCards[0] === memoryGame.selectedCards[1]) {
        memoryGame.correctPairs++;
        alert("Match");
      } else {
        setTimeout(function() {
          debugger;
          var firstCard = $("div[index='" + memoryGame.selectedCards[0] + "']");
          // debugger
          //TIENES QUE HACERDER AL PRIMER HIJO

          firstCard.addClass('front');
          firstCard.removeClass('back');
          firstCard.next().addClass('back');
          firstCard.next().removeClass('front');


          memoryGame.selectedCards = [];
        }, 1000);
      }
    }

  });

};
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame._shuffleCards(memoryGame.cards);
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');
    // alert(index);
    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back" index="' + index;
    html += '"    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ')" no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  memoryGame.selectCard("div[index]");

});
