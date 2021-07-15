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

  let pickedCards = [];
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      console.log(card);
      if(!card.classList.contains("turned") && !card.classList.contains("blocked")) {
        card.classList.add("turned");
      }

      pickedCards.push(card);
      if(pickedCards.length === 2) {
        var pickedCard1List = pickedCards[0].classList;
        var pickedCard2List = pickedCards[1].classList;
        var pickedCard1 = pickedCards[0].getAttribute('data-card-name');
        var pickedCard2 = pickedCards[1].getAttribute('data-card-name');
        if(!memoryGame.checkIfPair(pickedCard1, pickedCard2)) {
          setTimeout(function (){
            pickedCard1List.remove('turned');
            pickedCard2List.remove('turned');        
          }, 2000)

        } else {
          document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;
        }
        document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
        pickedCards = [];
      }

    });
  });
});
