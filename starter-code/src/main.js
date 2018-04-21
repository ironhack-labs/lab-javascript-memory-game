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
  // creates current game 
  var memoryGame = new MemoryGame(cards);
  // current game get the shuffled cards array
  memoryGame.shuffleCard(memoryGame.cards);

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
  $(this).addClass("just-clicked");
  $(this).addClass(" blocked");
  //  console.log("what is this: ",$(this));
  var nameOfTheImage = $(this).attr("name");
  // console.log("name is: ", nameOfTheImage);
  // using css we are targeting background propoerty and as a second parameter we are passing url concatenated with the "nameOfTheImage" and that gives us full path .
  $(this).css("background","url(img/" + nameOfTheImage + ")");
  memoryGame.pickedCards.push(nameOfTheImage);
  console.log("memoryGame.pickedCards:", memoryGame.pickedCards);

  
  if(memoryGame.pickedCards.length === 2){
    console.log("checking the pairs");
    var firstInTheArray = memoryGame.pickedCards[0];
    // console.log("");
    var secondInThArray = memoryGame.pickedCards[1];
    // console.log("1: ",firstInTheArray, "2: ", secondInThArray);
    memoryGame.checkIfPair(firstInTheArray,secondInThArray);
  }

});
});


