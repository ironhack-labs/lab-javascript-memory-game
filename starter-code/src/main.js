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

var memoryGame = new MemoryGame(cards);
$(document).ready(function(){
  
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    
    html += '<div class= "card" data-name="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

// click on .card
// hide back
// add to pickedCards
// feed to checkIfPair
  // if true, keep pair up
  // else false, show back
 
  
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $(".back").on('click',(function() {
    
    
    if (memoryGame.pickedCards.length < 2) {
      $(this).addClass("front clicked").removeClass("back");
      $(this).next().addClass("back").removeClass("front");

      memoryGame.pickedCards.push($(this).parent().attr("data-name"));
      console.log(memoryGame.pickedCards);  
    }
    
    if (memoryGame.pickedCards.length === 2) {
      var isMatch = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
      console.log(isMatch);
      
      
      if (!isMatch) {
        
        setTimeout(function(){ 
          memoryGame.pickedCards = [];
          $(".clicked").addClass("back").removeClass("front");
          $(".clicked").next().addClass("front").removeClass("back");
          isMatch = undefined;
          $(".clicked").removeClass("clicked")
          $("#pairs_clicked").text(memoryGame.pairsClicked);
         }, 1200);
         
      }
      if (isMatch) {
        // rest picked cards array
        memoryGame.pickedCards = [];
        isMatch = undefined;
        $(".clicked").removeClass("clicked")
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
      }
    }

    if (memoryGame.finished()) {
      console.log("you're winner")
      window.alert("you're winner");
    }
    
})); 
});