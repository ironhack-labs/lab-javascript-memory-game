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
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      
      card.setAttribute('class', 'card turned')

      if (memoryGame.isFinished()) {
        setTimeout(() => alert('YOU WON! Refresh the page if you want to play more'), 750)
      }
      
      memoryGame.pickedCards.push(card)

      const card1 = memoryGame.pickedCards[0]
      const card2 = memoryGame.pickedCards[1]

      const cardName1 = card1.attributes[1].value
      const cardName2 = card2.attributes[1].value

      if (memoryGame.pickedCards.length === 2){


        if (memoryGame.checkIfPair(cardName1, cardName2)) {
          if (memoryGame.isFinished()) {
            alert('YOU WON! Refresh the page if you want to play more')
          }
          memoryGame.pickedCards = []

        } else {
          setTimeout(() => card1.setAttribute('class', 'card'), 500)
          setTimeout(() => card2.setAttribute('class', 'card'), 500)
          memoryGame.pickedCards = []
          
        }

        const pairsClicked = document.querySelector('#pairs-clicked')
        pairsClicked.innerText = memoryGame.pairsClicked
        const pairsGuessed = document.querySelector('#pairs-guessed')
        pairsGuessed.innerText = memoryGame.pairsGuessed  

        

      }
     
    
      

    });
  });
});


