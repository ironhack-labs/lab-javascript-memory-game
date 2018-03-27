//Array of objects
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

//Start program after DOM is ready
$(document).ready(function(){

  //Creates new object called "memoryGame" that points to "cards" array using a constructor function assigned to a variable called "MemoryGame"
  var memoryGame = new MemoryGame(cards);

  var html = '';

  memoryGame.cards = memoryGame.shuffleCard(cards);
  //Gets each object inside the "cards" array and puts is name and img inside html objects
  memoryGame.cards.forEach(function (pic, index) {
    //console.log(pic, index);
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Adds all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Bind the click event of each element to a function
$('.back').on('click', function (e) {
  $(this).toggleClass("back front");
  $(this).next().toggleClass("front back");

  var currentCard = $(this).parent().attr('id');

  memoryGame.pickedCards.push(currentCard);
  

  if(memoryGame.pickedCards.length == 2){
    var check = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);

/*     if(check === false){
      var changeBackFirst = "#" + $(memoryGame.pickedCards[0]).selector + " > div";
      var changeBackSecond = "." + $(memoryGame.pickedCards[1]).selector;
      
      $(changeBackFirst).toggleClass("front back");
      $(changeBackSecond).next().toggleClass("back front");

      console.log(changeBackFirst, changeBackSecond);
    } */
  }

  

  
});
});


