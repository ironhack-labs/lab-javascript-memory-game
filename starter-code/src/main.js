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
// create a memory game
var memoryGame = new MemoryGame(cards);




// waits for page to be loaded , can start jquery under here 
// why : what else does this do for me
document.addEventListener("DOMContentLoaded", function (event) {

  var htmlToDisplayCards = '';

  memoryGame.cards.forEach(function (pic) {

    //  why :  data-card-name 
    htmlToDisplayCards += '<div class="card" data-card-name="' + pic.name + '">';
    htmlToDisplayCards += '  <div class="back" name="' + pic.img + '"></div>';
    htmlToDisplayCards += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    htmlToDisplayCards += '</div>';

  });

  // Add all the div's to the HTML
  // javascript way 
  // document.querySelector('#memory_board').innerHTML = htmlToDisplayCards;

  // jquery way
  $('#memory_board').html(htmlToDisplayCards);

  //  Why didn't this work, sytax from w3
  // $('#memory_board').html = htmlToDisplayCards;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function (card) {
    card.onclick = function () {
      
      // console.log('Card clicked', card);

      // add a just-clicked class to the clicked card

      // javascript
      // card.classList.add("just-clicked");

      // jquery
      $(card).addClass("just-clicked");

      // add a class blocked to the clicked card

      //javascript
      // card.classList.add("blocked");

      // jquery
      $(card).addClass("blocked");


      
      // // javascript
      // let cardName = card.getAttribute("name");

      // // jquery, returns value of attribute specified
      let cardName = $(card).attr('name');
      

      card.style.background = `url(img/${cardName})`;

      memoryGame.pickedCards.push(cardName);
      // console.log(memoryGame.pickedCards);

      if (memoryGame.pickedCards.length === 2) {
        let firstInArr = memoryGame.pickedCards[0];
        let secondInArr = memoryGame.pickedCards[1];
        memoryGame.checkIfPair(firstInArr, secondInArr);
      }
    }
  });

});


