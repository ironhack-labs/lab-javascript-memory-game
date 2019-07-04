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
memoryGame.shuffleCards();
let block = false;

window.addEventListener("load", function(event) { 
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
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      if(block) return;
      turnCard(card.parentNode);
      if(memoryGame.clickedCard(card.parentNode.dataset.cardName)) {
        block = true;
        setTimeout(function () {
          turnCardsByName(memoryGame.pickedCards);
          block = false;
        }.bind(this), 1000);
      }
      updateCounts();
    }
  });
});

function updateCounts() {
  document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked
  document.getElementById("pairs_guessed").innerText = memoryGame.pairsGuessed
}

function removeNameAttributes(cardNames) {
  let cards = document.querySelectorAll(".card .front[name]");
  cards[0].removeAttribute("name");
  cards[1].removeAttribute("name");
}

function turnCardsByName(cardNames) {
  let cards = document.querySelectorAll(".card .front[name]")
  turnCard(cards[0].parentNode);
  turnCard(cards[1].parentNode);
}

function turnCard(card) {
  card.firstElementChild.classList.toggle("front")
  card.firstElementChild.classList.toggle("back")
  card.lastElementChild.classList.toggle("front")
  card.lastElementChild.classList.toggle("back")
}
