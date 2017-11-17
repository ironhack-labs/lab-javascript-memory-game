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
    if (memoryGame.selectedCards.length <= 2) {
      changeClasses($(this),'back','front');
      objCard = {};
      objCard.name = $(this).parent().attr("name");
      objCard.index = $(this).attr("index");
      memoryGame.selectedCards.push(objCard);
    }
    if (memoryGame.selectedCards.length === 2) {
      memoryGame.pairsClicked++;
      $("#pairs_clicked").text(memoryGame.pairsClicked);
      if (memoryGame.selectedCards[0].name === memoryGame.selectedCards[1].name) {
        memoryGame.correctPairs++;
        $("#pairs_guessed").text(memoryGame.correctPairs);
        memoryGame.selectedCards = [];
      } else {
        setTimeout(function() {
          var firstCard = $("div[index='" + memoryGame.selectedCards[0].index.toString() + "']");
          changeClasses(firstCard,'front','back');
          var secondCard = $("div[index='" + memoryGame.selectedCards[1].index.toString() + "']");
          changeClasses(secondCard,'front','back');
          memoryGame.selectedCards = [];
        }, 1000);
      }
    }
  });
};

function changeClasses(element,firstClass,secondClass){
  element.removeClass(firstClass);
  element.addClass(secondClass);
  element.next().removeClass(secondClass);
  element.next().addClass(firstClass);
}

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

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '" index="' + index + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ')" no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  memoryGame.selectCard(".back");

});
