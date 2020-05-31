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
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      card.classList.add('turned')
      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.pickedCards.length === 2) {
        	      const firstPick = memoryGame.pickedCards[0].getAttribute('data-card-name')
                const secondPick = memoryGame.pickedCards[1].getAttribute('data-card-name')
                const pairsGuessed = document.getElementById('pairs-guessed')
                const pairsClicked = document.getElementById('pairs-clicked')
        
                const guessed = memoryGame.checkIfPair(firstPick, secondPick)
        
                pairsClicked.innerText = memoryGame.pairsClicked
        
                if (!guessed) {
                  setTimeout(() => {
                    memoryGame.pickedCards.forEach(incorrectCard => incorrectCard.classList.remove("turned"))
                    memoryGame.pickedCards = []
                  }, 1500)
                  return
                } else {
                  pairsGuessed.innerText = memoryGame.pairsGuessed
                  memoryGame.pickedCards = []
                }
        
                const finished = memoryGame.isFinished()
                if (finished) {
<<<<<<< HEAD
                  alert('You won!!!!')
=======
                  console.log('Congratulations, you win!')
>>>>>>> 6390e1762d4e9c34e166ac078737c206ec54d5b5
                }
        
              }
            } 
    });
  });
})
})
