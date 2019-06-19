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
  // $('.back').click(function() {
  //   let currentCard = $(this)[0].attributes.name.value;
  //   $(this).css('backgroundImage', `url(img/${currentCard})`)
  // })
  
  // function checkIfPair(card, cardd){
    // function flipFlap (front , back){
    //    ($this).toggleClass(".back", 1000);
    // }
    $('.back').click(function() {
      let currentCard = $(this)[0].attributes.name.value;
      let anotherCard = $(this)[0].attributes.name.value;
      
      if (currentCard === anotherCard){

        $(this).css('backgroundImage', `url(img/${currentCard})`);
      }
    //     memoryGame.selectedCards.push(currentCard);
    //     memoryGame.isFinished();
    console.log(anotherCard);
  });
  

      // function flapFlip(front, back){
      //   (".back").toggleClass(".front",1000);
      // }
    
  

      
  //   let card1= $(this)[0].attributes.name.value;
  //   let card2= $(this)[0].attributes.name.value;
  //   if ($card1.name === $card2.name){
  //     $(this).css('backgroundImage', `url(img/${currentCard})`)
  //   }
  //   else {
  //     $(this).css('background-color', ("#456783"))
  //   }
  // }
    
    


});
