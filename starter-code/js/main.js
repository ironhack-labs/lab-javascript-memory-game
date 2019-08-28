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

let pairsToCompare = [];
let twoCardsFlipped = false;
let pairsClickedDOMEl = document.getElementById("pairs_clicked");
let paisrGuessedDOMEl = document.getElementById("pairs_guessed");

memoryGame.shuffleCards(cards);
 
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
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
                  
      const hideCards = cards => {
        cards.forEach(card => {
          let firstCardChild = card.firstElementChild;
                              
          if (firstCardChild.classList.contains("front")) {
            firstCardChild.className = "back";
            firstCardChild.nextElementSibling.classList = "front";
          }
        });
      };                             

    if (!twoCardsFlipped) {
      pairsToCompare.push(card.parentElement.dataset.cardName);
                              
      card.className = "front";
      card.nextElementSibling.className = "back";
                              
      if (pairsToCompare.length === 2) {
        twoCardsFlipped = !twoCardsFlipped;
                              
        if (memoryGame.checkIfPair(pairsToCompare[0], pairsToCompare[1])) {
          setTimeout(() => {
            twoCardsFlipped = !twoCardsFlipped;
            pairsToCompare = [];
            paisrGuessedDOMEl.textContent = memoryGame.pairsGuessed;
                              
            if (memoryGame.isFinished()) {
              alert("Has ganado!");
            }
          }, 1000);
        } else {

          setTimeout(() => {
            hideCards([
            ...document.querySelectorAll(`[data-card-name="${pairsToCompare[0]}"]`)
            ]);
            
            hideCards([
            ...document.querySelectorAll(`[data-card-name="${pairsToCompare[1]}"]`)
            ]);
                              
            twoCardsFlipped = !twoCardsFlipped;
            pairsToCompare = [];
            }, 1000);
          }
        }
                              
        pairsClickedDOMEl.textContent = `${memoryGame.pairsClicked}`;
      
      }
    };
  });
});