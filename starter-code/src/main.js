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

const memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  
  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  let cards = document.querySelectorAll('.card');
  let timer = 1000;
  
  // Bind the click event of each element to a function
  cards.forEach(function(card, index) {

    card.onclick = function() {
      card.children[1].classList.add('blocked');
      
      const clicked = document.querySelector('#pairs_clicked');
      const guessed = document.querySelector('#pairs_guessed');
      
      card.children[0].classList.toggle('front');
      card.children[0].classList.toggle('back');
      card.children[1].classList.toggle('front');
      card.children[1].classList.toggle('back');
      
      memoryGame.pickedCards.push(card);
      
      if (memoryGame.pickedCards.length === 2) {

        cards.forEach(card => card.children[0].classList.toggle('blocked'));
        setTimeout(() => cards.forEach(card => card.children[0].classList.toggle('blocked')), timer);
        
        const cardName1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        const cardName2 = memoryGame.pickedCards[1].getAttribute('data-card-name');
        
        if (memoryGame.checkIfPair(cardName1, cardName2)) {
          memoryGame.pickedCards = [];
          if (memoryGame.isFinished()) {
            alert('YOU WON!');
          }
        } else {
          setTimeout(() => {
            memoryGame.pickedCards[0].children[0].classList.toggle('front');
            memoryGame.pickedCards[0].children[0].classList.toggle('back');
            memoryGame.pickedCards[0].children[1].classList.toggle('front');
            memoryGame.pickedCards[0].children[1].classList.toggle('back');
            memoryGame.pickedCards[1].children[0].classList.toggle('front');
            memoryGame.pickedCards[1].children[0].classList.toggle('back');
            memoryGame.pickedCards[1].children[1].classList.toggle('front');
            memoryGame.pickedCards[1].children[1].classList.toggle('back');
            memoryGame.pickedCards = [];
          }, timer);
        }
      }

      clicked.innerText = memoryGame.pairsClicked;
      guessed.innerText = memoryGame.pairsGuessed;
    }
  });
});
