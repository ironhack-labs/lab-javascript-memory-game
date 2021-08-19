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

window.addEventListener('load', (event) => {
  let html = '';
  const shuffled = memoryGame.shuffleCards(memoryGame.cards);
  shuffled.forEach((pic) => {
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
  let targets = [];
  // to trun card if they are not match
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {
      let target = event.currentTarget; //get the target card
      const name = card.getAttribute('data-card-name');
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(name)
        targets.push(target)
        card.classList.add('turned'); //Problem solved!
      }
      if (memoryGame.pickedCards.length === 2) {
        const checkIfPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
        if (!checkIfPair) {
          setTimeout(function () {
            for (target of targets) {
            target.classList.remove('turned');
            } 
          targets = [];
          memoryGame.pickedCards = [];
          }, 1000)
          
        } else {
          targets = [];
          memoryGame.pickedCards = [];
        }
      }
        // Problem ! => if click fast cannot turn the cards. 
        // Problem solved by add turned happen only pickCards < 2
     
      // display
      document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked
      document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed
      // Result
      if (memoryGame.checkIfFinished()){
        document.querySelector('body').innerHTML = "<h1>You Won!</h1>"
      } else {
        console.log("Guess More!")
      }
       
    
    });
  })
});