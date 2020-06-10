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
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function() {
      // TODO: write some code here
      card.classList.toggle('turned');

      //const cardName =  card.getAttribute('data-card-name');
      
      memoryGame.pickedCards.push(card);

      if(memoryGame.pickedCards.length === 2){
        const card1Name = memoryGame.pickedCards[0].getAttribute('data-card-name');
        const card2Name = memoryGame.pickedCards[1].getAttribute('data-card-name');
        
        console.log(card1Name, card2Name);

        const isMatch = memoryGame.checkIfPair(card1Name, card2Name);
        
        updateScore();
        
        if(isMatch) {
          console.log('its a match')
          if(memoryGame.isFinished()){
            setTimeout(() => window.alert('YOU WIN'), 500); 
            }
          memoryGame.pickedCards = [];
        } else {
          setTimeout(() => {
            memoryGame.pickedCards.forEach(card => card.classList.remove('turned'));
            memoryGame.pickedCards = [];
          }, 1000);
        }
      }  
    };
  });
});


function updateScore(){
  const pairsClicked = document.getElementById('pairs-clicked');
  const parisGuessed = document.getElementById('pairs-guessed');

  pairsClicked.innerHTML = memoryGame.pairsClicked;
  parisGuessed.innerHTML = memoryGame.pairsGuessed;
}