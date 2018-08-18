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
  
  memoryGame.shuffleCards(); //start shuffled
  
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  
  var lastClicked;
  
  
  // Add all the div's to the HTML
  $('#memory_board').html(html);
  
  // Bind the click event of each element to a function
  $('.back').click(function (e) {
    $(this).next().attr('class', 'back');
    $(this).attr('class', 'front');
    
    if (memoryGame.pickedCards.length < 2) {
      memoryGame.pickedCards.push($(this).parent().attr('data-card-name'));
      if (memoryGame.pickedCards.length === 2 && memoryGame.pickedCards[0] !== memoryGame.pickedCards[1]) {
        lastClicked.attributes[0].textContent = 'back';
        lastClicked.nextElementSibling.attributes[0].textContent = 'front';
        setTimeout(function() {
          e.target.attributes[0].textContent = 'back';
          e.target.nextElementSibling.attributes[0].textContent = 'front';;   
        }, 350);
      }
    } else {
      memoryGame.pickedCards = [];
      memoryGame.pickedCards.push($(this).parent().attr('data-card-name'));
    };
    
    memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
    
    $('#pairs_clicked').html(memoryGame.pairsClicked);
    
    $('#pairs_guessed').html(memoryGame.pairsGuessed);
    
    if (memoryGame.isFinished() === true) {
      setTimeout(() => {
        alert(`You won!\nTotal Guesses: ${memoryGame.pairsClicked}`);
      }, 350); 
    };
    
    lastClicked = e.target;
  });
});