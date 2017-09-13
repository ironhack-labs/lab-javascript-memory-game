// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
    this.matchedCards = [];
};

MemoryGame.prototype._shuffleCards = function() {
  this.cards=_.shuffle(this.cards);
};

MemoryGame.prototype.selectCard = function(clickedCard){
  if(this.selectedCards.length === 0){
    this.selectedCards.push(clickedCard);
  } else if(this.selectedCards[0] === clickedCard){
      this.correctPairs++;
      $("#pairs_guessed").text(this.correctPairs);
      this.pairsClicked++;
      $("#pairs_clicked").text(this.pairsClicked);
      this.matchedCards.push(clickedCard);
      this.matchedCards.push(this.selectedCards[0]);

      console.log("this.matchedCards[0]:", this.matchedCards[0]);
      console.log("this.matchedCards:", this.matchedCards);


        var name = this.matchedCards[name];
        $('.front[name=' + name + ']').parent().addClass('match');



      _.remove(this.selectedCards);
      //console.log(clickedCard);
      //console.log($(this).attr("name"));

      //$("div[name='flash']").removeClass(".front");


  } else if(this.selectedCards[0] !== clickedCard){
    this.pairsClicked++;
    $("#pairs_clicked").text(this.pairsClicked);
    _.remove(this.selectedCards);
    $(".card").not('.match').children('.front').delay(1000).hide(0);
    $(".card").not('.match').children('.back').delay(1000).show(0);
    return "No match, try again";
  }

//  if(this.correctPairs === 12){
//    return alert("You win!");
//  }
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;
var clickedCard;

$(document).ready(function(){

  memoryGame = new MemoryGame();
  //memoryGame._shuffleCards();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;


// HIDE THE IMAGES WHEN THE PAGE LOADS
  $(".front").hide();


// ON CLICK TURN THE CARD
  $(".back").click(function(e){
    $(this).siblings().toggle();
    $(this).toggle();
    clickedCard = $(this).attr("name");
    memoryGame.selectCard(clickedCard);
    //console.log(clickedCard);
    //console.log(e);
    //console.log($(this).attr("name"));

  });


});
