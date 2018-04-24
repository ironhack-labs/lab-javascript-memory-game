// Cards Array
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


// Ready Function
$(document).ready(function(){
  var theGame = new MemoryGame(cards);
  theGame.shuffleCard(theGame.cards);
  var html = '';
  theGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });


// Add all the div's to the HTML
document.getElementById('memory_board').innerHTML = html;
// Bind the click event of each element to a function
$('.back').on('click', function () {
  $(this).addClass("just-clicked");
  // Block each card after clicking it so you cannot click it again
  $(this).addClass('blocked');
  // Grab the name of the image as a unique identifier we will use to check the pair later
  var nameOfImage = $(this).attr("name");
  // Push the image name into the current pair array
  theGame.currentPair.push(nameOfImage);
  // Change the background from blue to the image
  $(this).css('background', 'url(img/' + nameOfImage + ')')
// Run checkIfPair function when second card gets clicked, otherwise, do nothing
if(theGame.currentPair.length === 2) {
  theGame.checkIfPair(theGame.currentPair[0], theGame.currentPair[1]);
}
});
});


