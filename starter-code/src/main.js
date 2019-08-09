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
let selectedCards = [];



//memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.shuffleCards().forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      turnCard(this);

      if ( selectedCards.length > 1 ) {
        if (memoryGame.checkIfPair(...selectedCards)) {
          document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed;
          if (memoryGame.isFinished()) {
            setTimeout(function(){
              const element = document.querySelector('#game_over');
              element.style.visibility = "visible";
              element.style.opacity = "0.9";

            },500)
          }
        } else {
          const copied = [...selectedCards];
          setTimeout(function(){
            resetCards(copied)
          }, 500);
        }
        document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked;
        selectedCards = [];
      }
    }
  });

  var el = document.getElementById("newgame");
  el.addEventListener("click", reload, false);

});

const turnCard = card => {
  selectedCards.push(card);
  card.className = 'front';
  card.nextElementSibling.className = "back";
}

const resetCards = selectedCardsCopy => {
  for (i=0;i<selectedCardsCopy.length;i++) {
    selectedCardsCopy[i].className = 'back';
    selectedCardsCopy[i].nextElementSibling.className = "front";
  }
}

const reload = () => {
  location.reload(true);
}