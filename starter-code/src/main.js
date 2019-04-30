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

function flipCard(card) {
  if (card.className === 'back') {
    card.className = 'front'
  } else if (card.className === 'front') {
    card.className = 'back'
  }
}

let memoryGame = new MemoryGame(cards);


document.addEventListener("DOMContentLoaded", function (event) {
  let html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';


  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;


  // Bind the click event of each element to a function
  let chosenCards = []
  let check = false;
  let points = 0;
  memoryGame.pairsGuessed = 0

  document.querySelectorAll('.card').forEach(function (card) {
    checkifWinner()
    card.onclick = function (e) {
      const cardInnerDivs = [...e.currentTarget.children]
      cardInnerDivs.forEach(div => flipCard(div))

      const cardsUp = setTimeout(() => {
        if (!check)
          cardInnerDivs.forEach(div => flipCard(div))
      }, 2000)

      if (chosenCards.length > 1) {
        chosenCards = []
        chosenCards.push(e.currentTarget.attributes['data-card-name'].nodeValue)
        /* console.log('chosen cards en if', chosenCards) */
      } else {
        chosenCards.push(e.currentTarget.attributes['data-card-name'].nodeValue)
        /* console.log('chosen cards en else', chosenCards) */
        if (chosenCards.length === 2) {
          check = memoryGame.checkIfPair(chosenCards[0], chosenCards[1])
          memoryGame.pickedCards++
          pairs_clicked.innerText = memoryGame.pickedCards
          /* console.log("Check if pair", check) */
          if (check) {
            //clearTimeout(cardsUp)
            pairs_guessed.innerText = memoryGame.pairsGuessed
            checkifWinner(memoryGame.pairsGuessed, memoryGame.pairsClicked)
            /* setTimeout(() => {
            }, 200) */

          }
        }
      }
    }
  });
})



function checkifWinner(pairsGuessed, pairsClicked) {
  if (pairsGuessed === 12) {
    points = pairsGuessed / pairsClicked * 100
    winner.innerHTML = `<h1 style=" background-color: rgb(168, 201, 168);padding: 60px; width: 60%; color: black "> 
    Enhorabuena!! Has completado el juego con ${points.toFixed(2)} puntos</h1> 
    <p>Para volver a empezar actualiza la página</p>`

  }
}