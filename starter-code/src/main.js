var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
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
    html += '  <div class="front" style="background: url(./img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);


  // Bind the click event of each element to a function

  var prevCard = null;
  $('.back').click(function (e) {

    $(this).attr("class", "front")
    $(this).next().attr("class", "back")
  
    var isPair = false;

    if (prevCard !==null){
      isPair = memoryGame.checkIfPair($(this).attr("name"),prevCard.attr("name"));
      console.log($(this).attr("name"),prevCard.attr("name"))
      console.log(isPair);
      if (!isPair ){
        setTimeout (() => {
          $(this).attr("class", "back")
          $(this).next().attr("class", "front")
          //add flip to first card
          prevCard.attr("class", "back")
          prevCard.next().attr("class", "front")
          prevCard = null;
        }, 1000 )  
      } else {
          
          $('#pairs_guessed').text(memoryGame.pairsGuessed)
          prevCard = null;
      }
      $('#pairs_clicked').text(memoryGame.pairsClicked)
      
    } else {
      prevCard = $(this);
    }
    if(memoryGame.isFinished()){
      $('h1').html('YOU WON!')
    } 

  });


});


