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

  //memoryGame.shuffleCards(cards)
  let card1
  let card2
  let card1Name = ''
  let card2Name = ''
  let html = '';
  memoryGame.cards.forEach((pic) => {
    // en los renglones de abajo he tenido que convertir
    // 'data-cardname' en 'cardname'. De lo contrario no sabía referenciarlo
    //
    // me he olvidado completamente del array de this.pickedCards. funciona sin usarlo
    //cuando me di cuenta de eso, era demasiado tarde para cambiar toda la mecánica

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

      if (card1Name === '') {
        card1 = card
        card1Name = card.dataset.cardname
        console.log(card1Name)
      }
      else {
        card2 = card
        card2Name = card.dataset.cardname
        console.log(card2Name)
        if (memoryGame.checkIfPair(card1Name, card2Name)) {
          card1Name = ''
          card2Name = ''
          card1.classList.add('blocked')
          card2.classList.add('blocked')

          console.log(card1)
          console.log(card2)
          document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed
        }
        else {


          card1.classList.toggle('turned')
          card2.classList.toggle('turned')
          document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked
          console.log('fracaso')
          card1Name = ''
          card2Name = ''
        }

      }


    })

    memoryGame.checkIfFinished()


  });
});
