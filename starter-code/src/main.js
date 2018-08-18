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
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  var backClick = 0;
  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    // TODO: write some code here
    backClick++;
    if (backClick === 1){
      fistCard = $(this).parent();
      fistCard.children().toggleClass('front back');
    } else if (backClick === 2) {
      secondCard = $(this).parent();
      secondCard.children().toggleClass('front back');
      backClick = 0;            
      if (memoryGame.checkIfPair(fistCard.attr('data-card-name'),
          secondCard.attr('data-card-name'))){
        $('#pairs_guessed').html(memoryGame.pairsGuessed);
      } else {
        setTimeout(function() {
          fistCard.children().toggleClass('front back');
          secondCard.children().toggleClass('front back');
        }, 300);        
      }      
      $('#pairs_clicked').html(memoryGame.pairsClicked);
      if (memoryGame.isFinished()){        
        setTimeout(function(){
          if (memoryGame.pairsClicked == 12){
            alert(`Wow, What a Crack, You made a perfech match!!!!\n\n 12 pairs in ${memoryGame.pairsClicked} attempts!`);
          } else if (memoryGame.pairsClicked < 16){
            alert(`Great, You are rocking!\n\n 12 pairs in ${memoryGame.pairsClicked} attempts!`);
          } else if (memoryGame.pairsClicked < 21){
            alert(`Good, Nice shot!\n\n 12 pairs in ${memoryGame.pairsClicked} attempts!`);
          } else{
            alert(`Come on!, I know you can do it better!!\n\n 12 pairs in ${memoryGame.pairsClicked} attempts!`);
          }          
        },100);
      }
    }      
  });
});