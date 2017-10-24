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
  // Lets change visual!
  $('.back').css({"border-radius": "50%"});
  $('.front').css({"border-radius": "50%"});
  // Add all the divs to the HTML
  //document.getElementById('memory_board').innerHTML = html;
  $('.card').on('click', function(){
    // AntiClick in same image
    if(!$(this).children().hasClass("playing")){
      var status = memoryGame.selectCard(
        $(this).children().attr("name"));
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
          memoryGame.timeout();
          unflip();
          setInterval(function(){

          })
        ; }, 4000);
        console.log("Lets go! Search a pair");
      }else if(status == 1){
        // Not flip and next (here put animation)
        clearTimeout(timeOut);
        $(".playing").addClass("pair");
        $(".playing").removeClass("playing");
        console.log("BIEN!");
      }else if(status == 0){
        // Different, unflip
        console.log("Entre");
        clearTimeout(timeOut);
        setTimeout(function(){
          unflip();
        ; }, 1000);
        console.log("OOOHH QUE PENA");
      }
    }
  });
});

function unflip(){
  $(".playing").toggleClass("back front");
  $(".playing").removeClass("playing");
}

// ...other code
