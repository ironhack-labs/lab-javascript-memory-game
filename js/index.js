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

console.log(memoryGame)
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  
  let countClicks = 0

  function flipCard (event) {

    const board = event.target
    const select = board.parentNode

    if(select.className === 'card') {
    select.className = 'card turned'
    memoryGame.pickedCards.push(select.dataset.cardName)
    console.log(memoryGame.pickedCards)
    }
      
      if(memoryGame.pickedCards.length === 2) {
    
        let card1 = memoryGame.pickedCards[0]
        let card2 = memoryGame.pickedCards[1]
        console.log(card1)
        console.log(card2)
        if (memoryGame.checkIfPair(card1, card2)) {
            document.querySelector('card turned div').className = 'blocked'
          }
          else {
            document.querySelector('card turned div').className = 'card'
          }
     }  
  }
  
  // for (i = 0; i < memoryGame.pickedCards.length; i++) {
  //   checkIfPair(memoryGame.pickedCards[i])
  //     if(true) {

  //     } else {
  //       turnCardsBack()
  //     }
  // }

 function turnCardBack() {
    select.className = 'card'
  }

  function printPairsClicked() {
    countClicks ++
    
  }

  function printPairsGuessed() {
    if(card1.name === card2.name) {
      this.pairsGuessed ++
      let newPairsGuessedValue = this.pairsGuessed +1
      document.querySelector('#pairs-guessed').value = newPairsGuessedValue
    }
  }

document.addEventListener('click', flipCard)

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
        flipCard
        
      
      
      // console.log(`Card clicked: ${card}`);
    });
  });
});
