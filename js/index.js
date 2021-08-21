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
let pairsClicked = document.getElementById('pairs-clicked');
let pairsGuessed = document.getElementById('pairs-guessed');
// pairsClicked.innerHTML = memoryGame.pairsClicked;
// pairsGuessed.innerHTML = memoryGame.pairsGuessed;

memoryGame.shuffleCards();


window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      
      // turn a maximum of 2 cards 
      card.classList.toggle('turned', (memoryGame.pickedCards.length < 2));
      // add the picked cards to the pickedCards array
      memoryGame.pickedCards.push(card);
      
      if (memoryGame.pickedCards.length === 2) {
        //call the checkIfPair on pickedCards[elements]
        let card1 = memoryGame.pickedCards[0].getAttribute('data-card-name')
        let card2 = memoryGame.pickedCards[1].getAttribute('data-card-name')
        let match = memoryGame.checkIfPair(card1, card2)

        if (!match) {
          setTimeout(() => {
            memoryGame.pickedCards.forEach((card) => {
              card.classList.toggle('turned');
            })
          }, 1500);
        } else {
          card.classList.toggle('blocked');
        }
        memoryGame.pickedCards.splice(0, 2);
      }

      //function to "alert" a gif if game is won (source: https://www.py4u.net/discuss/288883)
      function alertImage(imgsrc) {
        $('.d').css({
            'position': 'absolute',
            'left': '50%',
            '-webkit-transform': 'translate(-50%, 0)'
        });
        $('.d').animate({
            opacity: 0
        }, 0)
        $('.d').animate({
            opacity: 1,
            top: "500px"
        }, 500)
        $('.d').append('<br><img src="' + imgsrc + '">')
        $('.b').css({
          'position':'absolute',
          '-webkit-transform': 'translate(-100%, -100%)',
          'top':'100%',
          'left':'100%',
          'display':'inline',
          'width':'66',
          'height':'33'
        })
        }

      if (memoryGame.checkIfFinished() === true) {
        alertImage('../img/giphy-match.gif')
      }
      //console.log(`Card clicked: ${card}`);
    });
  });
});
    
