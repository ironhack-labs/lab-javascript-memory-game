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

      //console.log(`Card clicked: ${card}`);
      card.classList.toggle('turned');


      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        let name1 = memoryGame.pickedCards[0].getAttribute('data-card-name')
        let name2 = memoryGame.pickedCards[1].getAttribute('data-card-name')

        console.log(name1)
        console.log(name2)

        if (memoryGame.checkIfPair(name1, name2)) {

          memoryGame.pickedCards[0].className += ' blocked'

          memoryGame.pickedCards[1].className += ' blocked'


          document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed
          if (memoryGame.checkIfFinished()) {
            console.log("has ganado")
          }
        } else {
          console.log("no son")
          memoryGame.pickedCards[0].setAttribute('class', 'card')
          setTimeout(() => {


          }, 1000)

          memoryGame.pickedCards[1].setAttribute('class', 'card')


        }

        memoryGame.pickedCards = [];


        //console.log(memoryGame.checkIfPair(name1, name2))
        document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked

      }
      console.log(memoryGame.pickedCards);

    });
  });
});
