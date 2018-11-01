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
  memoryGame.cards = memoryGame.shuffleCards(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  
  
  
  let countForClicks = 0;
  let countForGuessed = 0;
  
  $('.back').click(function(){
    
    $(this).addClass('front').removeClass('back');
    $(this).siblings().addClass('back').removeClass('front');

    
    
    memoryGame.pickedCards.push($(this));
    
    if (memoryGame.pickedCards.length == 2){

      $('.back').addClass('blocked');

      $('.back').click(function(){
        event.preventDefault()
      })
      countForClicks += 1;
      $('#pairs_clicked').text(countForClicks);
      
      if (memoryGame.pickedCards[0].attr('name') === memoryGame.pickedCards[1].attr('name')){
        countForGuessed += 1;
        $('#pairs_guessed').text(countForGuessed);
        memoryGame.pickedCards = new Array();
      } else {


        
        
        setTimeout(()=>{
          
          memoryGame.pickedCards[0].addClass('back').removeClass('front');
          memoryGame.pickedCards[0].siblings().addClass('front').removeClass('back');
  
          memoryGame.pickedCards[1].addClass('back').removeClass('front');
          memoryGame.pickedCards[1].siblings().addClass('front').removeClass('back');
          

          memoryGame.pickedCards = new Array();

          $('.back').removeClass('blocked');

    
        }, 500);
      };
    }

    

    
  })



});
  
  
  
  