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

var gameOver = false;
var guessArray = [];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
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
//this thing is kinda bad spaghetti code so i'm commenting it so it can be understood
$('.back').on('click', function () {
  //this flips the cards back to blue.
  //we put it here so you can see two cards until you click again.
  if (guessArray.length === 0){
    $(".not-found").css("background", "#456783");
    $(".not-found").toggleClass("not-found");
  }
  //attaches the image to a string then sticks it on the back.
  //i'm not entirely sure why the front div is even here
  //makes me believe there's an easier way to do this.
  var background = 'url(img/' + $(this).attr("name") + ') no-repeat'
  $(this).css("background", background);
  $(this).toggleClass("clicked");
  //we push everything to an array so we can keep track of the first click
  guessArray.push($(this).attr("name"));
  //when the array hits two clicks we do game things
  if (guessArray.length === 2){
    var firstCard = guessArray[0];
    var secondCard = guessArray[1];
    //checks if it's a pair
    var ifPair = memoryGame.checkIfPair(firstCard, secondCard);
    //this if checks if it's a pair and if it hasn't been found yet
    //second bit is all the classes that show up on a found pair at this point
    if (ifPair && $(this).attr("class") !== "back found clicked") {
      console.log($(this).attr("class"))
      $(".clicked").addClass("found");
      $("#pairs_guessed").html(memoryGame.pairsGuessed);
    }
    else {
      $(".clicked").toggleClass("not-found");
    }
    //increment counters and reset
    $("#pairs_clicked").html(memoryGame.pairsClicked);
    $(".clicked").toggleClass("clicked");
    //just pops an alert if you finish
    memoryGame.finished();
    //clears array to go again
    guessArray = [];
  }
});
});
