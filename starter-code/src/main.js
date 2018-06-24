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
  //checamos si el click es en la misma card:
  if($(this).hasClass('active')) return;
    //puchamos la card
   var cardClicked = $(this);
   var name = cardClicked.attr('name');
   memoryGame.pairSelected.push(cardClicked);
   //mostramos
   cardClicked.addClass('active');
   cardClicked.css('background', 'url("img/'+ name +'")');
   //blockeamos y comparamos
   if(memoryGame.pairSelected.length > 1){
    $('.front,.back').addClass('blocked');
    if(memoryGame.checkIfPair(memoryGame.pairSelected[0].attr('name'), memoryGame.pairSelected[1].attr('name'))){
      $('.front,.back').removeClass('blocked');
      memoryGame.pairSelected = [];
      showScore();
      checkIfEnd();

    }else{
      setTimeout(function(){
        memoryGame.pairSelected[0].css('background', '#456783');
        memoryGame.pairSelected[1].css('background', '#456783');
        memoryGame.pairSelected[0].removeClass('active');
        memoryGame.pairSelected[1].removeClass('active');
        memoryGame.pairSelected = []; 
        $('.front,.back').removeClass('blocked');
        $('.front,.back').removeClass('active');
        showScore();
      },1000);

    }

   } // comparacion
}); 


function showScore(){
  //mostramos score
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.pairsGuessed);
}

function checkIfEnd(){
  if(memoryGame.finished()){
    alert("se acabó");
    window.location.reload();
  } 
  
}

});//ready




