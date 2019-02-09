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
    
    //flip cards front and back
    $(this).parent().children().toggleClass("front back");

    //put choose cards in a empty array (picked cards from constructor)
    memoryGame.pickedCards.push($(this).parent());
    
    // check if lenght of array (pickedcards) it's strictly large of 2 and start the game 
    if(memoryGame.pickedCards.length ===2){
      setTimeout(function(){
        //check if two cards are the same or not
        if(!memoryGame.checkIfPair(memoryGame.pickedCards[0].html(), memoryGame.pickedCards[1].html())){
          //save cards clicked and change score board
          $("#pairs_clicked").text(memoryGame.pairsClicked);
          
          var card=memoryGame.pickedCards[0].children()
          card[0].className = "back";
          card[1].className = "front";

          var card1 = memoryGame.pickedCards[1].children()
          card1[0].className = "back";
          card1[1].className = "front";

        }else{ //if the cards are the same, refresh score board with clicked and guessed cards
          $("#pairs_clicked").text(memoryGame.pairsClicked);
          $("#pairs_guessed").text(memoryGame.pairsGuessed);
        }
        memoryGame.pickedCards=[];

      },500);
    }
    if(memoryGame.isFinished()){
      $("#memory_board").html("You win");
    }
  });

});


