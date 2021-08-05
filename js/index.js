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
      // TODO: write some code here
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);
      let card1 = memoryGame.pickedCards[0];
      let card2 = memoryGame.pickedCards[1];      

      if (card2) {
        if (memoryGame.checkIfPair(card1, card2)) {
          card1.classList.add('blocked');
          card2.classList.add('blocked');          
        }        
        else {
          setTimeout(() => {
            card1.classList.remove('turned');
            card2.classList.remove('turned');
          }, 1000);          
        }
        memoryGame.pickedCards = [];
      }
      document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
      document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;
      
      if (memoryGame.checkIfFinished()) {
        const theEnd = document.createElement('h2');
        theEnd.innerHTML = 'Congratulations! You win!';
        theEnd.style.color = "#ffffff";
        const parent = document.querySelector('h1');
        parent.appendChild(theEnd).insert;
      }
    });
  });    
});
