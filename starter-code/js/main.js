const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

let memoryGame = new MemoryGame(cards);
//memoryGame.shuffleCards()

memoryGame.shuffleCards()

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  //set a counter to know how many cards I clicked
  let count = 0

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(card => {
    card.onclick = function() {

      //add class="show-cards" to the cards that I clicked
      card.setAttribute('class', 'front show-cards')
      card.nextElementSibling.setAttribute('class', 'back')

      count ++

      if (count === 2) {
        pairClicked()
        let uppedCards = document.getElementsByClassName('show-cards')

        let card1 = uppedCards[0].getAttribute('name')
        let card2 = uppedCards[1].getAttribute('name')        
        
        if (memoryGame.checkIfPair(card1, card2)) {
          pairGuessed()
          areEquals()
        } else {
          setTimeout(toggleClass, 500)
        }
        count = 0    
      }
      
    console.log('Card clicked: ', card);

    if (memoryGame.isFinished()) {
      console.log('FINISH!')
      memoryGame.pairsClicked === 12 ? console.log(`you're so lucky, man!`) :
        memoryGame.pairsClicked <=  24 ? console.log(`${memoryGame.pairsClicked}
          attempts, that's great! You've certainly have a good memory!`) :
            console.log(`Nice job, you did it in ${memoryGame.pairsClicked} attempts`)
       }
    }
  })
})

//pair clicked +1
pairClicked = () => {
  document.getElementById('pairs_clicked')
    .innerText = Number(document.getElementById('pairs_clicked').innerText) + 1
}

//pair guessed + 1
pairGuessed = () => {
  document.getElementById('pairs_guessed')
    .innerText = Number(document.getElementById('pairs_guessed').innerText) + 1
}

//if the cards are equals
areEquals = () => {
  for(let i = 0; i < 2; i++) {
     document.querySelector('.show-cards').setAttribute('class', 'front')
  }
}

//if the cards are not equals
toggleClass = () => {
  for(let i = 0; i < 2; i++) {
    document.querySelector('.show-cards').nextElementSibling.setAttribute('class', 'front')
    document.querySelector('.show-cards').setAttribute('class', 'back')
  }
}


