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
  memoryGame.shuffleCard(cards);
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
  var arr = [];
  // Bind the click event of each element to a function
$('.back').on('click', function () {
  $(this).parent().children().toggleClass("front").toggleClass("back");
  arr.push($(this));
  if(arr.length == 2) {
    var card1 = arr[0].parent().attr("id")
    var card2 = arr[1].parent().attr("id")
    if (memoryGame.checkIfPair (card1, card2)){
      arr = [];
      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.pairsGuessed);
    } else {
      window.setTimeout(function(){
        arr[0].removeClass("front").addClass("back");
        arr[0].next().addClass("front").removeClass("back");
        arr[1].removeClass("front").addClass("back");
        arr[1].next().addClass("front").removeClass("back");
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        arr = [];
      },1000)
    }
  }
  if(memoryGame.finished()){
    alert("Yayy, CONGRATS!");
  }
});
});


/*memoryGame.finished();
memoryGame.checkIfPair();
memoryGame.shuffleCard();*/
 