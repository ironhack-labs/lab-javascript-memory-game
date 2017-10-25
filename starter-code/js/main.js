// memory.js
// ...other code
$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';
  var timeOut;
  memoryGame._shuffleCards();
  // SHUFFLE!
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });
  document.getElementById('memory_board').innerHTML = html;
  // Lets change visual!
  $('.back').css({"border-radius": "50%"});
  $('.front').css({"border-radius": "50%"});
  $('#score').css({
    'padding':0,
    "margin-left":0,
    "width": '75%',
    "margin": '0 auto',
    'margin-bottom': '25px'
  });
  $('h1').css({ 'margin-bottom':'15px'});
  $('h2').css({ 'margin':0,'width':'17%','display':'inline-block'});
  $('#score > p').css({ 'display': 'inline-block',
                      'color': 'white',
                    'margin' : '0',
                      'width': '20%',
                'margin-top' : '4px',
                'text-align' : 'right',
               'margin-left' : '20px',
                    'margin' : '0',
            'vertical-align' : 'top',
                'margin-top' : '10px'});
  // Add all the divs to the HTML
  $('#reset').on('click',function(){
    console.log("hey!");
    location.reload();
  });
  // Here start the magic
  $('.card').on('click', function(){
    // AntiClick in same image
    console.log($(this).children().hasClass("playing"));
    console.log($(this).children().hasClass("pair"));
    if(!$(this).children().hasClass("playing") && !$(this).children().hasClass("pair")){
      // If there is 3 cards (4 classes) waiting timeout, make timeout
      if($('.playing').length>=4){
        clearTimeout(timeOut);
        unflip();
        console.log("HEY!");
      }else{
        var status = memoryGame.selectCard($(this).children().attr("name"));
        $(this).children().toggleClass("back front");
        $(this).children().addClass("playing");
        if(status == 3){
          clearTimeout(timeOut);
          memoryGame.finished();
          console.log("GAME OVER!");
        }else if(status == 2){
          // Waiting for the next, more than 4 seconds? bad luck
          timeOut = setTimeout(function(){
            console.log('timeout! Try again');
            unflip();
            setInterval(function(){
            })
          ; }, 2500);
          console.log("Lets go! Search a pair");
        }else if(status == 1){
          // Not flip and next (here put animation)
          clearTimeout(timeOut);
          $(".playing").addClass("pair");
          $(".playing").removeClass("playing");
          console.log("YEAH!!");
        }else if(status == 0){
          // Different, unflip
          clearTimeout(timeOut);
          setTimeout(function(){
            unflip();
          ; }, 1000);
          console.log("LOOOSER! ;)");
        }
      }
    }
  });
});

function unflip(){
  $(".playing").toggleClass("back front");
  $(".playing").removeClass("playing");
  memoryGame.timeout();
}

// ...other code
