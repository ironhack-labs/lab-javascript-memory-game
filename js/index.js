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

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  document.querySelector(`#pairs-clicked`).innerHTML = memoryGame.pairsClicked;
  document.querySelector(`#pairs-guessed`).innerHTML = memoryGame.pairsGuessed;


  memoryGame.shuffleCards();

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle("turned")
      memoryGame.pickedCards.push(card.getAttribute("data-card-name"))
      if (memoryGame.pickedCards.length == 2) {
        let isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
        if (!isPair) {
          const interval = setInterval(() => {
            console.log('entra')
            card.classList.toggle("turned")
            document.querySelectorAll(`[data-card-name='${memoryGame.pickedCards[0]}']`).forEach(selectedCard => {
              selectedCard.classList.toggle("turned", false)
            })
            clearInterval(interval)
            memoryGame.pickedCards = []
          }, 800)
        } else {
          memoryGame.pickedCards = []
          if (memoryGame.isFinished()) {
            const victoryInterval = setInterval(() => {
              alert("You won!!!")
              clearInterval(victoryInterval)
            }, 1000)

          }
        }

        document.querySelector(`#pairs-clicked`).innerHTML = memoryGame.pairsClicked;
        document.querySelector(`#pairs-guessed`).innerHTML = memoryGame.pairsGuessed;


      }

      //console.log(`Card clicked: ${card}`);
    });

  });
});
