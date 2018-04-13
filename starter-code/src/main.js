var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain-america', img: 'captain-america.jpg' },
  { name: 'fantastic-four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green-arrow',     img: 'green-arrow.jpg' },
  { name: 'green-lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the-avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain-america', img: 'captain-america.jpg' },
  { name: 'fantastic-four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green-arrow',     img: 'green-arrow.jpg' },
  { name: 'green-lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the-avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var currentMemoryGame = new MemoryGame(cards);
  currentMemoryGame.shuffleCard(currentMemoryGame.cards);
  var html = '';
  currentMemoryGame.cards.forEach(function (pic, index) {
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
$('.back').on('click', function() {
    // console.log($(this).attr("name")); 
    // console.log(currentMemoryGame.pickedCards); 
    var nameOfImage = $(this).attr("name");
    $(this).addClass('just-clicked');
    $(this).addClass('blocked');
    currentMemoryGame.pickedCards.push(nameOfImage);
    // console.log(currentMemoryGame.pickedCards);
    $(this).css('background', 'url(img/' + nameOfImage + ')');

    if (currentMemoryGame.pickedCards.length === 2){
      currentMemoryGame.checkIfPair(currentMemoryGame.pickedCards[0], currentMemoryGame.pickedCards[1]);
    }
});
});


