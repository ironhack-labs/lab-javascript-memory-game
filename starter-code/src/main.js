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
 // console.log(cards)
 
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += 'name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });
  ;

  var pairs = [];

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html
  // Bind the click event of each element to a function
$('.back').on('click', function () {

 //var name = $(this).attr('name');
pairs.push($(this))
$(this).toggleClass('back');
$(this).next().toggleClass('back')


if (pairs.length === 2)
{
    $('#memory_board').addClass('blocked')
    if(memoryGame.checkIfPair(pairs[0].attr('name'),pairs[1].attr('name'))){
      pairs = [];
      $('#memory_board').removeClass('blocked')

      updateScore()
      if(memoryGame.finished()){
        $('h1').text('GANASTE!!!!');
      }
    }

  setTimeout(function(){
pairs[0].toggleClass('back');
pairs[0].next().toggleClass('back');
pairs[1].toggleClass('back');
pairs[1].next().toggleClass('back');
pairs = [];

$('#memory_board').removeClass('blocked')
  },500);//TIEMPO QUE PERMANECE VOLTEADO
   updateScore()
}

function updateScore(){
  $('#pairs_clicked').text(memoryGame.pairsClicked);
  $('#pairs_guessed').text(memoryGame.pairsGuessed);
}


})


})
