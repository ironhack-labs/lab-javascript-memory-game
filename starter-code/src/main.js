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

  // Bind the click event of each element to a function
  $(".back").on("click", function() {
    if (!$(this).hasClass("okCard")) {
      $(this).removeClass("back");
      $(this).addClass("front");
      $(this).next().removeClass("front");
      $(this).next().addClass("back");
      memoryGame.pickedCards.push($(this).attr("name"));
    }
    
    if(memoryGame.pickedCards.length == 2){
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        $(".front[name='"+memoryGame.pickedCards[0]+"']").next().addClass("okCard");
        memoryGame.pickedCards = [];
        
      } else  {
        var timeoutId = setTimeout(function() {
          $(".front[name='"+memoryGame.pickedCards[0]+"']").addClass("back");
          $(".front[name='"+memoryGame.pickedCards[0]+"']").next().addClass("front");
          $(".front[name='"+memoryGame.pickedCards[0]+"']").next().removeClass("back");
          $(".front[name='"+memoryGame.pickedCards[0]+"']").removeClass("front");
          $(".front[name='"+memoryGame.pickedCards[1]+"']").addClass("back");
          $(".front[name='"+memoryGame.pickedCards[1]+"']").next().addClass("front");
          $(".front[name='"+memoryGame.pickedCards[1]+"']").next().removeClass("back");
          $(".front[name='"+memoryGame.pickedCards[1]+"']").removeClass("front");
            memoryGame.pickedCards = [];
        }, 500);
      }
    }
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    $("#pairs_guessed").text(memoryGame.pairsGuessed);
    memoryGame.finished();
  });
});
