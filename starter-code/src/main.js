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

var memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();


function newGame() {
  location.reload();
  // memoryGame = new MemoryGame(cards);
  // memoryGame.shuffleCards();
  // $(".card").toggle();
  // $("#new-game").toggle();
}

document.addEventListener("DOMContentLoaded", function(event) {
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

  function newBoard() {
    $(".card").toggle();
    $("#new-game").toggle();
  }

  // Add all the div's to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a functio
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function() {
      let done = "";
      let otherSide = $(this).next();
      otherSide.addClass("back").removeClass("front");
      $(this).addClass("front").removeClass("back");
      // TODO: write some code here
      console.log("Card clicked");
      let parent = $(this).parent();
      let theCardName = parent.attr("data-card-name");
      memoryGame.pickedCards.push(theCardName);
      memoryGame.pickedCards.push(parent);
      if (memoryGame.pickedCards.length === 4) {
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[2];
        let paired = memoryGame.checkIfPair(card1, card2);
        $('div').addClass('blah')
        setTimeout(function() {
          if (!paired) {
            let child1 = $(memoryGame.pickedCards[1]).find(".front");
            let sibling1 = child1.next();
            child1.removeClass("front").addClass("back");
            sibling1.removeClass("back").addClass("front");
            let child2 = $(memoryGame.pickedCards[3]).find(".front");
            let sibling2 = child2.next();
            child2.removeClass("front").addClass("back");
            sibling2.removeClass("back").addClass("front");
          }
          memoryGame.pickedCards = [];
          $('div').removeClass('blah')
        }, 1000);
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
        done = memoryGame.isFinished();
        if (done) {
          newBoard();
        }
      }
    };
  });
});
