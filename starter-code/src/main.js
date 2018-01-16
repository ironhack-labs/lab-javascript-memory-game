var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);
  var html = "";
  memoryGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += "</div>";
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  
  function updateClickedPairs(num){
    $("#pairs_clicked").html(num);
  }
  function updateGuessedPairs(num){
    $("#pairs_guessed").html(num);
  }
  
  function displayClickedCard(card) {
    card.className += " active";
    card.style.background =
      "url(img/" + card.getAttribute("name") + ") no-repeat";
  }
  function hideClickedCard(card) {
    card.removeClass("active");
    card.attr("style", "");
  }
 
  function manageCard(card, game){
    if (game.pickedCards.length == 0) {
        game.pickedCards.push(card);
      } else if (game.pickedCards.length == 1) {
        game.pickedCards.push(card);
        updateClickedPairs(game.pairsClicked);
        var correctPair = game.checkIfPair(game.pickedCards[0].attr("style"), game.pickedCards[1].attr("style"));
        if (correctPair) {
          game.pickedCards = [];
          updateGuessedPairs(game.pairsGuessed);
        } 
      } else if (game.pickedCards.length == 2){
          hideClickedCard(game.pickedCards[0]);
          hideClickedCard(game.pickedCards[1]);
          game.pickedCards = [];
          game.pickedCards.push(card);
    }
  };
  // Bind the click event of each element to a function
  $(".back").on("click", function() {
    displayClickedCard(this);
    manageCard($(this) , memoryGame);
  });
});
