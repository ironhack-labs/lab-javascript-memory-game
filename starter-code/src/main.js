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
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" data-name ="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });
  /*
  html will be 
  <div class= 'card' dta-name='card_thor'>
  <div class= 'back' name= 'thor.jpg'>
  </div>
  <div class='front'.....></div>
  </div>
  */ 
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $('.back').on('click', function () {
    if(memoryGame.pickedCards.length < 2){
      $(this).toggleClass('front back');
      $(this).next().toggleClass('front back');
      $(this).parent().addClass('picked');
      memoryGame.pickedCards.push($(this).parent().attr('data-name'));
      console.log(memoryGame.pickedCards);
    }
    if(memoryGame.pickedCards.length === 2){
      var firstCard = memoryGame.pickedCards[0];
      var secondCard = memoryGame.pickedCards[1];
      var isMatch =  memoryGame.checkIfPair(firstCard, secondCard);
      console.log(isMatch);
      
      //update the scoreboard
      //reset pickedCars array
      memoryGame.pickedCards= [];
      
      //if a pair, do this
      
      
      //if not a pair, flip them back;
      setTimeout(function(){
        if(!isMatch){
          $('.picked').children().toggleClass('front back');
        }
        $('.picked').removeClass('picked')
      },2000);
      
      
      
    }
    
    
    
    
    
  });
  
});


