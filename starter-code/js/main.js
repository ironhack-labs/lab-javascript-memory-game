const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

const game = () => new MemoryGame(cards);
let memoryGame = game();
memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      if (!card.classList.contains('turned')) {

        card.classList.add('turned');
        memoryGame.pickedCards.push( card );
        
        if (memoryGame.pickedCards.length == 2) {
          memoryGame.pairsClicked ++;
          document.getElementById('pairs_clicked').innerText = memoryGame.pairsClicked;
          
          if (memoryGame.pickedCards[0].dataset.cardName === memoryGame.pickedCards[1].dataset.cardName) {
            memoryGame.pairsGuessed ++;
            document.getElementById('pairs_guessed').innerText = memoryGame.pairsGuessed;
            memoryGame.pickedCards = [];
            if (memoryGame.pairsGuessed === memoryGame.cards.length / 2) location.reload();
          } 
          else {
            setTimeout( function() {
              memoryGame.pickedCards.map( el => {
                el.classList.remove('turned');
                memoryGame.pickedCards = [];
              })              
            }, 500)
          }
        }
      }
      console.log('Card clicked: ', card);
    };
  });
});


