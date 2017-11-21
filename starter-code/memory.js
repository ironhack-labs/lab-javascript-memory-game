// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [{
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
    {
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
var memoryGame;
$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');
    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ')" no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });
  // Add all the divs to the HTML

  document.getElementById('memory_board').innerHTML = html;



  $('.front').hide();

  $('.card').click(function() {
    if (memoryGame.selectedCards[0] === undefined) {

      memoryGame.selectedCards[0] = $(this);

      alert(1);

      memoryGame.selectedCards[0].children(".back").hide();

      memoryGame.selectedCards[0].children(".front").show();

      alert(2);

    } else {

      memoryGame.selectedCards[1] = $(this);
      memoryGame.selectedCards[1].children(".back").hide();
      memoryGame.selectedCards[1].children(".front").show();

      if (memoryGame.selectedCards[0].children(".back").attr("name") === memoryGame.selectedCards[1].children(".back").attr("name")) {

        alert("Iguales");
        memoryGame.correctPairs++;
        memoryGame.selectedCards = [];
      } else {
    
        alert("Distintos");
        setTimeout(
          function() {
            memoryGame.selectedCards[0].children(".back").show();
            memoryGame.selectedCards[0].children(".front").hide();
            memoryGame.selectedCards[1].children(".back").show();
            memoryGame.selectedCards[1].children(".front").hide();
            memoryGame.selectedCards = [];
          }, 1000);
      }
      memoryGame.pairsClicked++;
    }
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.correctPairs);
  });
});
