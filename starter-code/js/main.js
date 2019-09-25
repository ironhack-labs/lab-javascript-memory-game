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

const memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {

    let sib = card.nextSibling
    card.removeAttribute('back')
    card.setAttribute("class", "front")
    sib.removeAttribute('front')
    sib.setAttribute('class', 'back')

      // TODO: write some code here
      console.log('Card clicked: ', card);

      pickCard(card)
    }; 
  });
});

function pickCard(card) {
  memoryGame.pickedCards.push(card)
  if (memoryGame.pickedCards.length===2) {
    let card1 = memoryGame.pickedCards[0]
    let card2 = memoryGame.pickedCards[1]
    if (!memoryGame.checkIfPair(card1.getAttribute('name'), card2.getAttribute('name'))) {
      document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked
      setTimeout(() => {
        console.log('yoooou')
        flipBack(card1)
        flipBack(card2)
      }, 900)
    }
    document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked
    document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed

  }
}

function flipBack(card) {
  let sib = card.nextSibling
  card.removeAttribute('front')
  card.setAttribute("class", "back")
  sib.removeAttribute('back')
  sib.setAttribute('class', 'front')
}
 

