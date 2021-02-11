//import {MemoryGame} from "./memory.js"

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

// Functions : various functions add here to simplify the progress logic of the game

const initializeGame = () => {
  //  initialize the game

  memoryGame.shuffleCards()

  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
}

const updateScore = () => {
  // modify score display

  document.querySelector("#pairs-clicked").innerText = memoryGame.pairsClicked ;
  document.querySelector("#pairs-guessed").innerText = memoryGame.pairsGuessed ;
}

const whenFinished = () => {
  //  reset the game when finished

  window.alert("You are the best !") ;
  //  alert the gamer he has finished
  memoryGame.resetGame() ;
  //  reset game
  updateScore() ;
  //  print update score
  document.querySelectorAll('#memory-board .card').forEach((card, index) => {
    card.classList.remove("turned")
    card.setAttribute("data-card-name", memoryGame.cards[index].name)
    card.children[0].setAttribute("name", memoryGame.cards[index].img )
    card.children[1].setAttribute("style", `background: url(img/${memoryGame.cards[index].img}) no-repeat` )
  }) ;
  //  modify card with the new shuffle
}

//  Main

window.addEventListener('load', event => {

  initializeGame() ;

  let selectedCards = [] ;
    // an array of one or two cards.
  let canPlay = true ;
    // When two cards are return but are not paired, I let the two card turned during 1 second (using setTimeout). 
    // During this time, the user can't play. I use this variable to model that

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (event) => {
      const divCard = event.target.parentElement ;

      if(canPlay) {
        // After the gamer click, something happen only if the game let him play
        divCard.classList.add("turned") ;
        // turn the card

        if(selectedCards.length !== 1) {
          //  If the set of chosen card is empty, or have already 2 card from previous pair, reset it and add one card 
          selectedCards = [divCard] ;
        } else {
          // if two cart ae selected :
          canPlay = false ;
            // the gamer can't play before the step is finihed : 
            // if no pair is formed : the two card stay truned during one second. During this time, the gamer can't play. After that, canPlay is put to true

          selectedCards.push(divCard) ;
            // add card to the set

          let isPaired = memoryGame.checkIfPair(selectedCards[0].getAttribute("data-card-name"), selectedCards[1].getAttribute("data-card-name"))
            // verify is the cards are paired

          updateScore()
            // update score

          if(!isPaired) {
            // if not paired : the two card stay turned during 1 second
           setTimeout(() => {selectedCards.map(tag => tag.classList.remove("turned")), canPlay = true}, 1000)
          } else {
            canPlay = true ;
          }

          if (memoryGame.isFinished()) {
            setTimeout(whenFinished ,100)
            //  if win, an alert is created. The alert seems to bloc the trun of the cxard, so I add a little desynchronisation to avoid that
          }
        }
      }
    });
  });
});
