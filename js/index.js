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
const pairsClicked = document.querySelector('#pairs-clicked')

const pairsGuessed = document.querySelector('#pairs-guessed')

window.addEventListener('load', (event) => {
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
  let cardNamesArr = []
  let memory
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here

      card.classList.add('turned')
      const cardName = card.getAttribute('data-card-name');
      cardNamesArr.push(cardName)
      console.log(cardName)
      if (!memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card)
      }


      console.log(memoryGame.pickedCards.length)
      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(cardNamesArr[0], cardNamesArr[1])) {
          memoryGame.pickedCards[0].classList.toggle('blocked')
          memoryGame.pickedCards[1].classList.toggle('blocked')
          memoryGame.pickedCards.splice(0, 2)
          cardNamesArr.splice(0, 2)
          pairsClicked.innerHTML = memoryGame.pairsClicked
          pairsGuessed.innerHTML = memoryGame.pairsGuessed
          if (memoryGame.checkIfFinished()) {
            setTimeout(() => {
              alert("you won")
              const allCarts = document.querySelectorAll(".card")
              allCarts.forEach(eachCard => {
                eachCard.classList.remove('turned')
              })
              window.location.reload(true);
            }, 1000);
          }
        } else {

          setTimeout(() => {



            memoryGame.pickedCards[0].classList.remove('turned')
            memoryGame.pickedCards[1].classList.remove('turned')
            memoryGame.pickedCards.splice(0, 2)



          }, 600);

          cardNamesArr.splice(0, 2)
          pairsClicked.innerHTML = memoryGame.pairsClicked
        }
      }





      console.log(`Card clicked: ${card}`);
    });
  });
});
