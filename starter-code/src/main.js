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
memoryGame.shuffleCards(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
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
      
      if (memoryGame.pickedCards.length !== 2) {
        console.log("memoryGame.pickedCards.length: " + memoryGame.pickedCards.length)
      card.classList.add('selected-card');

      let divBack = card.querySelector('.back');
      let divFront = card.querySelector('.front');
      let picName = divBack.getAttribute('name');

      console.log(memoryGame.pickedCards.includes(picName))

      if ((picName)) {

      divBack.classList.toggle('front')
      divBack.classList.toggle('back')

      divFront.classList.toggle('front')
      divFront.classList.toggle('back')

      memoryGame.pickedCards.push(picName);
      
      if (memoryGame.pickedCards.length === 2) {
        memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);

        document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked;
        document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed;
      }
      console.log('pair clicked' + memoryGame.pairsClicked);
      
      // virar carta
      // html += '<div class="card" data-card-name="'+ picName +'">';
      // html += '  <div class="back" name="'+ pic.img +'"></div>';
      // html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
      // html += '</div>';
    }
      console.log('Card clicked')
    }
    }
  });
});


