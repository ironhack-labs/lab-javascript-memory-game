var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captainamerica', img: 'captain-america.jpg' },
  { name: 'fantasticfour',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'greenarrow',     img: 'green-arrow.jpg' },
  { name: 'greenlantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'theavengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captainamerica', img: 'captain-america.jpg' },
  { name: 'fantasticfour',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'greenarrow',     img: 'green-arrow.jpg' },
  { name: 'greenlantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'theavengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();


document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '<div class="back" id="'+ pic.name +'" name="'+ pic.name +'"></div>';
    html += '<div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      // TODO: write some code here
      console.log('Card clicked')
      card.setAttribute("class", "front blocked");
      card.nextSibling.setAttribute("class", "back blocked");

      memoryGame.pickedCards.push(card.getAttribute("name"));

      if (memoryGame.pickedCards.length === 2)
      {
        debugger
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]))
        {setTimeout(() => {
          document.querySelector(`#${memoryGame.pickedCards[0]}`).className = "back";
          document.querySelector(`#${memoryGame.pickedCards[0]}`).nextSibling.className = "front";
          document.querySelector(`#${memoryGame.pickedCards[1]}`).className = "back";
          document.querySelector(`#${memoryGame.pickedCards[1]}`).nextSibling.className = "front";
          memoryGame.pickedCards = [];}, 2000)
        }
        else
        {memoryGame.pickedCards = [];}
      }
    }
  });
});


