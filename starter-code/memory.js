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
};

// Function to mix the cards. Source:https://bost.ocks.org/mike/shuffle/
MemoryGame.prototype.shuffleCards = function(){
  var m = this.cards.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
  return this.cards;
};

MemoryGame.prototype.finished = function() {
  console.log("YOU WIN!!");
};

//Function to select a card
MemoryGame.prototype.selectCard = function(){
  var result;
  this.pairsClicked += 1;

  console.log(this.selectedCards);
  if (this.selectedCards[0] == this.selectedCards[1]){
    this.correctPairs +=1;
    this.selectedCards = [];
    result = true;
  }else{
    result = false;
  }
  return result;
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;
var count=0;
var $turndown = $('.selected');

function deleteSelected(){
  $('#memory_board').find(".selected").removeClass('selected');
  $('#memory_board').find(".selected").removeClass('selected');
}

function turnDown(){
  console.log($turndown);
  $('.selected').find(".back").removeClass('blocked');
  $('.selected').find(".front").attr('class', 'back');
  $('.selected').find(".back:nth-child(2)").attr('class', 'front');
  deleteSelected();
}


$(document).ready(function(){
  memoryGame = new MemoryGame();

  //Move cards randomly
  memoryGame.shuffleCards();

  //HTML
  var html = '';
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ')" no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });


  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;


  //Function to turn up the cards
  $('.card').on('click', function(){
    $(this).find(".back").attr('class', 'front');
    $(this).find(".front:nth-child(2)").attr('class', 'back');
    $(this).find(".back").toggleClass('blocked');
    $(this).toggleClass('selected');

    //Adding card into array memoryGame.selectedCards
    $chosenCart = $(this).find('.front').attr('name');
    memoryGame.selectedCards.push($chosenCart);
    console.log("a",memoryGame.selectedCards);
  });

  $(".card").click(function() {
    count++;
    console.log("contador: " + count);
    if(count >1){
      //Compare cards
      console.log(memoryGame.selectedCards);
      var result = memoryGame.selectCard();
      memoryGame.pairsClicked += 1;
      if(result){
        console.log("Has acertado!!", result);
        memoryGame.correctPairs += 1;
        $('#pairs_guessed').text(memoryGame.correctPairs/2);
        if(memoryGame.correctPairs == 24){
          memoryGame.finished();
        }
        deleteSelected();
      }else{
        console.log("no son iguales", result);
        setTimeout(function(){
          turnDown();
        }, 500);
      }
      //Resent counter and array
      count = 0;
      memoryGame.selectedCards = [];
      $('#pairs_clicked').text(memoryGame.pairsClicked/2);
    }
  });
});
