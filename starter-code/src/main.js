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
  var numClics = 1, numPairs = 0;
  var cardOne="", cardTwo="", cardNameOne="", cardNameTwo="";
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {    
    if(memoryGame.isFinished()){
      alert("¡G A N A S T E !");
      return;
    }
    $(this).removeClass();
    $(this).addClass('front');
    $(this).next().removeClass();
    $(this).next().addClass('back');
    if(numClics == 2) {
      cardNameTwo = $(this).parent().data('card-name');
      $(this).attr('id','secondCardFront');
      $(this).next().attr('id','secondCardBack');
      numClics = 1;
    }
    else {
      cardNameOne = $(this).parent().data('card-name');
      $(this).attr('id','firstCardFront');
      $(this).next().attr('id','firstCardBack');
      numClics += 1;
    }
    if(memoryGame.checkIfPair(cardNameOne,cardNameTwo)){    
      $('#pairs_guessed').html(memoryGame.pairsGuessed);
    }else{
      $('#pairs_clicked').html(memoryGame.pairsClicked);
      if(cardNameTwo != ''){
        $('#firstCardFront').removeClass();
        $('#firstCardFront').addClass('back');
        $('#firstCardBack').removeClass();
        $('#firstCardBack').addClass('front');
        $('#firstCardBack').removeAttr('id');
        $('#firstCardFront').removeAttr('id');
        $('#secondCardFront').removeClass();
        $('#secondCardFront').addClass('back');
        $('#secondCardBack').removeClass();
        $('#secondCardBack').addClass('front');
        $('#secondCardBack').removeAttr('id');
        $('#secondCardFront').removeAttr('id');
        cardNameOne = '';
        cardNameTwo = '';
      }
    }
  });
});


