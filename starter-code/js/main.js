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

memoryGame.shuffleCards();
let clicks = 0;

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
      card.classList.toggle("turned");
      memoryGame.pickedCards.push(card);
      clicks += 1;
      if (clicks % 2 == 0){
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];
        let name1 = card1.getAttribute("data-card-name");
        let name2 = card2.getAttribute("data-card-name");
        let isPair = memoryGame.checkIfPair(name1, name2);
        if(!isPair){
          setTimeout(function(){
            card1.classList.toggle("turned");
            card2.classList.toggle("turned");
          }, 1000);
        }
        memoryGame.pickedCards = [];
      }
      // console.log('Card clicked: ', card);
      let pairsClicked = document.getElementById("pairs_clicked");
      pairsClicked.innerHTML = memoryGame.pairsClicked;

      let pairsGuessed = document.getElementById("pairs_guessed");
      pairsGuessed.innerHTML = memoryGame.pairsGuessed;

      if (memoryGame.isFinished()) {
        setTimeout(function(){
          alert("The game is finished!");
        }, 1000);
      }
    };
  });
});


