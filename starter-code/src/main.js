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

$(document).ready(function(){
  // Creates current game
  var memoryGame = new MemoryGame(cards);
  // Current game gets the shuffled cards array
  memoryGame.shuffleCard(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
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
  $(this).addClass('just-clicked');
  $(this).addClass('blocked');

  // console.log('what is this', $(this))
  // targeting the unique name attribute for each image
  let imageName = $(this).attr('name')
  console.log('name is', imageName)

  // background: url("images/blah.jpg")
  // using css we are targeting the background property and as a second
  // parameter url concatenated with the imageName, giving us full
  // path to the image itself
  $(this).css('background', "url(img/" + imageName + ")")

  memoryGame.pickedCards.push(imageName);
  // console.log('type is: ', typeof(memoryGame.pickedCards))
  console.log('memoryGame.pickedCards: ', memoryGame.pickedCards);

  // if the length of the array is 2, check if they're a pair
  if(memoryGame.pickedCards.length === 2){
    // console.log('Checking the pairs');
    // our arrau has only two elements giving us the chance to target them
    // through the 0 and 1 position
    let firstOfArray = memoryGame.pickedCards[0];
    let secondOfArray = memoryGame.pickedCards[1];
    // console.log('1: ', firstOfArray, '2: ', secondOfArray)
    // passing the variables to check if they match
    memoryGame.checkIfPair(firstOfArray, secondOfArray)
  }


});
});


