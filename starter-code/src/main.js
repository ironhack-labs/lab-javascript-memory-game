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
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  let nueva = true;
  let first;
  // Bind the click event of each element to a function
  $('.back').click(function () {
    // TODO: write some code here 
    $(this).removeClass("back");
    $(this).addClass("front");
    $(this).next().removeClass("front");
    $(this).next().addClass("back");
    if(nueva === true) {
      first =  $("this");
        nueva = false; 
    } else {
      if (memoryGame.checkIfPair(first.attr("name"), $(this).attr("name"))) {
          nueva = true;
      } else {
        let second = $("this");
        setTimeout(function(){
          second.removeClass("front")
          second.addClass("back")
          second.next().removeClass("back")
          second.next().addClass("front")
          first.removeClass("front")
          first.addClass("back")
          first.next().removeClass("back")
          first.next().addClass("front")
          nueva=null
        }, 3000);
        
      }
    }

    $("#pairs_clicked").html(memoryGame.clicks);
    $("#pairs_guessed").html(memoryGame.guessed);
    if (memoryGame.isFinished()) {
      $("h1").html("You Won");
    }

});

});
