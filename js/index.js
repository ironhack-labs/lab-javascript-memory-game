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
  memoryGame.shuffleCards(); //randomizes the position of the cards each time the games starts
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
      card.classList.toggle('turned'); // every time the player clicks a card it is turned
      let $picked = memoryGame.pickedCards; // stores the pickedCards array into a reference variable

      //storing the querySelectors in refernce variables:
      let $clicked = document.querySelector('#pairs-clicked');
      let $guessed = document.querySelector('#pairs-guessed');

      if ($picked.length === 2){
        $picked = []; // resets the array if it is full wen we click a 3rd time
      }
      
      $picked.push(card); // adds the clicked card to the pickedCards array (in memory.js)

      
      if ($picked.length === 2 && !memoryGame.checkIfPair()) { // if we have an array of 2 diferent cards:

        $clicked.innerHTML = memoryGame.pairsClicked; // should return the number of pairs clicked to the respective field on the screen
        for (const card in $picked) {
          card.classList.toogle('turned'); // toogling eache card the class turned inside the array should remove it
        }


      } else if ($picked.length === 2 && memoryGame.checkIfPair()) { // if we have an array of 2 equal cards:

        for (const card in $picked) {
          card.classList.add('block'); // adds the block class to each card of the matched pair of cards
        }

        $clicked.innerHTML = memoryGame.pairsClicked; // should return the number of pairs clicked to the respective field on the screen

        $guessed.innerHTML = memoryGame.pairsGuessed; // if the pairs match should return them to the respective field on the screen

      }
      
      if (memoryGame.isFinished()) {
        alert('Congratulations! You won!'); // displays an alert box in the screen wyth the respective messege
      }
    });
  });
});