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

//Primero "barajamos" las cartas 
//memoryGame.shuffleCards()

//Añadimos las cartas al DOM
document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Añadimos la mesa
  document.querySelector('#memory_board').innerHTML = html;
  

  // A todas las cartas que tienen la clase .back, cuando clickemos en ella lo que hacemos es cambiar
  //la clase back por la clase front
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here

      console.log('Card clicked: ', card);
      //cogemos el padre de las cartas
      const cardParent = this.parentNode;
      const frontCard = cardParent.querySelector(".front")
      frontCard.removeAttribute("class", "front")
      frontCard.setAttribute("class", "back")
      card.removeAttribute("class", "back")
      card.setAttribute("class", "front")

      const cardPicked = memoryGame.pickedCards
      //const nameCard = card.getAttribute("name")

      const clicked = document.getElementById("pairs_clicked")
      const guessed = document.getElementById("pairs_guessed")

      pickCard(card)

      clicked.innerText = memoryGame.pairsClicked
      guessed.innerText = memoryGame.pairsGuessed
    };
  });
});

function putItBack(card) {
  const cardParent = card.parentNode;
  const frontCard = cardParent.querySelector(".back")
  
  frontCard.removeAttribute("class", "back")
  frontCard.setAttribute("class", "front")
  card.removeAttribute("class", "front")
  card.setAttribute("class", "back")

}

function putItFront(card) {
  card.frontCard.removeAttribute("class", "front")
  card.frontCard.setAttribute("class", "back")
  card.removeAttribute("class", "back")
  card.setAttribute("class", "front")
}

function pickCard(card) {
  //const cardPicked = memoryGame.pickedCards
  memoryGame.pickedCards.push(card)
  if (memoryGame.pickedCards.length === 2) {
    if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("name"),memoryGame.pickedCards[1].getAttribute("name"))) {
      setTimeout(() => {
        putItBack(memoryGame.pickedCards[0])
        putItBack(memoryGame.pickedCards[1])
        memoryGame.pickedCards.length = 0
      }, 1000);
    } else {
        memoryGame.pickedCards.length = 0

        if (memoryGame.isFinished()) {
          setTimeout(() => {
            const newGame = confirm("¿Quieres jugar de nuevo?")
            if (newGame) {
              window.location.reload()
            }
          }, 500);
        }
    }
  }
}




