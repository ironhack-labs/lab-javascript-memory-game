var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
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


$(document).ready(function () {
  var daGame = new MemoryGame(cards);
  daGame._shuffleCard();
  
  var html = '';

  daGame.cards.forEach(function (pic) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
    $('#memory_board').html(html);
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  
  // Bind the click event of each element to a function
  $('.back').on('click', function () {
    
    $(this).toggle();
    $(this).parent().find(".front").toggle();

    daGame.currentPair.push($(this));

    if (daGame.currentPair.length === 2) {
      var result = daGame.checkIfPair(daGame.currentPair[0], daGame.currentPair[1]);
      $("#pairs_clicked").text(daGame.pairsClicked);
      $("#pairs_guessed").text(daGame.pairsGuessed);
      
      // daGame.currentPair = [];

      $(".back").addClass("blocked");


      if (!result) {
        setTimeout(function () {

          daGame.currentPair[0].toggle();
          daGame.currentPair[0].parent().find(".front").toggle();
          
          daGame.currentPair[1].toggle();
          daGame.currentPair[1].parent().find(".front").toggle();
          
          daGame.currentPair = [];

          $(".back").removeClass("blocked");

        }, 1000);
      }

      else {
        daGame.currentPair = [];
        $(".back").removeClass("blocked");

      }
    }
    
    if (daGame.finish()) {
      setTimeout(function (){
        alert("You finally won...");
      }, 100);
    }

    
  });
});
