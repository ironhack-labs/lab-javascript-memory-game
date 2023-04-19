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
memoryGame.shuffleCards();



window.addEventListener('load', (event) => {
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
  let allCards = document.querySelectorAll('.card');

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(document.getElementById("pairs-clicked"))
      if (memoryGame.pickedCards.length < 2) {
        card.classList.add('turned')
        memoryGame.pickedCards.push(card)
      }
      if (memoryGame.pickedCards.length == 2) {
        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
        let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")
        console.log(card1)
        console.log(card2)
        let checkIt = memoryGame.checkIfPair(card1, card2)
        document.getElementById("pairs-clicked").innerHTML = memoryGame.pairsClicked

        if (checkIt) {
          document.getElementById("pairs-guessed").innerHTML = memoryGame.pairsGuessed
          memoryGame.pickedCards = []
          let finished = memoryGame.checkIfFinished();
          console.log(finished)
          if (finished) {
            memoryGame.pickedCards = [];
            setTimeout(() => {
              allCards.forEach(a => {
                console.log(a)
                a.classList.remove("turned")
                memoryGame.shuffleCards()
              })

            }, 3000)
          }
        }

      } else {
        setTimeout(() => {
          memoryGame.pickedCards.forEach(a => {
            a.classList.remove("turned")
          })
          memoryGame.pickedCards = []
        }, 2000)
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
