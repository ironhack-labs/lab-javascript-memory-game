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
  

  var count = 0;

  function startGame () {

    var html = '';
    memoryGame.shuffleCards(memoryGame.cards);
  
    memoryGame.cards.forEach(function (pic) {
      html += '<div class="card" data-card-name="'+ pic.name +'">';
      html += '  <div class="back" name="'+ pic.img +'"></div>';
      html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
      html += '</div>';
    });
  
    // Add all the div's to the HTML
    $('#memory_board').html(html);

  }


  function updateValues() {
    $('#pairs_clicked').html(memoryGame.pairsClicked);
    $('#pairs_guessed').html(memoryGame.pairsGuessed);
  }

  startGame();
  updateValues();
  


  // Bind the click event of each element to a function
  $('.back').on('click', function (event) {

      count++;

      $(event.target).removeClass('back');
      $(event.target).next().removeClass('front');
     
      $(event.target).addClass('front');
      $(event.target).next().addClass('back');

      var attribute = $(event.target).parent().attr('data-card-name');
      var index = $(event.target).parent().index();

      if (count < 2) {
        memoryGame.pickedCards.push({attribute,index});
      } else {
   
        memoryGame.pickedCards.push({attribute,index});

        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0]['attribute'],memoryGame.pickedCards[1]['attribute'])) {


            $('#pairs_clicked').html(memoryGame.pairsClicked);
            setTimeout(function(){
              console.log(memoryGame.pickedCards);
              for (var i = 0; i < memoryGame.pickedCards.length; i ++) {
                $(`.card:eq(${memoryGame.pickedCards[i]['index']})[data-card-name="${memoryGame.pickedCards[i]['attribute']}"]`).children(`:eq(${0})`).removeClass('front');
                $(`.card:eq(${memoryGame.pickedCards[i]['index']})[data-card-name="${memoryGame.pickedCards[i]['attribute']}"]`).children(`:eq(${1})`).removeClass('back');
                $(`.card:eq(${memoryGame.pickedCards[i]['index']})[data-card-name="${memoryGame.pickedCards[i]['attribute']}"]`).children(`:eq(${0})`).addClass('back');
                $(`.card:eq(${memoryGame.pickedCards[i]['index']})[data-card-name="${memoryGame.pickedCards[i]['attribute']}"]`).children(`:eq(${1})`).addClass('front');
              }
         
              memoryGame.pickedCards = [];

            },1000)

            
  
        } else {

          $('#pairs_clicked').html(memoryGame.pairsClicked);
          $('#pairs_guessed').html(memoryGame.pairsGuessed);

          memoryGame.pickedCards = [];

          if (memoryGame.isFinished()) {
            console.log('LO HAS CONSEGUIDO!!');
          }

        }

        count = 0;
    
      }

    
      
      
     
  });

});

 
