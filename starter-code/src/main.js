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
var g;
$(document).ready(function(){
 g = new MemoryGame(cards);
  var html = '';
  g.cards.forEach(function (pic, index) {
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
  // document.getElementById('memory_board').innerHTML = html;
  $('#memory_board').html(html);
  // Bind the click event of each element to a function
$('.back').on('click', function () {
  if(g.pickedCards.length >=2)
  return;
 
  g.pickedCards.push($(this).parent().attr('id'));
   $(this).parent().addClass('picked');
   $(this).parent().children().toggleClass("front back");
  
  if (g.pickedCards.length==2){
   if(!g.checkIfPair(g.pickedCards[0],g.pickedCards[1])){
     setTimeout(function(){
    $('.card.picked').children().toggleClass('front back');
    $('.card.picked').removeClass('picked');
    g.pickedCards =[];
    },1000);
    }
    else{
      $(".card.picked").removeClass('picked');
    g.pickedCards=[];
    }
  }
  updateScore(g);
  })
  });
  function updateScore(g){
    $('#pairs_clicked').text(g.pairsClicked);
    $('#pairs_guessed').text(g.pairsGuessed);
  }




