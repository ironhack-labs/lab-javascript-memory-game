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


window.addEventListener('load', event => {
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  document.querySelector('#memory-board').innerHTML = html;

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card)
      if (memoryGame.pickedCards.length >= 2) {
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];
        if (memoryGame.checkIfPair(card1.getAttribute('data-card-name'), card2.getAttribute('data-card-name'))) {
          card1.classList.add('blocked');
          card2.classList.add('blocked');
        } else {
          setTimeout(() => {
            card1.classList.toggle('turned');
            card2.classList.toggle('turned');
          }, 600)
        }
        memoryGame.pickedCards = [];
        document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked
        document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed
        if (memoryGame.isFinished()) {
          document.querySelector('#score h2').innerText = 'WINNER WINNER CHICKEN DINNER'
          let answer = window.confirm('WINNER WINNER CHICKEN DINNER!\r\nNEW ROUND???')
          if (answer) {
            location.reload();
          }
        }
      }
    })
  })
})