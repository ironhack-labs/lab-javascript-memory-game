var cards = [
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

var memoryGame = new MemoryGame(cards);

let arr = []

memoryGame.shuffleCards()

document.addEventListener("DOMContentLoaded", function (event) {
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // check si changer l'ordre fonctionne

  let firstCard;
  let secondCard;

  const startTime = (e) => {

    let pc = document.getElementById('pairs_clicked')
    let pg = document.getElementById('pairs_guessed')
    pc.innerHTML = memoryGame.pairsClicked
    pg.innerHTML = memoryGame.pairsGuessed
    let back = e.target
    console.log(back)
    let image = e.target.parentNode.lastChild;
    let back_value = back.getAttribute('name')

    if (memoryGame.pairsClicked == 0) {
      firstCard = back;
      firstImage = image;
      memoryGame.pickedCards.push(back_value)
      memoryGame.pairsClicked += 1;
    }
    else if (memoryGame.pairsClicked == 1) {
      secondCard = back;
      secondImage = image;
      memoryGame.pickedCards.push(back_value)
      memoryGame.pairsClicked += 1;
    }


    if (memoryGame.pairsClicked == 2) {


      if (memoryGame.checkIfPair()) {

        firstCard.classList.toggle('front')
        firstCard.classList.toggle('back')
        firstImage.classList.toggle('front')
        firstImage.classList.toggle('back')
        secondCard.classList.toggle('front')
        secondCard.classList.toggle('back')
        secondImage.classList.toggle('front')
        secondImage.classList.toggle('back')



      }
    }



    back.classList.toggle('front')
    back.classList.toggle('back')
    image.classList.toggle('front')
    image.classList.toggle('back')


    setTimeout(() => {

      back.classList.toggle('front')
      back.classList.toggle('back')
      image.classList.toggle('front')
      image.classList.toggle('back')


    }, 500)
  }

  document.querySelectorAll('.back').forEach(function (card) {
    card.onclick = function (e) {
      startTime(e)
    }
  });
});





