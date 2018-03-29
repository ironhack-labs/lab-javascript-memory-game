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
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });
  
  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  
  // Bind the click event of each element to a function
  $(".back").on("click", function() {
    var newImage = $(this)
      .next()
      .attr("style");
    $(this).attr("style", newImage);
    card = $(this);
    memoryGame.pickedCards.push(card);
    if (memoryGame.pickedCards.length == 2) {
      var firstCard = memoryGame.pickedCards[0];
      var secondCard = memoryGame.pickedCards[1];
      
      if (firstCard.attr("name") === secondCard.attr("name")) {
        console.log(typeof(memoryGame.pairsGuessed))
        memoryGame.pairsGuessed = memoryGame.pairsGuessed+=1;
        console.log(memoryGame.pairsGuessed)
        memoryGame.pairsClicked++;
        $("#pairs_clicked").html(memoryGame.pairsClicked);
        $("#pairs_guessed").html(memoryGame.pairsGuessed);
        memoryGame.pickedCards = [];
        firstCard.addClass("acertado");
        secondCard.addClass("acertado");
      } else {
        memoryGame.pairsClicked++;
        $("#pairs_clicked").html(memoryGame.pairsClicked);
        memoryGame.pickedCards = [];
        setTimeout(function() {
          $(".back:not(.acertado)").attr("style", "background: #456783");
        }, 1000);
      }
    }
    if (memoryGame.pairsGuessed = memoryGame.cards / 2) {
      alert("you won")
    }
  
  });
});
