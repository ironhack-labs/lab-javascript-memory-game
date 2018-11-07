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
 //memoryGame.shuffleCards()
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(./img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';

  });
 
  // Add all the div's to the HTML
  $('#memory_board').html(html);
 
  // Bind the click event of each element to a function
  $('.back').click(function () {
    //memoryGame.pickedCards.push()
    // this.getAttribute('name')
    
    if(memoryGame.pickedCards.length < 2){
      memoryGame.pickedCards.push (this.getAttribute('name'))
      $(this).removeClass('back')
      $(this).addClass('front')
      //$(this).next().removeClass('front')
      $(this).next().addClass('back')
      $('#pairs_clicked').text(memoryGame.pairsClicked)

    }else{
      memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])
      console.log( memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])  )
      memoryGame.pickedCards = []
      $('#pairs_guessed').text(memoryGame.pairsGuessed)

    }
  });

  $('.front').click(function () {

    $(this).removeClass('front')
    $(this).addClass('back')
    $(this).next().addClass('front')
    
    
    
  });

  


});


