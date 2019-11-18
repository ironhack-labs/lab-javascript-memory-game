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

memoryGame.shuffleCards()

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
  let pairsGuessedDisplay = document.querySelector('#pairs_guessed')
  let pairsClickedDisplay = document.querySelector('#pairs_clicked')


  // Bind the click event of each element to a function
  let cardsArr = memoryGame.pickedCards
  document.querySelectorAll('.card').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here 🤓👍
      if (cardsArr.length < 2){
        cardsArr.push(card)
        card.classList.add('turned')
        if (cardsArr.length == 2) {
          if(memoryGame.checkIfPair(cardsArr[0], cardsArr[1])){
            pairsGuessedDisplay.innerText = memoryGame.pairsGuessed
            pairsClickedDisplay.innerText = memoryGame.pairsClicked
            cardsArr = cardsArr.slice(2)
            if(memoryGame.isFinished()){
              document.querySelector('#score').innerHTML += '<h2>You Win!!!</h2>'
            }
          } else {
              pairsClickedDisplay.innerText = memoryGame.pairsClicked
              setTimeout(() => {
                cardsArr[0].classList.remove('turned')
                cardsArr[1].classList.remove('turned')
                cardsArr = cardsArr.slice(2)
              }, 2000)
            }
        }
      }
      console.log('Card clicked: ', card);
    };
  });
});


