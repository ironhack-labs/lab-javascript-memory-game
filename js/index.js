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

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`
    html += `<div class="back" name="${pic.img}"></div>`
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`
    html += `</div>`
  });

   // Mix the cards
  memoryGame.shuffleCards(cards) // Seem not working

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('turned')
      memoryGame.pickedCards.push(card)
      // console.log(memoryGame.pickedCards) test
      // console.log(memoryGame.pickedCards.length) test

      if (memoryGame.pickedCards.length === 2) {
        // console.log("Array full") test
        const card1 = memoryGame.pickedCards[0].getAttribute('data-card-name')
        const card2 = memoryGame.pickedCards[1].getAttribute('data-card-name')
        // console.log(card1,card2) test
        if (memoryGame.checkIfPair(card1, card2)) {
          // console.log("These cards are pairs") test
          memoryGame.pickedCards.forEach(card => {
          card.classList.add('blocked')
          })
          memoryGame.pickedCards = []
          // console.log(memoryGame.pickedCards) test
        } else {
          // console.log("These cards are not pairs") test
          setTimeout(() => {
          memoryGame.pickedCards.forEach(card => {
            card.classList.remove('turned')
          })
          memoryGame.pickedCards = []
          // console.log(memoryGame.pickedCards) test
          }, 1000)
        }
        if (memoryGame.isFinished()) { // Jasmin was expecting 8 pairs to win but it would have been better to have 12.
          alert("Congrats, you won!")
        }
         // Updating pairs clicked and guessed
        document.querySelector('#pairs-clicked').innerHTML = `${memoryGame.pairsClicked}`
        document.querySelector('#pairs-guessed').innerHTML = `${memoryGame.pairsGuessed}`
      }
      
    });
    
  });
  
});


