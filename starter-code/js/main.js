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

//Mezclo las cartas
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

  const toggleCard = el => {
    el.childNodes.forEach(sibling => {
      sibling.classList.toggle('front')
      sibling.classList.toggle('back')
    })
  } 

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      //Si ya hay dos selecionadas o el juego esta terminado no ejecuto nada
      if (memoryGame.pickedCards.length === 2 || memoryGame.isFinished()) return

      //introduzco datos de la carta selecionada en la array picked
      memoryGame.pickedCards.push({
        name: this.parentElement.getAttribute('data-card-name'),
        elem: this.parentElement
      })
      //Voltedo la carta 
      toggleCard(this.parentElement)

      //Pongo un tiempo que solo se ejecuta cuando son dos element en la arr de picked
      setTimeout(() => { 
        if (memoryGame.pickedCards.length === 2) {
          if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].name, memoryGame.pickedCards[1].name)) {
            toggleCard(memoryGame.pickedCards[0].elem)
            toggleCard(memoryGame.pickedCards[1].elem)
          }
          document.getElementById('pairs_clicked').innerText = memoryGame.pairsClicked
          document.getElementById('pairs_guessed').innerText = memoryGame.pairsGuessed
          memoryGame.pickedCards = []
        }
      }, 2000);

    };
  });
});


