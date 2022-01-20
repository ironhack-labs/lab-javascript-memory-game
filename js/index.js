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

  memoryGame.shuffleCards(cards)

  let html = '';
  memoryGame.cards.forEach((pic) => {
    // en los renglones de abajo he tenido que convertir
    // 'data-cardname' en 'cardname'. De lo contrario no sabía referenciarlo
    //


    html += `
      <div class="card" data-cardname="${pic.name}">
    
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });




  document.querySelector('#memory-board').innerHTML = html;


  document.querySelectorAll('.card').forEach((card) => {

    card.addEventListener('click', () => {

      card.classList.toggle('turned')


      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        console.log(3)




        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardname, memoryGame.pickedCards[1].dataset.cardname)) {
          memoryGame.pickedCards[0].classList.toggle('blocked')
          memoryGame.pickedCards[1].classList.toggle('blocked')

          console.log("bien")


        }
        else {

          let first = memoryGame.pickedCards[0]
          let second = memoryGame.pickedCards[1]

          setTimeout(() => first.classList.toggle('turned'), 1000)
          setTimeout(() => second.classList.toggle('turned'), 1000)
          console.log("muymal")
        }
        memoryGame.checkIfFinished()


        document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked
        document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed
        memoryGame.pickedCards = []
        console.log(4)

      }


    })





  });
});
