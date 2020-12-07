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
  document.querySelectorAll('.card').forEach((card, idx) => {
    card.addEventListener('click', () => {
      // Por cada click 
      
      // TODO: write some code here
      card.classList.toggle('turned'); // Al clickar la carta ésta se gira
      cardName = card.getAttribute('data-card-name'); // Por cada click obtienes el nombre de la carta
      memoryGame.pickedCards.push(cardName); // La clicada se añade al array pickedCards
      console.log(memoryGame.pickedCards); // TEST      

      if (memoryGame.pickedCards.length > 1) { // Solo se comprueban los arrays con más de dos elementos para evitar el false en la primera iteración
        let card1 = memoryGame.pickedCards[memoryGame.pickedCards.length-1]; // La posición inicial es card1
        let card2 = memoryGame.pickedCards[memoryGame.pickedCards.length-2]; // La siguiente posición es car2
        console.log(card1, card2) // TEST
        console.log(memoryGame.pickedCards) // TEST
        
        if (!memoryGame.checkIfPair(card1, card2)) {
          setTimeout (() => {
            card.classList.toggle('turned')
            memoryGame.pickedCards.pop();
          }, 1000);
        } else {
            memoryGame.pickedCards.splice(0,2);
        }
        console.log(memoryGame.checkIfPair(card1, card2));
      }
      
    });
  });
});