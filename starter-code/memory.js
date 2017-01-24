//******************************************************************
// Game Logic
//******************************************************************

function MemoryGame() {
  this.Cards = [{name: "aquaman", url: "img/aquaman.jpg"}, {name: "batman", url:"img/batman.jpg"},
  {name: "captain-america", url: "img/captain-america.jpg"}, {name: "fantastic-four", url: "img/fantastic-four.jpg"},
  {name: "flash", url: "img/flash.jpg"}, {name: "green-arrow", url: "img/green-arrow.jpg"},
  {name: "green-lantern", url: "img/green-lantern.jpg"}, {name: "ironman", url: "img/ironman.jpg"} ,
  {name: "spiderman", url: "img/spiderman.jpg"}, {name: "superman", url: "img/superman.jpg"},
  {name: "the-avengers", url: "img/the-avengers.jpg"}, {name: "thor", url: "img/thor.jpg"}];
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
  this.shuffleCards = array;
};

MemoryGame.prototype.makeGrid = function() {
  var html = "";
  this.shuffleCards.forEach(function(card,index){
    html += "<img class='card' id=" + card.name + " src='" + card.url + "'>";
  })
  console.log(html);
  $(".back").remove();
  $("#memory-board > div").prepend(html);

}

var game = new MemoryGame();


MemoryGame.prototype.selectCard = function(card){
};

MemoryGame.prototype.finished = function() {
};

//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){
  $('.back').on('click', function(){
    game.shuffleCard(this.Cards);
    game.makeGrid();
  });
});
