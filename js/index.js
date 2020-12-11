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



  console.log(document.querySelectorAll('.card'))

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {

      card.setAttribute('class', 'card turned');
      memoryGame.pickedCards.push(card.attributes[1].nodeValue)

      if(memoryGame.pickedCards.length === 2){
        
        let firstCard = memoryGame.pickedCards[0]
        let secondCard = memoryGame.pickedCards[1]
        
        if(!memoryGame.checkIfPair(firstCard,secondCard)){
          
          setTimeout(() => {
            document.querySelectorAll(`[data-card-name='${firstCard}']`).forEach(element => {
              element.setAttribute('class', 'card');
            })
            document.querySelectorAll(`[data-card-name='${secondCard}']`).forEach(element => {
              element.setAttribute('class', 'card');
            })
          }, 1000)
          
          memoryGame.pickedCards = []
        }
        else{
          memoryGame.pickedCards[0].className='card turned'
          memoryGame.pickedCards[1].className='card turned'
          
          memoryGame.pickedCards = []
        }
      }

      document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked
      document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed


      memoryGame.isFinished() ?  alert('Congratulations, you should be proud or not...') : false

    });
  });
});

