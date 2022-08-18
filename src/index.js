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

      card.classList.toggle('turned')
      memoryGame.pickedCards.push(card)

      let card1 = memoryGame.pickedCards[0]
      let card2 = memoryGame.pickedCards[1]


      if (memoryGame.pickedCards.length === 2) {

        let name1 = card1.getAttribute('data-card-name')
        let name2 = card2.getAttribute('data-card-name')

        console.log(name1)
        console.log(name2)

        if (memoryGame.checkIfPair(name1, name2)) {
          card1.className += ' blocked'
          card2.className += ' blocked'

          document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed
          if (memoryGame.checkIfFinished()) {
            setTimeout(() => {
              location.reload();
            }, 3000);
            alert('¡Ha gando!')

          }
        } else {
          setTimeout(function () {
            card1.setAttribute("class", "card");
            card2.setAttribute("class", "card");

          }, 1000)
        }
        memoryGame.pickedCards = [];
        document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked
      }
      console.log(memoryGame.pickedCards);
    });
  });
});
