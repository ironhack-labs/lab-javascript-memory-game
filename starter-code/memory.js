//******************************************************************
// Game Logic
//******************************************************************

function MemoryGame() {
  this.Cards = [{name: "aquaman", url: "img/aquaman.jpg"},
                {name: "batman", url:"img/batman.jpg"},
                {name: "captain-america", url: "img/captain-america.jpg"},
                {name: "fantastic-four", url: "img/fantastic-four.jpg"},
                {name: "flash", url: "img/flash.jpg"},
                {name: "green-arrow", url: "img/green-arrow.jpg"},
                {name: "green-lantern", url: "img/green-lantern.jpg"},
                {name: "ironman", url: "img/ironman.jpg"} ,
                {name: "spiderman", url: "img/spiderman.jpg"},
                {name: "superman", url: "img/superman.jpg"},
                {name: "the-avengers", url: "img/the-avengers.jpg"},
                {name: "thor", url: "img/thor.jpg"}];
}

MemoryGame.prototype.shuffleCard = function() {
    var i = 0
      , j = 0
      , temp = null
      , array = [];

    array = $.merge(this.Cards,this.Cards);


    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  this.shuffledCards = array;
};

MemoryGame.prototype.makeGrid = function() {
  var html = "<div>";
  this.shuffledCards.forEach(function(card,index){
    html += "<img class='card' id=" + card.name + " src='" + card.url + "'>";
    var divNum = ".back:nth-child(" + (index + 1) + ")";
    $(divNum).attr("id",card.name);
  })
  html += "</div>";
  $("#memory-board").prepend(html);

}

var game = new MemoryGame();

//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){

var gameStarted = 0, matchedCards=[], secondCard = false, numberOfMatches = 0;

  $('.back').on('click', function(){
    if (gameStarted === 0) {
      game.shuffleCard(this.Cards);
      game.makeGrid();
    }

    gameStarted = 1;

    $(this).css("opacity","0");

    if (secondCard === true){
      matchedCards.push($(this));
      secondCard = false;


        setTimeout(function(){
          if (matchedCards[0][0].id !== matchedCards[1][0].id) {
            matchedCards[0].css("opacity", "1");
            matchedCards[1].css("opacity", "1");
          }
          else {
            numberOfMatches += 1;
          }

          matchedCards = [];

          if (numberOfMatches === 12) {
            alert("You won da game m8");
          }
        },1000);
    }
    else {
      matchedCards.push($(this));
      secondCard = true;
    }

  });
});
