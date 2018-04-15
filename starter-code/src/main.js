// Array of card objects which correspond to their images. 
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

// When the document is loaded, do this!
$(document).ready(function(){
  var memoryGame = new MemoryGame(cards); // new Implies a constructor function taking an array as an argument.
  
  memoryGame.shuffleCard(memoryGame.cards);
  
  var html = ''; // ForEach of the cards in the loop, add the following HTML.
  memoryGame.cards.forEach(function (pic, index) { // this.cards = cards - Here we're looping through the array.
    html += '<div class= "card" id="card_' + pic.name + '">'; // Container for the card.

    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">'; // Back of the card.
    html += '</div>';

    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">'; // Front of card + Adds image.
    html += '</div>';

    html += '</div>'; // Closes the container.
  });

  // Add all the div's to the HTML 
  document.getElementById('memory_board').innerHTML = html; 

// Bind the click event listener of each element to a function
$('.back').on('click', function () {

  $(this).addClass('just-clicked');
  $(this).addClass('blocked');
  var nameOfImage = $(this).attr("name");

  memoryGame.currentPair.push(nameOfImage);

  // Adds the image to the card.
  $(this).css('background',"url(img/" + nameOfImage + ")");

  // if this is the first card, do nothing
  // else if this is the second card, compare the two cards.

  if(memoryGame.currentPair.length === 2){
    $('.back').addClass('blocked');
    memoryGame.checkIfPair(memoryGame.currentPair[0], memoryGame.currentPair[1]);
  } 

});
});


