const cards = [
  { name: 'aquaman', img: 'aquaman.jpg', chosen: 0, value: true },
  { name: 'batman', img: 'batman.jpg', chosen: 0, value: true },
  { name: 'captain america', img: 'captain-america.jpg', chosen: 0, value: true },
  { name: 'fantastic four', img: 'fantastic-four.jpg', chosen: 0, value: true },
  { name: 'flash', img: 'flash.jpg', chosen: 0, value: true },
  { name: 'green arrow', img: 'green-arrow.jpg', chosen: 0, value: true },
  { name: 'green lantern', img: 'green-lantern.jpg', chosen: 0, value: true },
  { name: 'ironman', img: 'ironman.jpg', chosen: 0, value: true },
  { name: 'spiderman', img: 'spiderman.jpg', chosen: 0, value: true },
  { name: 'superman', img: 'superman.jpg', chosen: 0, value: true },
  { name: 'the avengers', img: 'the-avengers.jpg', chosen: 0, value: true },
  { name: 'thor', img: 'thor.jpg', chosen: 0, value: true },
  { name: 'aquaman', img: 'aquaman.jpg', chosen: 0, value: true },
  { name: 'batman', img: 'batman.jpg', chosen: 0, value: true },
  { name: 'captain america', img: 'captain-america.jpg', chosen: 0, value: true },
  { name: 'fantastic four', img: 'fantastic-four.jpg', chosen: 0, value: true },
  { name: 'flash', img: 'flash.jpg', chosen: 0, value: true },
  { name: 'green arrow', img: 'green-arrow.jpg', chosen: 0, value: true },
  { name: 'green lantern', img: 'green-lantern.jpg', chosen: 0, value: true },
  { name: 'ironman', img: 'ironman.jpg', chosen: 0, value: true },
  { name: 'spiderman', img: 'spiderman.jpg', chosen: 0, value: true },
  { name: 'superman', img: 'superman.jpg', chosen: 0, value: true },
  { name: 'the avengers', img: 'the-avengers.jpg', chosen: 0, value: true },
  { name: 'thor', img: 'thor.jpg', chosen: 0, value: true }
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
  let numOfCards = 0;
  let card1 = cards[0]
  let card2 = cards[1]
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);

      if (numOfCards < 2) {
        card.classList.add('turned')
        card.chosen = 1;
        numOfCards++
      }
      
      
      /*
      if (numOfCards === 2) {
        card1.value = false
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].chosen === 1 && !card1.value) {
            card1 = cards[i]
            card1.value = true
          }
          if (cards[i].chosen === 1 && card1.value) {
            card2 = cards[i]
          }
        }
        console.log(cards.length)
        MemoryGame.checkIfPair(card1, card2)
      }*/
      
      if (numOfCards === 2) {
        for (let i = 0; i < cards.length; i++){
          if (cards[i].chosen === 1) {
            card.classList.remove('turned')
            cards[i].chosen = 0
          }
        }
      } 
    });
  });
});
