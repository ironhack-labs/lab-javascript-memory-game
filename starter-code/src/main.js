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

  memoryGame.shuffleCard(cards)
  
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $('.back').on('click', function () {

    if(!$(this).hasClass('match') || !$(this).hasClass('blocked')){

      var img = $(this).attr("name");

      $(this).attr("style","background-image:url(img/"+img+");'");

      $(this).addClass('blocked');

      memoryGame.pickedCards.push(img);

      if((memoryGame.pickedCards).length == 2){

         //Prevent user from clicking multiple times while setTimeout is initiated
        $('#memory_board').addClass('thinking')

        $('#pairs_clicked').text(memoryGame.pairsClicked);

        if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){

          $('#pairs_guessed').text(memoryGame.pairsGuessed);
         
          $('#memory_board').removeClass('thinking');

          $('.back[name="'+memoryGame.pickedCards[0]+'"]').addClass('match');
          $('.back[name="'+memoryGame.pickedCards[1]+'"]').addClass('match');

        }else{

              setTimeout(function(){

                $('.blocked').removeClass('blocked');
                
                $('.back:not(.match)').attr('style','');

                $('#memory_board').removeClass('thinking');
              
              },1000);
        } 
        console.log(memoryGame.finished())
        memoryGame.finished();

        memoryGame.pickedCards = [];

      }
      
    }

  });
});


