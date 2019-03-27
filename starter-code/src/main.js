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
var primera = true;
var carta1;
var carta2;
var auxCard;

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '<div class="back visible" name="'+ pic.img +'"></div>';
    html += '<div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  document.querySelector('#memory_board').innerHTML = html;

  document.querySelectorAll('.card').forEach(function(card) {
    card.onclick = function() {
      var back = card.querySelector(".back");
      var front = card.querySelector(".front");
      back.classList.toggle("visible");
      front.classList.toggle("visible");
      
      if (primera){
        primera = false;
        carta1 = card.getAttribute("data-card-name");
        front.classList.toggle("blocked");
        auxCard = card;
      }
      else {
        primera = true;
        carta2 = card.getAttribute("data-card-name");
        if (memoryGame.checkIfPair(carta1,carta2)) {
            front.classList.toggle("blocked");
            document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed;
            if (memoryGame.isFinished()) window.alert("HAS GANADO!!");
        }
        else{
          setTimeout(function() {
            back.classList.toggle("visible");
            front.classList.toggle("visible");
            back = auxCard.querySelector(".back");
            front = auxCard.querySelector(".front");
            back.classList.toggle("visible");
            front.classList.toggle("visible");
            front.classList.toggle("blocked");            
          }, 1000);
        }
        document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked;
      }
    };
  });
});


