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

window.addEventListener('load', (event) => {
  function startGame(){
    const memoryGame = new MemoryGame(cards);
    memoryGame.shuffleCards()
  
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
      card.classList.toggle('turned')
      memoryGame.pickedCards.push(card);
      if (memoryGame.pickedCards.length === 2) {
        const result = memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)
       const clicked = document.querySelector("#pairs-clicked")
       clicked.textContent = memoryGame.pairsClicked
        if (result) {
          memoryGame.pickedCards.forEach(item => {
            item.classList.add('blocked')
          })
          const guessed = document.querySelector("#pairs-guessed")
          guessed.textContent = memoryGame.pairsGuessed
          memoryGame.pickedCards.length = 0
          const resultOfGame = memoryGame.checkIfFinished()
          if (resultOfGame){
           setTimeout(()=> {
            alert('you are win')
            startGame()
           },500)
            
          }
        } else {
          setTimeout(() => {
            memoryGame.pickedCards.forEach(item => {
            
              item.classList.remove('turned')

            })
            memoryGame.pickedCards.length = 0
          }, 500)
        }

      }
      console.log(`Card clicked: ${card}`);
    });
  });
}
startGame()
});
