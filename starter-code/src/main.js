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
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);

  let pairsCards = [];
  // Bind the click event of each element to a function
  $(".back").click(function() {
    // TODO: write some code here
    $(this).toggleClass("back front");
    $(this)
      .next()
      .toggleClass("back front");

    pairsCards.push(this);

    if (pairsCards.length == 2) {
      if (
        memoryGame.checkIfPair(
          $(pairsCards[0]).attr("name"),
          $(pairsCards[1]).attr("name")
        )
      ) {
        $("#pairs_guessed").html(memoryGame.pairsGuessed);
        $("#pairs_clicked").html(memoryGame.pairsClicked);
        pairsCards = [];
      } else {
        setTimeout(function() {
          $(pairsCards[0]).toggleClass("back front");
          $(pairsCards[0])
            .next()
            .toggleClass("back front");
          $(pairsCards[1]).toggleClass("back front");
          $(pairsCards[1])
            .next()
            .toggleClass("back front");
          $("#pairs_clicked").html(memoryGame.pairsClicked);
          pairsCards = [];
        }, 250);
      }
    }

    if (memoryGame.isFinished()) {
      console.log("Win!!!");
    }
  });
});
