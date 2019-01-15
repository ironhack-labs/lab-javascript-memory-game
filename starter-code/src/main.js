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
  // initialise board
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // add all the div's to the HTML
  $("#memory_board").html(html);

  // bind the click event of each element to a function
  $(".back").click(function() {
    var card = $(this);
    if (memoryGame.pickedCards.length < 2) {
      card.toggleClass("back");
      card.toggleClass("front");
      card.siblings().toggleClass("front");
      card.siblings().toggleClass("back");
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        var nameFirstCard = memoryGame.pickedCards[0].attr("name").slice(0, -4);
        var nameSecondCard = memoryGame.pickedCards[1].attr("name").slice(0, -4);
        var pair = memoryGame.checkIfPair(nameFirstCard, nameSecondCard);
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        if (pair === true) {
          memoryGame.pickedCards = [];
          $("#pairs_guessed").text(memoryGame.pairsGuessed)
          if (memoryGame.isFinished()) {
            console.log("finished");
            $("body div:first").html(`<h1 class="highlighted">Congratulations, you won!</h1>`)
          }
        } else {
          setTimeout(function() {
            memoryGame.pickedCards[0].toggleClass("back");
            memoryGame.pickedCards[0].toggleClass("front");
            memoryGame.pickedCards[0].siblings().toggleClass("front");
            memoryGame.pickedCards[0].siblings().toggleClass("back");
            memoryGame.pickedCards[1].toggleClass("back");
            memoryGame.pickedCards[1].toggleClass("front");
            memoryGame.pickedCards[1].siblings().toggleClass("front");
            memoryGame.pickedCards[1].siblings().toggleClass("back");
            memoryGame.pickedCards = [];
          }, 400);
        }
      }
    }
  });
});