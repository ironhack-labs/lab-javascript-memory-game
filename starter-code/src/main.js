var cards = [
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
var memoryGame = new MemoryGame(cards);


document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function(e) {
      e.currentTarget.parentNode.querySelector('.front').className = 'back'
      e.currentTarget.className = 'front'
      e.currentTarget.parentNode.getAttribu = 'back'
      let picture = e.currentTarget.parentNode.getAttribute('data-card-name')
      memoryGame.pickedCards.push(picture)
      console.log(memoryGame.pickedCards.length)
      if (memoryGame.pickedCards.length > 1){
        for (let i = 0; i<memoryGame.pickedCards.length-1; i++){
          if (memoryGame.checkIfPair(memoryGame.pickedCards[i],memoryGame.pickedCards[i+1])){
            document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed
            document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked
          }
          else {
            document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked
          }
        }
      }
    }
    console.log('Card clicked')
  });

  document.querySelectorAll('.front').forEach(function(carta) {
    carta.onclick = function(elem) {
      elem.currentTarget.parentNode.querySelector('.back').className = 'front'
      elem.currentTarget.className = 'back'

      //setTimeout(function () { alert('Soy la información') }, 3000)     
      // e.currentTarget.parentNode.querySelector('.back').className = 'front'
      // e.currentTarget.className = 'back'
    
      console.log('Card clicked')
    }
  });



});


