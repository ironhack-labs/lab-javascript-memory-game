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
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    flip($(this));   
    memoryGame.pickedCards.push($(this));  
    pairs();
    points();    
    memoryGame.isFinished()
    

   
  });
  
 function flip(card){
  card.toggleClass("front").toggleClass("back");
  card.siblings().toggleClass("front").toggleClass("back");
 }
 
 function pairs(){
  if (memoryGame.pickedCards.length === 2){
    var card1 =  memoryGame.pickedCards[0];
    var card2 = memoryGame.pickedCards[1];
      if(memoryGame.checkIfPair(card1 ,card2)===false){
        setTimeout(function (){flip(card1)},700);
        setTimeout(function (){flip(card2)},700);
        memoryGame.pickedCards = []; 
      }else{
        memoryGame.pickedCards = [];
      }
    }
 }
 function points(){
   document.querySelector("#pairs_clicked").innerText = memoryGame.pairsClicked;
   document.querySelector("#pairs_guessed").innerText = memoryGame.pairsGuessed;
 }
}
);


