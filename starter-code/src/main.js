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
  //pick cards and shuffle
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';

    
  });
 
  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    //limit number of cards clicked
    if(memoryGame.pickedCards.length < 2){
      //flip cards front and back
      $(this).parent().children().toggleClass("front back");

      //put choose cards in a empty array (picked cards from constructor)
      memoryGame.pickedCards.push($(this).parent());
    
      // check if lenght of array (pickedcards) it's strictly large of 2 
      if(memoryGame.pickedCards.length ===2){ 
        setTimeout(function(){
          firstCard = memoryGame.pickedCards[0].html() //save first card picked
          secondCard = memoryGame.pickedCards[1].html() //save second card picked
            //call function check if pairs
            if(memoryGame.checkIfPair(firstCard, secondCard)){
              memoryGame.pickedCards=[];
                if(memoryGame.isFinished()){
                  alert("You win!!!!!");
                }
            }else{ 
              memoryGame.pickedCards[0].children().toggleClass("front back")
              memoryGame.pickedCards[1].children().toggleClass("front back")
              memoryGame.pickedCards=[];
            }
          //refresh counters
          $("#pairs_clicked").text(memoryGame.pairsClicked);
          $("#pairs_guessed").text(memoryGame.pairsGuessed);
        },500);
        
      }
   }
    
  });
  
});


