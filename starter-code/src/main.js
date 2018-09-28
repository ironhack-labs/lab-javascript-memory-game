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
    $("#memory_board").html(html);
  });

  // Add all the div's to the HTML

  $("#memory_board").html(html);

  var a = [];

  // Bind the click event of each element to a function
  $(".back").click(function() {
    memoryGame.pickedCards.push(
      $(this)
        .parent()
        .attr("data-card-name")
    );
    a.push($(this));
    var valor = $(this);

    valor.toggleClass("back");
    valor.toggleClass("front");
    valor.siblings().toggleClass("back");
    valor.siblings().toggleClass("front");

    console.log(a);
    console.log(memoryGame.pickedCards);
    if (memoryGame.pickedCards.length === 2) {
      if (
        memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        ) === true
      ) {
        this.pairsClicked += 1;
        this.pairsGuessed += 1;
        memoryGame.pickedCards = [];
        a = [];
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
        memoryGame.isFinished();
      } else {
        b = a;
        memoryGame.pickedCards = [];
        a = [];
        setTimeout(function() {
          b[0].toggleClass("back");
          b[0].toggleClass("front");
          b[0].siblings().toggleClass("back");
          b[0].siblings().toggleClass("front");
          b[1].toggleClass("back");
          b[1].toggleClass("front");
          b[1].siblings().toggleClass("back");
          b[1].siblings().toggleClass("front");
          this.pairsClicked += 1;
          this.pairsClicked += 1;
          $("#pairs_clicked").text(memoryGame.pairsClicked);
        }, 400);
      }
    }

    // TODO: write some code here
  });
});
