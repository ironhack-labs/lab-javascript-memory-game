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
  let memoryGame = new MemoryGame(cards);
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(function (pic) {

    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.name +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  
  // Add all the div's to the HTML
  $('#memory_board').html(html)
 

  // Bind the click event of each element to a function
  // var arrayTest = [];

  
  $('.back').click(function (e) {
    let pickCard = $(this).attr('name');  
    console.log(pickCard); 
    if (!!memoryGame.firstCard) {
      memoryGame.checkIfPair(memoryGame.firstCard, pickCard);
    }
    memoryGame.firstCard = pickCard;
  });
  
});


// function newFunc(a, b) {
//   console.log(arguments.__proto__);
// }

// console.log( $(this).attr('class')); // return the class name of the card we clicked
// console.log(memoryGame.cards);

// let  = false;
// let firstCard, secondCard;
// function flipCard(){
//   let pickCard = $(this).attr('name');
//   if (!hasFlipped){
//     hasFlipped = true;
//     firstCard = pickCard;
//   }else{
//     hasFlipped = false;
//     secondCard = pickCard;
//   }
//   console.log(firstCard);
//   console.log(secondCard);
// }

 
  //  cards.forEach(card => card.addEventListener, flipCard);