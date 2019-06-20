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

  // Adds all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Binds the click event of each element to a function
  // document.querySelectorAll('.back').forEach(function(card) {
  //   card.onclick = function() {
  //   console.log(card.parentElement)
  //   }
  // }); 
  
  $('.back').click(function(){

    console.log(memoryGame.clickedCards)

      $(this).removeClass('back').addClass('front')  // flips card
      $(this).siblings('.front').removeClass('front').addClass('back')

      // let pairsGuessed = Number($('#pairs_guessed').innerHTML)
      // pairsGuessed = 50;
      // console.log(pairsGuessed)
      // let pairsClicked = Number($('#pairs_clicked').text())
      // console.log(pairsClicked)
      
    memoryGame.clickedCards.push(this) //pushes to array
    // console.log("---- ", memoryGame.clickedCards)

    let card1 = memoryGame.clickedCards[0] // references the card within the array
    let card2 = memoryGame.clickedCards[1]
    
    if(memoryGame.clickedCards.length == 2) {  //checks if array has 2 cards   
      if(!memoryGame.checkIfPair(card1, card2)) { //if it does it checks if the cards have the same value
        setTimeout(() => {  //if they do not, it flips both cards back with a timer
              
          $(card1).removeClass('front').addClass('back')
          $(card1).siblings('.back').removeClass('back').addClass('front')
          
          $(card2).removeClass('front').addClass('back')
          $(card2).siblings('.back').removeClass('back').addClass('front') 
          
        }, 300)
      } else {
        
        memoryGame.guessed += 1;
        $('#pairs_guessed').text(memoryGame.guessed)
        
        // console.log("guessed  ", pairsGuessed)
      }

      memoryGame.clicked += 1 
      $('#pairs_clicked').text(memoryGame.clicked)  

      memoryGame.clickedCards = []  // if they do match, it clears the code and leaves the cards alone
    }

    
      
    


  });














});



