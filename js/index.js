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

window.addEventListener('load', () => {
  memoryGame.shuffleCards();
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  }); //getAtributte -> data-card-name

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      const pairsClicked = document.getElementById('pairs-clicked');
      const pairsGuessed = document.getElementById('pairs-guessed');
      // console.log(pairsClicked);
      // console.log(pairsGuessed);

      console.log(`Card clicked: ${card}`); 
      if (memoryGame.pickedCards.length < 2){
        card.classList.add('turned');
        memoryGame.pickedCards.push(card);
      }
      
      if (memoryGame.pickedCards.length === 2){
        const pickedFirst = memoryGame.pickedCards[0];
        const first = pickedFirst.getAttribute('data-card-name');
        const pickedAfter = memoryGame.pickedCards[1];
        const second = pickedAfter.getAttribute('data-card-name');

        const right = memoryGame.checkIfPair(first, second);
        if (right){          
          memoryGame.pickedCards = [];          
        } else {
          setTimeout(() => {
            pickedFirst.classList.remove('turned');
            pickedAfter.classList.remove('turned');
            memoryGame.pickedCards = [];
          }, 1000);
        }
      }      
      pairsClicked.innerHTML = memoryGame.pairsClicked;
      pairsGuessed.innerHTML = memoryGame.pairsGuessed;
    });
  });
});
