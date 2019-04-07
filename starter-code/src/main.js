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
memoryGame.shuffleCards();

var cardA = null;
var cardB = null;
var cardAParent = null;
var cardBParent = null;

function toggleCards(cardToToggle, toBlock = false){
  if(toBlock){
    cardToToggle.classList.toggle('front.blocked');
    cardToToggle.classList.toggle('back.blocked');
    cardToToggle.nextSibling.classList.toggle('front.blocked');
    cardToToggle.nextSibling.classList.toggle('back.blocked');  
  }
  else{
  cardToToggle.classList.toggle('back');
  cardToToggle.classList.toggle('front');
  cardToToggle.nextSibling.classList.toggle('back');
  cardToToggle.nextSibling.classList.toggle('front');}
};

function blockCards(cardToBlock){
  toggleCards(cardToBlock, true);
}

function resetBoard(){
  document.querySelectorAll('.card').forEach(function(card){
    card.childNodes.forEach(element => {
      element.classList.toggle('front.blocked');
      element.classList.toggle('back.blocked');
      element.classList.toggle('back');
      element.classList.toggle('front');
    });
  });
  memoryGame.pairsClicked = 0;
  memoryGame.pairsGuessed = 0;
  document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed;
  document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked;
  alert("Bien hecho!!");
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '<div class="back" name="'+ pic.img +'"></div>';
    html += '<div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      // TODO: write some code here
      if (card.parentNode.hasAttribute("data-card-name")) {      
        console.log('Card clicked ' + card.parentNode.getAttribute("data-card-name") );
        if (!cardA) {
          cardA = card;
          cardAParent = card.parentNode;
          toggleCards(card);
        } 
        else if(!cardB) {
          cardB = card;
          cardBParent = card.parentNode;
          toggleCards(card);
        }
        
        
        if(cardA != null && cardB != null){     

          if( memoryGame.checkIfPair(cardAParent.getAttribute("data-card-name"), cardBParent.getAttribute("data-card-name")) ) {
            console.log('Iguales');

            blockCards(cardA, true);
            blockCards(cardB, true);
            cardA = null;
            cardB = null;
            cardAParent = null;
            cardBParent = null;
            setTimeout(function(){
              if(memoryGame.isFinished()){                
                resetBoard();
              }
            }, 500);            
          }
          else {
            console.log('Distintas');
            
            setTimeout(function(){             
              toggleCards(cardA);
              toggleCards(cardB); 
              cardA = null;
              cardB = null;
              cardAParent = null;
              cardBParent = null;
            }, 500);
            //sleep(500);
            
          }

        }
        document.getElementById("pairs_guessed").innerHTML = memoryGame.pairsGuessed;
        document.getElementById("pairs_clicked").innerHTML = memoryGame.pairsClicked;
      } 
      
      
    }
  });
});


