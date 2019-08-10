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

var isFinished = false;
var memoryGame = new MemoryGame(cards);

function showCard(card) {
  card.classList.toggle("back");
  card.classList.toggle("front");
  card.nextElementSibling.classList.toggle("front");
  card.nextElementSibling.classList.toggle("back");
  card.nextElementSibling.classList.toggle("active");
}

function hideCards() {
  let activeElements = document.querySelectorAll(".active");
  console.log(activeElements);
  for (let i = 0; i < activeElements.length; i++) {
    activeElements[i].classList.toggle("front");
    activeElements[i].classList.toggle("back");
    activeElements[i].classList.toggle("active");
    activeElements[i].previousElementSibling.classList.toggle("front");
    activeElements[i].previousElementSibling.classList.toggle("back");
  }
}

function removeActiveClass() {
  let activeElements = document.querySelectorAll(".active");
  console.log(activeElements);
  for (let i = 0; i < activeElements.length; i++) {
    activeElements[i].classList.toggle("active");
  }
}

function getNameOfCard(card) {
  return card.parentElement.dataset.cardname;
}

function updatePairsBoard() {
  pairsClicked = document.getElementById("pairs_clicked");
  pairsGuessed = document.getElementById("pairs_guessed");
  pairsClicked.innerText = memoryGame.pairsClicked.toString();
  pairsGuessed.innerText = memoryGame.pairsGuessed.toString();
}

memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function(event) {
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-cardname="' + pic.name + '">';
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
      // console.log(this.parentElement.dataset.cardname);
      if (memoryGame.pickedCards.length < 2) {
        showCard(this); // flip the clicked card
        let cardName = getNameOfCard(this); //name of the clicked card
        memoryGame.pickedCards.push(cardName); //add card Name of clicked card to the pickedCards array
        let cardOne = memoryGame.pickedCards[0]; //separe pickedCards array (first element)
        let cardTwo = memoryGame.pickedCards[1]; //separe pickedCards array (second element)
        if (memoryGame.pickedCards.length == 2) {
          // check if at least two cards were selected
          let arePairs = memoryGame.checkIfPair(cardOne, cardTwo); //asign the result of check if selected cards are pairs
          if (!arePairs) {
            // if not pairs
            setTimeout(function() {
              // wait for a second
              hideCards(); //hide cards function
              memoryGame.pickedCards = []; // set the pickedCards array to empty
              updatePairsBoard(); //update the board
            }, 1000);
          } else {
            memoryGame.pickedCards = []; // set the pickedCards array to empty
            removeActiveClass(); //turn-off the active class that was added by showCards function in line 92
            updatePairsBoard(); //update the board
            isFinished = memoryGame.isFinished(); //asign the result of verify if there are pairs to flip yet
            if (isFinished) {
              // check if its finished
              console.log("THE END"); // finished message
            }
          }
        }
      } else {
        // prevent flip extra card, out of a pair
        console.log("Aun no puedes elegir otra vez");
      }
    };
  });
});
