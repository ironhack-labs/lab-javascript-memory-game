var cards = [
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
var memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  memoryGame.shuffleCards();
  let html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(function(card, index) {
    card.onclick = function() {
      memoryGame.pickedCards.push(card)
      card.children[0].classList.toggle('back');
      card.children[0].classList.toggle('front');
      card.children[1].classList.toggle('front');
      card.children[1].classList.toggle('back');

      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');
        let guessed = memoryGame.checkIfPair(card1, card2)
        console.log(guessed)
        document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked
        document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed;
        
        if (guessed) {
          memoryGame.pickedCards[0].children[1].classList.add('blocked');
          memoryGame.pickedCards[1].children[1].classList.add('blocked');
          memoryGame.pickedCards = [];

          let gameOver = memoryGame.isFinished()
          if (gameOver) {
            alert('Parabéns! Você terminou o jogo.')
          }

        } else {
          setTimeout(() => {
            memoryGame.pickedCards[0].children[0].classList.toggle('back');
            memoryGame.pickedCards[0].children[0].classList.toggle('front');
            memoryGame.pickedCards[0].children[1].classList.toggle('back');
            memoryGame.pickedCards[0].children[1].classList.toggle('front');
            memoryGame.pickedCards[1].children[0].classList.toggle('front');
            memoryGame.pickedCards[1].children[0].classList.toggle('back');
            memoryGame.pickedCards[1].children[1].classList.toggle('front');
            memoryGame.pickedCards[1].children[1].classList.toggle('back');
            memoryGame.pickedCards = [];
          }, 1000);
        }
      }
      console.log('Card clicked')
    }
  });
});


