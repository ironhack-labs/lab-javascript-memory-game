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
  // Bind the click event of each element to a 
 
  var pickedCardCount = 0;
  var firstCard;
  var secondCard;
$('.card').on('click', function () { 
   $(this.children).toggleClass('back front');
  
  if (pickedCardCount === 0){
    pickedCardCount =+ 1; 
    firstCard = this;
    return false
  }
  else { secondCard = this
   var id1 = ($(firstCard).attr('id'))
   var id2 = ($(secondCard).attr('id'))
   if (id1 === id2){
     console.log("CORRECT");
   pickedCardCount= 0; 
   
     return true
   }
   else { console.log("NOPE");

   setTimeout(
    function() 
    {
      $(secondCard.children).toggleClass('back front');
      $(firstCard.children).toggleClass('back front');
     
    }, 500);

   pickedCardCount = 0; 
   return false}
  }

   
});
});


