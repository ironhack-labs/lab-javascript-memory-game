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
  memoryGame.cards = memoryGame.shuffleCard(cards);
  var html = "";
  memoryGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;

  var twoCards = [];

  // Bind the click event of each element to a function
  $(".back").on("click", function() {
    var frontCard = $(this).siblings();
      $(this).attr("class", "front");
      frontCard.attr("class", "back");
      twoCards.push($(this));
      if(twoCards.length == 2){
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        var id1 = twoCards[0].parent().attr("id");
        var id2 = twoCards[1].parent().attr("id");
        if(memoryGame.checkIfPair(id1, id2)){
          $("#pairs_guessed").text(memoryGame.pairsGuessed);
          twoCards = [];
        } else {
          setTimeout(function(){
          twoCards[0].removeClass("front").addClass("back");
          twoCards[0].next().addClass("front").removeClass("back");
          twoCards[1].removeClass("front").addClass("back");
          twoCards[1].next().addClass("front").removeClass("back");
          twoCards = [];
        }, 800)
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        }
      }
  });
});
