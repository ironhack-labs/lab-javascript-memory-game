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
  // create current game
  var memoryGame = new MemoryGame(cards);
  // current game gets the shuffle cards array
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
    $(this).addClass("just-clicked");
    $(this).addClass("blocked");
   // console.log("What is this: ", $(this));
   // we are targeting the unique attribute for each image and that's name
   var nameOfTheImage = $(this).attr("name");
   console.log("name is: ", nameOfTheImage);

   // background: url("imges/blah.jpg")
   // using css we are targeting property and as second parameter we are
   // passing url concatenated with the "nameOfTheImage" and that gives us
   // full path to the real imge
   $(this).css("background", "url(img/" + nameOfTheImage + ")");

   memoryGame.pickedCards.push(nameOfTheImage);
   console.log("memoryGame.pickedCards: ", memoryGame.pickedCards);
   // if the length of the array is 2, check if it is a pair calling .checkIfPair() function
   if(memoryGame.pickedCards.length === 2){
     // console.log("checking the pairs")
     // our array has only two elements which gives us chance to target them through 0 and 1 position
     var firstInArray = memoryGame.pickedCards[0];
     var secondInArray = memoryGame.pickedCards[1];
     //console.log("1: ", firstInArray, "2:", secondInArray)
     // passing the varibles to check if they match
     memoryGame.checkIfPair(firstInArray, secondInArray);
   }
});
});


