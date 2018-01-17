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
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '</div>';
    html += '</div>';
  });
  
  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  memoryGame.shuffleCard(cards);
  
  // Bind the click event of each element to a function
  var card1 = "";
  var card2 = "";
  var count = 0;
  $('.back').on('click', function () { 
    if ((count < 2) &&  ($(this).hasClass("face-up")) === false) {
      
      // increment guess count, show image, mark it as face up
      count++;
      $(this).toggleClass('back').toggleClass('front')
      $(this).next().toggleClass('front').toggleClass('back')
      $(this).addClass("face-up");
      
      //guess #1
      if (count === 1 ) { 
        card1 = $('.face-up').attr("name"); 
      }   
      
      //guess #2
      else { 
        card2 = $('.face-up').attr("name"); 
        
        // since it's the 2nd guess check for match
        memoryGame.checkIfPair(card1, card2);
        memoryGame.finished();
        if (card1==card2 ){ 
          $(this).addClass("match");
        } 
        
        // else it's a miss
        else { 
          setTimeout(function() {
            $(this).not(".match").toggleClass('back').toggleClass('front')
            $(this).not(".match").next().toggleClass('front').toggleClass('back')
            $(this).not(".match").removeClass("face-up");
          }, 1000);
        }
        
        // reset
        count = 0; 
        setTimeout(function() { console.clear(); }, 6000);      
      }
    }
  });
  
});


