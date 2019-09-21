const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards()

document.addEventListener("DOMContentLoaded", function (event) {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(backCard => {
    backCard.onclick = function () {
      const parentCard = backCard.parentNode
      const frontCard = parentCard.querySelector(".front")

      // Se intercambian las clases
      backCard.classList.toggle("back")
      frontCard.classList.toggle("back")
      backCard.classList.toggle("front")
      frontCard.classList.toggle("front")

      // Se pushea el objeto
      const cardToPush = {
        back: backCard,
        front: frontCard,
        characterName: parentCard.getAttribute("data-card-name")
      }
      memoryGame.pickedCards.push(cardToPush)

      if (memoryGame.pickedCards.length === 2) {
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].characterName, memoryGame.pickedCards[1].characterName)) {
          // Se intercambian las clases
          memoryGame.pickedCards[0].back.classList.toggle("back")
          memoryGame.pickedCards[0].front.classList.toggle("back")
          memoryGame.pickedCards[0].back.classList.toggle("front")
          memoryGame.pickedCards[0].front.classList.toggle("front")
          memoryGame.pickedCards[1].back.classList.toggle("back")
          memoryGame.pickedCards[1].front.classList.toggle("back")
          memoryGame.pickedCards[1].back.classList.toggle("front")
          memoryGame.pickedCards[1].front.classList.toggle("front")
        }
        memoryGame.pickedCards = [] // Reset

      } else {
        memoryGame.pairsClicked += 1
      }

      // Se actualizan los clicks
      const pairGuessed = document.getElementById("pairs_guessed")
      const pairClicked = document.getElementById("pairs_clicked")
      pairGuessed.innerText = memoryGame.pairsGuessed
      pairClicked.innerText = memoryGame.pairsClicked

      if (memoryGame.isFinished()) {
        alert('Well done!')
      }

    };
  });
});


