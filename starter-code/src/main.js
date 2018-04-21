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
  //create current game
  var memoryGame = new MemoryGame(cards);
//current card get the shuffle card array
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
  $(this).addClass("blocked");


// we are targeting the unique attribute for each image and thats its name
  var nameOfTheImage = $(this).attr("name");
  console.log("name is" , nameOfTheImage);
  // using css we are targeting background property and second parameter we are
  // passing url concatinated with the name of the image giving us
  $(this).css("background" , "url(img/" + nameOfTheImage +")");
memoryGame.pickedCards.push(nameOfTheImage);
  console.log("memoryGame.pickedCards: ", memoryGame.pickedCards);
//if length of array is 2  - check if they match
  if (memoryGame.pickedCards.length===2){
    // console.log("Checking the pairs");
    //checking the pairs
    //id our array has 2 elements it enables us to target them thought
    var firstInArray=memoryGame.pickedCards[0];  
    var secondInArray=memoryGame.pickedCards[1]; 
    //console.log("first i((n the array,")
    memoryGame.checkIfPair(firstInArray, secondInArray);
  }
});
});


