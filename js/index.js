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

memoryGame.shuffleCards()

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {

      if (memoryGame.isFinished() === false) {

        if (memoryGame.pickedCards.length < 2) {

          memoryGame.pickedCards.push(card)
          card.classList.add('turned')

          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {

            memoryGame.pickedCards[0].classList.add('bloqued')

            memoryGame.pickedCards[1].classList.add('bloqued')

            memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length)
          } else {

            memoryGame.pickedCards[0].classList.add('back')

            memoryGame.pickedCards[1].classList.add('back')

            memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length)
          }
          // const fstCard = memoryGame.pickedCards[0]
          // const sndCard = memoryGame.pickedCards[1]
          // const fstCardName = fstCard.getAttribute('data-card-name')
          // const sndCardName = sndCard.getAttribute('data-card-name')
          // console.log(fstCardName, sndCardName)

        }


        //   if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name') ,memoryGame.pickedCards[1].getAttribute('data-card-name')) {
        //     memoryGame.pickedCards[0].classList.add('bloqued')
        //     memoryGame.pickedCards[1].classList.add('bloqued')
        //     memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length)
        //   } else {
        //     memoryGame.pickedCards[0].classList.add('back')
        //     memoryGame.pickedCards[1].classList.add('back')
        //     memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length)
        //   }

        // } else {
      } else {

        console.log('finished')

      }

    })

  });

});
