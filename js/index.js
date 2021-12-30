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

const clickedScore = document.querySelector('#pairs-clicked')
const guessedScore = document.querySelector('#pairs-guessed')

window.addEventListener('load', (event) => {
  memoryGame.shuffleCards()
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
  const cardsElement = document.querySelectorAll('.card')
  cardsElement.forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if (memoryGame.pickedCards.length < 2){
      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card)
      }

      setTimeout(() => {
        if (memoryGame.pickedCards.length >= 2){
        checkCards()
        updateBoard()
      }
      updateScore()
      if (memoryGame.checkIfFinished()) {
        window.alert('You Won')
      }
    }, 2000);
      
    });
  });

  function checkCards() {
    let card1 = memoryGame.pickedCards[0].innerHTML
    let card2 = memoryGame.pickedCards[1].innerHTML   
    return memoryGame.checkIfPair(card1, card2)
  }

  function updateScore(){
    clickedScore.innerHTML = memoryGame.pairsClicked
    guessedScore.innerHTML = memoryGame.pairsGuessed 
  }

  function updateBoard(){
    if (!memoryGame.checkResult){
      for (let i = 0; i < memoryGame.pickedCards.length; i += 1){
        for (let j = 0; j < cardsElement.length; j += 1){
          if (memoryGame.pickedCards[i].innerHTML === cardsElement[j].innerHTML){
            cardsElement[j].classList.remove('turned')
          }
        }
      }
    }
    for (let i = memoryGame.pickedCards.length -1; i >= 0; i -= 1){
      memoryGame.pickedCards.pop()
    }
  }





});
