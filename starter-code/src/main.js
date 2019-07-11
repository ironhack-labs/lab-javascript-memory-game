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
let memoryGame = new MemoryGame(cards);


document.addEventListener("DOMContentLoaded", function(event) {
  let html = '';
  // memoryGame.shuffleCards();
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(function(card) {
    card.onclick = function() {
      // TODO: write some code here
      const clicked = document.querySelector('#pairs_clicked');
      const guessed = document.querySelector('#pairs_guessed');

      card.children[0].classList.toggle('front');
      card.children[0].classList.toggle('back');
      card.children[1].classList.toggle('front');
      card.children[1].classList.toggle('back');
      
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        const cardName1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        const cardName2 = memoryGame.pickedCards[1].getAttribute('data-card-name');

        if (memoryGame.checkIfPair(cardName1, cardName2)) {
          memoryGame.pickedCards[0].children[1].classList.add('blocked');
          memoryGame.pickedCards[1].children[1].classList.add('blocked');
          memoryGame.pickedCards = [];

          
        }
        else {
          setTimeout(() => {
            memoryGame.pickedCards[0].children[0].setAttribute("class", "back");
            memoryGame.pickedCards[0].children[1].setAttribute("class", "front");
            memoryGame.pickedCards[1].children[0].setAttribute("class", "back");
            memoryGame.pickedCards[1].children[1].setAttribute("class", "front");
            memoryGame.pickedCards = []
          }, 1000);
        }
      }
      clicked.innerText = memoryGame.pairsClicked;
      guessed.innerText = memoryGame.pairsGuessed;
      
      if(memoryGame.isFinished()) {
        setTimeout(() => {
          alert('GANHOU!!!! CTRL + R para reiniciar o jogo');
        }, 500);
      }
    }
  });
});


