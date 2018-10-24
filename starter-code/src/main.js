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

var pickedCards = [];
var pairsClicked = 0;
var pairsGuessed = 0;
var card = '';

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
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);

  // Bind the click event of each element to a function
  $(".back").click(function() {
     $(this).toggleClass("back front");
     $(this).next().toggleClass("front back");

    card = $(this);

    pickedCards.push(card);

       if (pickedCards.length === 2) {
           if (memoryGame.checkIfPair(pickedCards[0].attr('name'),pickedCards[1].attr('name'))) {
               pickedCards = [];
         } else {
              let cardsPicked = pickedCards;
              setTimeout(function() {
                cardsPicked[0].toggleClass("back front");
                cardsPicked[0].next().toggleClass("front back");
                cardsPicked[1].toggleClass("back front");
                cardsPicked[1].next().toggleClass("front back");
              }, 1000);
              pickedCards = [];
         }
       }

      $('#pairs_clicked').html(pairsClicked);
      $('#pairs_guessed').html(pairsGuessed);

      if (memoryGame.isFinished()) {
         alert("You won!");
      }
  });
});
