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


document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {

    // TODO: write some code here
    let cardOne = $(this);

    cardOne.toggleClass('back front');
    cardOne.next().toggleClass('back front');
    memoryGame.selectedCards.push(cardOne);

    console.log(">>>>> ", memoryGame.selectedCards)

    if(memoryGame.selectedCards.length == 2){
      if (!memoryGame.checkIfPair(memoryGame.selectedCards[0],memoryGame.selectedCards[1])){
        console.log("the cards match");
        //   cardOne.toggleClass('back front');
        //   cardOne.next().toggleClass('back front');
        test();
      } else {
        memoryGame.selectedCards = [];
      }
    }
    } 
  });


  function test(){
    
    setTimeout(function(){

      memoryGame.selectedCards[0].toggleClass('back front');
      memoryGame.selectedCards[0].next().toggleClass('back front');
      
      memoryGame.selectedCards[1].toggleClass('back front');
      memoryGame.selectedCards[1].next().toggleClass('back front');

      
      // console.log("setTimeout", memoryGame.selectedCards);
      memoryGame.selectedCards = [];
      // console.log("the card array after clearing -------- ", memoryGame.selectedCards)
    }, 500);
      
  }

  
});



      // memoryGame.isFinished();
 
      // if(memoryGame.selectedCards.length % 2  === 0) {
      //  if (memoryGame.selectedCards.length % 3 === 0 ){
      //    test();
      //    memoryGame.selectedCards = [];
      //  }

        // else {
          
        //   console.log("try again");
          
          
        //   // memoryGame.selectedCards = [];
        // }

       
      // }
    // }