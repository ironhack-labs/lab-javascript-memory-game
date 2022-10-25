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

window.addEventListener('load', (event) => {
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });


  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {

    card.addEventListener('click', () => {

      if (memoryGame.pickedCards.length < 2) {
        card.classList.add("turned", "front")

        memoryGame.pickedCards.push(card)
      }
      if (memoryGame.pickedCards.length == 2) {
        if (!(memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), memoryGame.pickedCards[1].getAttribute("data-card-name")))) {


          setTimeout(() => {
            memoryGame.pickedCards.forEach((pickedCard) => {
              pickedCard.classList.remove("turned")
              pickedCard.classList.replace("front", "back")
            })
            memoryGame.pickedCards = []

          }, 1000)

        } else {
          memoryGame.pickedCards.forEach((pickedCard) => {

            pickedCard.classList.replace("back", "front")
          })
          memoryGame.checkIfFinished()
          memoryGame.pickedCards = []
        }
      }

      updateScore()
      updateGuessed()
      haveIWon()
    });

  });

  function updateScore() {
    document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked
  }

  function updateGuessed() {
    document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed
  }
  function haveIWon() {
    if (!memoryGame.checkIfFinished) alert("YOU HAVE WON THE DOM BATTLE. CONGRATULAATIOOOOOOOOOOOOOOOOOOOOONS")
  }

});