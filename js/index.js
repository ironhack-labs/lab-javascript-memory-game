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

  memoryGame.shuffleCards();
  
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  document.querySelector('#memory-board').innerHTML = html;

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('turned')

      if (memoryGame.pickedCards.length == 2) {
        memoryGame.pickedCards.forEach(card => card.classList.toggle('turned'))
        memoryGame.resetPickedCards();
      }
      
      if (memoryGame.pickedCards.length < 2)
      memoryGame.AddPickedCards(card)
      
      if (memoryGame.pickedCards.length == 2) {
        const pickedCard1 = memoryGame.pickedCards[0];
        const pickedCard2 = memoryGame.pickedCards[1];  
        
        if (memoryGame.checkIfPair(pickedCard1.getAttribute('data-card-name'), pickedCard2.getAttribute('data-card-name'))){
          document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed
          memoryGame.resetPickedCards();
          
        }
        else{
          document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
          document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed               
        }
        if (memoryGame.isFinished()) {
          window.alert('Congratulations! ')
          console.log('Finished')
        }      
      }
    });
  });
});
