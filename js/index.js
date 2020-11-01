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

window.addEventListener('load', (event)=> {

  memoryGame.shuffleCards();

  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  document.querySelector('#memory-board').innerHTML = html;

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      card.classList.toggle('turned');
      
      memoryGame.pickedCards.push(card);

      if(memoryGame.pickedCards.length === 2) {

        if(memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {
          document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;
          memoryGame.pickedCards.forEach((card)=> {
            card.classList.add = 'blocked';
          });
        } else {
          memoryGame.pickedCards.forEach((card)=> {
            setTimeout(()=> {
              card.classList.toggle('turned');
            }, 900);
          });
        }
        document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
        memoryGame.pickedCards.length = 0;        
      }

      if(memoryGame.isFinished()) {
        document.body.innerHTML = '<h1>YOU WON!!!<h1>';
      }
    });
  });
});
