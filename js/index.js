const cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

const memoryGame = new MemoryGame(cards);
const pairsClicked = document.querySelector('span#pairs-clicked')
const pairsGuessed = document.querySelector('span#pairs-guessed')

window.addEventListener('load', (event) => {
let html = '';
memoryGame.cards.forEach((pic) => {
  html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  // memoryGame.shuffleCards()
});

// Add all the divs to the HTML
document.querySelector('#memory-board').innerHTML = html;
console.log();



// Bind the click event of each element to a function
document.querySelectorAll('.card').forEach((card) => {

  card.addEventListener('click', () => {
      memoryGame.pickedCards.push(card)
      card.classList.add('turned')
      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML)) {
          memoryGame.pickedCards = [];
          pairsClicked.innerHTML = `${memoryGame.pairsClicked}`
          pairsGuessed.innerHTML = `${memoryGame.pairsGuessed}`

          if (memoryGame.checkIfFinished()) {
              Swal.fire({
                title: 'WIN',
                color: 'white',
                width:600,
                padding: '3em',
                background:'#fff',
                backdrop: `rgba(100,100,100,0.6)`
              })
  
    console.log('FINISH')
      }
      console.log('OH YES!');
    } else if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML)) {
      console.log('TRY ANOTHER ONE');
      pairsClicked.innerHTML = `${memoryGame.pairsClicked/2}`


      setTimeout(() => {
        memoryGame.pickedCards[0].classList.remove('turned')
        memoryGame.pickedCards = []
        card.classList.remove('turned')
      }, 1000)

    }
  }
});
});
});