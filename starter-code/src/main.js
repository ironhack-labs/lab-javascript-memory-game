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
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  
  $('#memory_board').html(html);
  
  // var originalState = $("#some_div").clone();
  // $("#some_div").replaceWith(originalState.clone());

  // Bind the click event of each element to a function
  $('.back').click(function () {
    console.log($(this))

    let name = $(this).attr("name");    
    let cardClone = $(this).clone();
    
    // TODO: write some code here

    $(this).next().addClass('back')    
    $(this).next().removeClass('front')    
    $(this).removeClass('back')
    $(this).addClass('front')
    
    memoryGame.pickedCards.push(name);
    console.log(memoryGame.pickedCards)
    if(memoryGame.pickedCards[1]){
      console.log(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]))    
      memoryGame.pickedCards = [];
      setTimeout(function(){
        console.log('inside')
        console.log(cardClone);
        console.log($(name))
        $(name).replaceWith(cardClone)
      }, 300)
    }

  });
});


