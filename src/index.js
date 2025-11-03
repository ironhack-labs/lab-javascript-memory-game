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

memoryGame.shuffleCards();

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
    card.addEventListener('click', (event) => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      card.classList.add('turned');
      memoryGame.pickedCards.push([card.getAttribute("data-card-name"), card]);
      
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0][0], memoryGame.pickedCards[1][0])) {
        memoryGame.pickedCards = [];
        } else {
        setTimeout(() => {
          memoryGame.pickedCards[0][1].classList.remove("turned");
          memoryGame.pickedCards[1][1].classList.remove("turned");
          memoryGame.pickedCards = [];
        }, 500);
      }

      
      document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
      document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;

      if (memoryGame.checkIfFinished()) {
        document.querySelector('#memory-board').innerHTML = "";
        document.querySelector('#memory-board').innerHTML = `<div style="width:100%; height:100%; background-image:url('https://media1.thehungryjpeg.com/thumbs/800_3859488_ybb79bwd0h8d0jkotec62uetjs7gi86aa9dibwjt.jpg'); background-size:cover;"></div>`;
        setTimeout(() => {
        location.reload();
      }, 2000);
      }
    });
  });
});
