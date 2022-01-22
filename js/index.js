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

memoryGame.shuffleCards()

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      card.classList.add("turned")
      console.log(`Card clicked: ${card}`);

      memoryGame.pickedCards.push(card)
      console.log(memoryGame.pickedCards)
      
      if(memoryGame.pickedCards.length === 2) {
        let firstCard = memoryGame.pickedCards[0]
        let firstCardName = firstCard.getAttribute('data-card-name')

        let secondCard = memoryGame.pickedCards[1]
        let secondCardName = secondCard.getAttribute('data-card-name')
        if (memoryGame.checkIfPair(firstCardName, secondCardName)) {
          firstCard.classList.add('blocked')
          secondCard.classList.add('blocked')
        } else {
          setTimeout(function() {
            firstCard.classList.remove("turned")
            secondCard.classList.remove("turned") 
            }, 1000)
        }
        document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked
        memoryGame.pickedCards = []

        document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed
      } 



      if (memoryGame.checkIfFinished()) {
        setTimeout(function() {
          alert('Congrats!! Finally you can go for the next Lab.. or  not, because you already finished all of them MUAHAHAH')
        }, 2000)
        
      }

    });
  });
});
