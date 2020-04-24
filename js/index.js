
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

window.addEventListener('load', event => {
  let html = '';
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
      if (memoryGame.pickedCards.length <2) {
        card.classList.toggle('turned')
        memoryGame.pickedCards.push(card)
        if (memoryGame.pickedCards.length === 2) {
          let check = memoryGame.checkIfPair(
                        memoryGame.pickedCards[0].querySelector(".back").getAttribute("name"),
                        memoryGame.pickedCards[1].querySelector(".back").getAttribute("name")
                      )
          check
          if (!check) {
            console.log(memoryGame.pickedCards[0])
            setTimeout(function(){ memoryGame.pickedCards[0].classList.toggle('turned') }, 800);
            setTimeout(function(){ memoryGame.pickedCards[1].classList.toggle('turned')
            memoryGame.pickedCards = []}, 800);
          } else {
            memoryGame.pickedCards = [];
          }
          console.log(memoryGame.pairsGuessed)
        }
        console.log(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
        if (memoryGame.isFinished()) {
          console.log("YOU WON !!!")
        }
      }
    });
  });
});
