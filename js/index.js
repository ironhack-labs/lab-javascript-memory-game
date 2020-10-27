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
      //card.classList.add("turned")
      //card.classList.remove("turned")
      
      if (memoryGame.pickedCards.length < 2) {
        card.classList.add("turned")
        memoryGame.pickedCards.push(card)
        console.log(memoryGame.pickedCards)
      } else if (memoryGame.pickedCards.length === 2) {
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML) === false) {
            console.log("no coinciden")
            card.classList.remove("turned")
            memoryGame.pickedCards = []
            
          } else if (memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML) === true){
            console.log("coinciden")
            card.classList.add("blocked")
            memoryGame.pickedCards = []
          }
      } else if (memoryGame.pickedCards.length > 2) {
        console.log("Te has pasao")
        card.classList.remove("turned")
      }
      
      console.log(`Card clicked: ${card}`);
    });
  });
});
