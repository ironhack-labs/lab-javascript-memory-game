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
      card.firstChild.classList.toggle("back");
      card.firstChild.classList.toggle("front");
      let secondChild = card.childNodes[1]
      secondChild.classList.toggle("back");
      secondChild.classList.toggle("front");
      console.log(`Card clicked: ${card}`);
      /*if (memoryGame.pickedCards.length == 0) {
        memoryGame.pickedCards.push(card);
      } else if (memoryGame.pickedCards.length == 1) {
        memoryGame.pickedCards.push(card);
      if (!memoryGame.checkIfPair()) {
          let timeoutId = setTimeout (() => {
            memoryGame.pickedCards[0].firstChild.classList.toggle("back");
            memoryGame.pickedCards[0].classList.toggle("front");
            let secChild = memoryGame.pickedCards[0].childNodes[1];
            secChild.classList.toggle("back");
            secChild.classList.toggle("front");
            card.firstChild.classList.toggle("back");
            card.firstChild.classList.toggle("front");
            let secondChild = card.childNodes[1]
            secondChild.classList.toggle("back");
            secondChild.classList.toggle("front");
          }, 1000)
        } else {
          memoryGame.pickedCards.pop();
          memoryGame.pickedCards.pop();
        }
      }*/
    });
  });
});
