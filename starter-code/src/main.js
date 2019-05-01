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
  { name: 'green console.log("Diferentes!")lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);


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


  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function (card) {

    card.onclick = e => {
      // TODO: write some code here
      const cardSelected = e.currentTarget
      const nameImage = cardSelected.getAttribute('name')

      // Girar la carta
      cardSelected.className = "front fliped"
      cardSelected.parentNode.children[1].className = "back"

      // Introducir la carta en el array
      memoryGame.pickedCards.push(nameImage)

      const longitudPickedCards = memoryGame.pickedCards.length
      let comparaPair

      // Comprobar si es la -segunda- carta a comprobar
      if (longitudPickedCards % 2 === 0) {
        comparaPair = memoryGame.checkIfPair(memoryGame.pickedCards[longitudPickedCards - 2], memoryGame.pickedCards[longitudPickedCards - 1])

        if (comparaPair === false) {
          // memoryGame.pickedCards = []
          const a = setTimeout(unflip, 1000)
        }

      }

    }
  });
});



function unflip() {

  document.querySelectorAll('.fliped').forEach(function (card) {
    card.className = "back"
    card.parentNode.children[1].className = "front"
  })

}