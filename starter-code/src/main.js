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

var selected = [];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  var html = ''; //Inner html of #memory_board
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html); //Set inner HTML of element #memory_board

  // Bind the click event of each element to a function
  $('.back').click(function () {
    console.log($(this));
    $(this).toggle(0);
    $(this).next().toggle(0);
    selected.push($(this));
    if (selected.length === 2) {
      if (memoryGame.checkIfPair(selected[0].attr("name"), selected[1].attr("name"))) {
        //Remove both cards or replace with transparent div.
        for(let i = 0; i < selected.length; i++) {
          selected[i].parent().css("background", "rgba(255,255,255,0)");
          selected[i].parent().children().css("background", "rgba(255,255,255,0)");
        }
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
      }
      else {
        for(let i = 0; i < selected.length; i++) {
          // posible corrección: el timer en toggle es 0 si es sexta columna
          selected[i].parent().children(".front").toggle(500);
          selected[i].parent().children(".back").toggle(500);
        }
      }
      selected = [];
      $("#pairs_clicked").text(memoryGame.pairsClicked);
    }
    if (memoryGame.isFinished()) {
      alert("You won in only " + memoryGame.pairsClicked + " guesses!");
    }
  });

});


