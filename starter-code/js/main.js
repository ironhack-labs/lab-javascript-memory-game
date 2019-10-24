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
memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function(event) {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Create a modal content
  let modal = document.getElementById("modal");
  let modalImage = document.createElement("img");
  modalImage.src = "https://media2.giphy.com/media/upIgwkDSvpAWY/giphy.gif";
  modalImage.classList.add("modal_image");
  modal.children[0].prepend(modalImage);

  // define cards
  let allCards = document.querySelectorAll(".card");

  // Bind the click event of each element to a function
  allCards.forEach(card => {
    card.onclick = function() {
      const pairsClickedBox = document.getElementById("pairs_clicked");
      const pairsGuessedBox = document.getElementById("pairs_guessed");

      if (memoryGame.pickedCards.length < 2) {
        card.classList.add("turned");
        memoryGame.pickedCards.push(card);
      }

      if (memoryGame.pickedCards.length === 2) {
        let card1, card2;
        card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");

        let checked = memoryGame.checkIfPair(card1, card2);
        // Update `pairs_clicked` tag
        pairsClickedBox.innerText = memoryGame.pairsClicked;

        // Check if clicked cards are pair
        if (checked) {
          // Update `pairs_guessed` tag
          pairsGuessedBox.innerText = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];

          let finished = memoryGame.isFinished();

          if (finished) {
            modal.style.display = "flex";
            memoryGame.pickedCards = [];

            setTimeout(() => {
              for (let card of allCards) {
                card.classList.remove("turned");
              }
            }, 2000);
          }
        } else {
          setTimeout(() => {
            for (let card of memoryGame.pickedCards) {
              card.classList.remove("turned");
            }
            memoryGame.pickedCards = [];
          }, 1000);
        }
      }
      console.log("Card clicked: ", card);
    };
  });
});

const closeModal = button => {
  button.parentNode.style.display = "none";
};
