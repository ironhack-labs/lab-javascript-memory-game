var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain_america', img: 'captain-america.jpg' },
  { name: 'fantastic_four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green_arrow',     img: 'green-arrow.jpg' },
  { name: 'green_lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the_avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain_america', img: 'captain-america.jpg' },
  { name: 'fantastic_four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green_arrow',     img: 'green-arrow.jpg' },
  { name: 'green_lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the_avengers',    img: 'the-avengers.jpg' },
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
  // Bind the click event of each element to a function
  $('.card').on('click', function () {
    
    $(this).children().toggleClass('back');
    $(this).children().toggleClass('front');
    var that = this;
    
    memoryGame.pickedCards.push($(this).attr("id"));
    
    if (memoryGame.pickedCards.length === 1) {
      var first = that;
      setTimeout(function(){ 
        $(first).children().toggleClass('back');
        $(first).children().toggleClass('front');
        }, 1000);
    }
    
    console.log(memoryGame.pickedCards)
    
    if (memoryGame.pickedCards.length === 2) {
      var c1 = memoryGame.pickedCards[0];
      var c2 = memoryGame.pickedCards[1];
      if (memoryGame.checkIfPair(c1,c2)) {
        console.log("flip cards back up")
        var findId = "#" + c1;
        $(findId).children().toggleClass('back');
        $(findId).children().toggleClass('front');
        if (memoryGame.finished())
        $("#winner").text("You Win!!");
      } else {
        setTimeout(function(){ 
          $(that).children().toggleClass('back');
          $(that).children().toggleClass('front');
        }, 1000);
      }
    }
    
    
    
    //   $(i).toggleClass('back');
    //   $(i).toggleClass('front');
  })
});


