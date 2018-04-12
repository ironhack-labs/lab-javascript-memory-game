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

  // creating a contructor function, pass it in a array, (cards)
  // cards array brough in arguement
  var theGame = new MemoryGame(cards);
  theGame.shuffleCard(theGame.cards);
  //principle of encapsulation, function of memory game should be accessed through the object
  var html = '';
  //.forEach passes through cards array
  // each card passed, html += code is run through the foreach func.
  //imp. card_superman(line 1)
  // back=blue side card
  //first 3, back card, laster 3 html-front styling card
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
  //^loads content on page
  // Bind the click event of each element to a function
  //clicking the back of card function.
  //using If function to compare to check if a pair. Create a variable/class property 
$('.back').on('click', function () {
  //first, push in card to predefined array
  $(this).addClass("just-clicked");
  $(this).addClass("blocked");
  
  var nameOfImage = $(this).attr("name");
  //adding a class to target back
  // console.log(theGame.currentPair);
  theGame.currentPair.push(nameOfImage);
  // console.log(theGame.currentPair);
  $(this).css('background',  "url(img/" + nameOfImage + ") " );
  // ^flip card action, targeting css
  // targeting css to show front of card (background) and pushing

  // if this is the first card, just chill
  // else if this is the second card, comapre the two
  // skipping length 1
  if(theGame.currentPair.length === 2){
    theGame.checkIfPair(theGame.currentPair[0], theGame.currentPair[1]);
  }


 
//if not curtain what This is grabbing

//what pushes in will have to access through html
//
   
});
});


