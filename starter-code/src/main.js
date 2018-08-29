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
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function

  let primeraCarta = null
  $('.back').click(function () {
    $(this).removeClass("back")
    $(this).addClass("front")
    $(this).next().removeClass("front")
    $(this).next().addClass("back")
    if(primeraCarta==null){
      primeraCarta= $(this)
    }else{
      if(memoryGame.checkIfPair(primeraCarta.attr("name"),$(this).attr("name"))){
        primeraCarta=null
      }else{
        var estaCarta=$(this)
        setTimeout(function(){
          estaCarta.removeClass("front")
          estaCarta.addClass("back")
          estaCarta.next().removeClass("back")
          estaCarta.next().addClass("front")
          primeraCarta.removeClass("front")
          primeraCarta.addClass("back")
          primeraCarta.next().removeClass("back")
          primeraCarta.next().addClass("front")
          primeraCarta=null
        },200)

      }
    }
    
    $("#pairs_clicked").html(memoryGame.pairsClicked)
    $("#pairs_guessed").html(memoryGame.pairsGuessed)
    if(memoryGame.isFinished()){
      $("h1").html("YOU WON! :D")
    }
  });
});


