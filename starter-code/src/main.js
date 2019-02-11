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
  console.log(cards.length)
  memoryGame.shuffleCards();
  console.log(cards.length)
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic[0].name +'">';
    html += '  <div class="back" name="'+ pic[0].img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic[0].img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function(){
    // TODO: write some code here
    if(memoryGame.pickedCards.length == 2) return;
    //Push to pickedCards array
    memoryGame.pickedCards.push($(this));
    
    //Flip picked card
    $(this).toggleClass('front');
    $(this).siblings().toggleClass('back');
    $(this).toggleClass('back');
    $(this).siblings().toggleClass('front');
    
    //If two cards are picked, compare them
    if(memoryGame.pickedCards.length == 2){
      
      //If they are not a pair, turn them back over, but wait 1 second first so that they can be memorized
      setTimeout(()=>{
        if(!memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('name'), memoryGame.pickedCards[1].attr('name'))){
          
          //Turn back over most recently picked card
          $(this).siblings().toggleClass('front');
          $(this).toggleClass('back');
          $(this).siblings().toggleClass('back');
          $(this).toggleClass('front');

          //Turn back over previously picked card
          memoryGame.pickedCards[0].siblings().toggleClass('front');
          memoryGame.pickedCards[0].toggleClass('back');
          memoryGame.pickedCards[0].siblings().toggleClass('back');
          memoryGame.pickedCards[0].toggleClass('front');
          
        } else{

          //Update pairsGuessed display in DOM
          $('#pairs_guessed')[0].innerText = memoryGame.pairsGuessed;
        }
        
          //Update pairsClicked display in DOM
          $('#pairs_clicked')[0].innerText = memoryGame.pairsClicked;

          //Reset pickedCards
          memoryGame.pickedCards = [];

          //Check if you've won
          if(memoryGame.isFinished()){
            alert('You win!');
          }

      }, 1000);
      
      

    }

    
  });
});


