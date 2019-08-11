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

function turnCardsBack(pickedCards) {
  let parent1 = pickedCards[0], parent2 = pickedCards[1];
  
  parent1.firstElementChild.classList.add("back");
  parent1.firstElementChild.classList.remove("front");
  parent1.lastElementChild.classList.add("front");
  parent1.lastElementChild.classList.remove("back");
  parent2.firstElementChild.classList.add("back");
  parent2.firstElementChild.classList.remove("front");
  parent2.lastElementChild.classList.add("front");
  parent2.lastElementChild.classList.remove("back");

  pickedCards = [];
}

function blockUnclickedCards() {
  document.querySelectorAll(".card").forEach(function(card) {
    card.firstElementChild.classList.add("blocked");
    card.lastElementChild.classList.add("blocked");
  });
}

function unblockNotPairs() {
  document.querySelectorAll(".card").forEach(function(card) {
    card.firstElementChild.classList.remove("blocked");
    card.lastElementChild.classList.remove("blocked");
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
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
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function() {
      let papa = this.parentElement;
      papa.firstElementChild.classList.add("front");
      papa.firstElementChild.classList.remove("back");
      papa.lastElementChild.classList.add("back");
      papa.lastElementChild.classList.remove("front");
      console.log("Card clicked");
      memoryGame.pairsClicked += 1;
      console.log(memoryGame.pairsGuessed);
      if ( memoryGame.pairsClicked % 2 !== 0 ) {
        memoryGame.pickedCards[0] = papa;
      }

      if ( memoryGame.pairsClicked % 2 === 0 ) {
        memoryGame.pickedCards[1] = papa;
        console.log(memoryGame.pickedCards[0])
        console.log(memoryGame.pickedCards[1])
        let isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
        blockUnclickedCards();
        console.log(isPair);
        if ( isPair ) {
          console.log("encontrado we");
          unblockNotPairs();
          console.log(memoryGame.pairsGuessed);
        }
        else {
         setTimeout(function() {turnCardsBack(memoryGame.pickedCards)},3000);
         setTimeout(function() {unblockNotPairs()},3000);
        }
      }
    };
  });
});
