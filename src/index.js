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
  let html = '';
  memoryGame.shuffleCards()
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-name="${pic.name}">
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
      let toTurn = true
      if (toTurn) {
        card.classList.add("turned");
      }
      else {
        card.classList.remove("turned");
      }
      console.log(`Card clicked: ${card}`);


      memoryGame.pickedCards.push(card)

      
      
      setTimeout(() => {
        if (memoryGame.pickedCards.length === 2) {
          console.log(memoryGame.pickedCards)
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.name, memoryGame.pickedCards[1].dataset.name)) {
            console.log("son iguales!!!")
            document.querySelector('#pairs-guessed').innerHTML++
            document.querySelector('#pairs-clicked').innerHTML++
            memoryGame.pickedCards.splice(0)
          }
          else {
            memoryGame.pickedCards[0].classList.remove('turned')
            memoryGame.pickedCards[1].classList.remove('turned')
            document.querySelector('#pairs-clicked').innerHTML++
            memoryGame.pickedCards.splice(0)
          }
        }
      }, 950);
    })
  });
});
