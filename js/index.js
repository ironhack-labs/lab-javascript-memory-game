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
  let clicks = document.querySelector('#pairs-clicked')
  const win = document.querySelector('.win')
  let guessed = document.querySelector('#pairs-guessed')
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      console.log("clicked")
      if (memoryGame.pickedCards.length < 2) {
        card.setAttribute("class", "card turned")
        memoryGame.pickedCards.push(card)
        let card0 = memoryGame.pickedCards[0]
        let card1 = memoryGame.pickedCards[1]
        if (memoryGame.pickedCards.length === 2) {
          if (memoryGame.checkIfPair(card0.dataset.cardName, card1.dataset.cardName)) {
            console.log("THERE IS A MATCH")
            card0.setAttribute("class", "card turned blocked")
            card1.setAttribute("class", "card turned blocked")
            memoryGame.pickedCards = []
            if (memoryGame.checkIfFinished()) {
              win.style.display = "block"
            }
          }
          else {
            console.log("THEY ARE NOT EQUAL")
            let timeoutID = setTimeout(() => {
              memoryGame.pickedCards[0].setAttribute("class", "card")
              memoryGame.pickedCards[1].setAttribute("class", "card")
              memoryGame.pickedCards = []
            }, 700)
          }
          clicks.innerHTML = memoryGame.pairsClicked
          guessed.innerHTML = memoryGame.pairsGuessed
        }
      }
      else {
        console.log("THERE ARE ALREADY TWO CARDS OPENED")
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
