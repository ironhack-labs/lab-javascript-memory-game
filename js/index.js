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
  memoryGame.shuffleCards();
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
            
      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card);
      
      
      if (memoryGame.pickedCards.length === 2) {
        memoryGame.pairsClicked ++;
        document.querySelector('#pairs-clicked').textContent = memoryGame.pairsClicked;
      
        
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)) {
          console.log("pareja")
          //memoryGame.pickedCards[0,1].classList.toggle('blocked');
          console.log(memoryGame.pickedCards);
          memoryGame.pairsGuessed + 0.5;
          document.querySelector('#pairs-guessed').textContent = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];
          if (memoryGame.checkIfFinished()) {
            alert("Kudos, you spotted all the pairs!")
          }
        } 
        
        
        else {
          console.log("no pareja");
          memoryGame.pickedCards.forEach((card) => {
            setTimeout (function () {card.classList.toggle('turned', false);}, 800);
          });
          memoryGame.pickedCards = [];
          console.log(memoryGame.pickedCards);
        }
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});
