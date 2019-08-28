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

let twoCardsFlipped = false;

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

  let pairsToCompare = [];
  let pairsClickedDOMEl = document.getElementById("pairs_clicked");
  let paisrGuessedDOMEl = document.getElementById("pairs_guessed");

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function(e) {
      // TODO: write some code here

      const cardBack = e.target;
      const cardName = cardBack.parentNode.dataset.cardName;

      cardBack.classList.toggle("front")
      cardBack.nextElementSibling.classList.toggle("front");
      cardBack.classList.toggle("back")
      cardBack.nextElementSibling.classList.toggle("back");
      memoryGame.pickedCards.push(cardName);
      console.log(memoryGame.pickedCards)

      const firstCard = memoryGame.pickedCards[0];
      const secondCard = memoryGame.pickedCards[1];

      if (memoryGame.pickedCards.length === 2) {
        const cardsEqual = memoryGame.checkIfPair(firstCard, secondCard);

        if (!cardsEqual) {
          setTimeout(() => {
            console.log('asdadas', cardBack.parentNode.childNodes[0])
            cardBack.parentNode.childNodes[0].classList.toggle("front")
            cardBack.parentNode.childNodes[0].nextElementSibling.classList.toggle("front");
            cardBack.parentNode.childNodes[0].classList.toggle("back")
            cardBack.parentNode.childNodes[0].nextElementSibling.classList.toggle("back");

            console.log(firstCard)
            console.log(secondCard)

          }, 1000);
        }
        
        document.getElementById("pairs_guessed").innerText = `${memoryGame.pairsGuessed}`;        
      }

      document.getElementById("pairs_clicked").innerText = `${memoryGame.pairsClicked}`;

      const finishGame = memoryGame.isFinished()
      if(finishGame === true){
        window.alert(`The game is over!`)
      }

      
      console.log("pairsGuessed", memoryGame.pairsGuessed)        
      console.log('Card clicked: ', card);

    };
  });
});


