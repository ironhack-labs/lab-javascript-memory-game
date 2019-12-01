/*jshint esversion: 6 */

const cards = [
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

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      // // TODO: write some code here

      showCards();
      //const timeoutId = setTimeout(function() {
      if (memoryGame.pickedCards.length === 2) {
        checkIfPairs();
        upDateScore();
      }
      //}, 2000);
      checkIfIsFinish();//con timeout no funciona

      function showCards() {
        console.log("Card clicked: ", card);
        memoryGame.pickedCards.push(card);
        card.classList.add("turned");
        console.log("arr of clicked " + memoryGame.pickedCards);
      }
      function checkIfPairs() {
        var card1 = memoryGame.pickedCards[0].dataset.cardName;
        var card2 = memoryGame.pickedCards[1].dataset.cardName;
        if (memoryGame.checkIfPair(card1, card2) === false) {
          console.log("PAIRS FALSE");
          removeClass("turned");
        } else {
          console.log("PAIRS TRUE");
          addClass("blocked");
        }
        memoryGame.pickedCards = [];
        console.log("array cleaned");
        shuffleCards();
        console.log("array shuffled");
      }
      function removeClass(c) {
        memoryGame.pickedCards[0].classList.remove(c);
        memoryGame.pickedCards[1].classList.remove(c);
        console.log("class" + c + "removed");
      }
      function addClass(c) {
        memoryGame.pickedCards[0].classList.add(c);
        memoryGame.pickedCards[1].classList.add(c);
        console.log("class" + c + "added");
      }
      function upDateScore() {
        document.getElementById("pairs_guessed").innerHTML =
          memoryGame.pairsGuessed;
        console.log("TOTAL guessed: " + memoryGame.pairsGuessed);
        document.getElementById("pairs_clicked").innerHTML =
          memoryGame.pairsClicked;
        console.log("TOTAL clicked: " + memoryGame.pairsClicked);
      }
      function checkIfIsFinish() {
        if (memoryGame.isFinished()) {
          document.getElementById("memory_board").innerHTML =
            "Congrasts! You did it! ";
        }
      }
      function shuffleCards() {
        console.log("suflle IT!");
        const nodelist = document.querySelectorAll(".card");
        console.log(document.querySelectorAll(".card"));
        console.log(nodelist);
        const divyArray = Array.prototype.slice.call(nodelist);
        console.log(divyArray);
        let newCardArr = memoryGame.shuffleCards(divyArray);
        //document.getElementById("memory_board").innerHTML = newCardArr;
        //no funciona
      }
    });
  });
});
