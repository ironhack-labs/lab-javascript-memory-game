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

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      // console.log(card)
      
      memoryGame.pickedCards.push(card)
      // console.log(memoryGame.pickedCards)
      
      if (memoryGame.pickedCards.length < 3) {
        //console.log("este if se inicia")
        card.classList.add("turned");
        memoryGame.pairsClicked += 1
        document.querySelector("#pairs-clicked").textContent = memoryGame.pairsClicked
      }

        //console.log(memoryGame.pairsClicked)
      if (memoryGame.pickedCards.length === 2) {
        const cardA = memoryGame.pickedCards[0]
        const cardB = memoryGame.pickedCards[1]
        const checkPairs = memoryGame.checkIfPair(cardA, cardB)
        console.log(checkPairs)
        
        // if (checkPairs === true) {
        //   memoryGame.pairsGuessed += 1
        //   document.querySelector("#pairs-guessed").textContent = memoryGame.pairsGuessed
        // }
      }

    
     

      console.log(`Card clicked: ${card}`);
    });
  });
});



