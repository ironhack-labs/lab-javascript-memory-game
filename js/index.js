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
memoryGame.shuffleCards();
console.log(memoryGame.cards)

window.addEventListener('load', (event) => {

  const pairsClickedEl = document.querySelector('#pairs-clicked');
  const pairGuessedEl = document.querySelector('#pairs-guessed');

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
  const gameboard = document.querySelector('#memory-board');
  gameboard.innerHTML = html;

  function setScore(){
    pairsClickedEl.innerHTML =  memoryGame.pairsClicked;
    pairGuessedEl.innerHTML =  memoryGame.pairsGuessed;

    if(memoryGame.checkIfFinished()){
      gameboard.innerHTML = `<h1>You Won!</h1><a href="/" class="btn">START AGAIN</a>`
    }

  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if(memoryGame.pickedCards.length >= 2) {
        return false;
      }else{
        card.classList.toggle('turned');
        memoryGame.pickedCards.push(card);
      }
      
      if(memoryGame.pickedCards.length == 2) {

        setTimeout(() =>{
          let result = memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName,memoryGame.pickedCards[1].dataset.cardName);
          console.log(result,memoryGame.pairsGuessed,memoryGame.pairsClicked);
          if(!result){
            memoryGame.pickedCards.map(card => card.classList.toggle('turned'));
          }
          memoryGame.pickedCards = [];
          setScore();

        },1000)
        
      }
      //console.log(`Card clicked: ${card.querySelector('.back')}`);
      //card.querySelector('.back').style.visibility = 'hidden';
    });
  });
});
