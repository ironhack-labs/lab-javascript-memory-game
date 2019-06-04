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
console.log(memoryGame);

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

  document.querySelector("#memory_board").innerHTML = html;

  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function(evt) {
      evt.target.parentElement.children[0].className = "front";
      evt.target.parentElement.children[1].className = "back";
      console.log("Card clicked");
    };
  });

  document.querySelectorAll(".front").forEach(function(card) {
    card.onclick = function(evt) {
      evt.target.parentElement.children[0].className = "back";
      evt.target.parentElement.children[1].className = "front";
      console.log("Card clicked");
    };
  });

  // tried things
  /*function limitTwo(, secondCard) {
    if (checkIfPair === false) {
      firstCard.target.parentElement.children[0].className = "front";
      firstCard.target.parentElement.children[1].className = "back";
      secondCard.target.parentElement.children[0].className = "front";
      secondCard.target.parentElement.children[1].className = "back";
    } else {}
  }*/
});
