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
    this._shuffleCards(); //Can shuffle here so it does it instantly before game is started
};

MemoryGame.prototype._shuffleCards = function(){
    this.cards = _.shuffle(this.cards);
};


MemoryGame.prototype._selectCard = function(card) {
  console.log(card); // to check if THIS is being used as card
  if(this.selectedCards.length===0){
    $(card).addClass('blocked'); // doesn't allow user to click on open card
    this.selectedCards.push(card);
  } else if (this.selectedCards.length ===1) {
    updatePairs();
    $(card).addClass('blocked');
    this.selectedCards.push(card);
    if(this.selectedCards[0].id === this.selectedCards[1].id) {
      updateCorrect();
      this.selectedCards = [];
      checkWin();
    }else {
      var that = this;
      setTimeout(function() {
        $(that.selectedCards[0]).removeClass("blocked");
        $(that.selectedCards[1]).removeClass("blocked");
        $(that.selectedCards[0]).css("background-image","");
        $(that.selectedCards[1]).css("background-image","");
        $(that.selectedCards[0]).css("background-color","#456783");
        $(that.selectedCards[1]).css("background-color","#456783");
        that.selectedCards =[];
      },500); ///LOOK HERE!! YOU CAN BIND OR CREATE VAR THAT = THIS
    }
  }
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(picture, index) {
    html += '<div class= "card" ';
    html += 'name="img/' + picture.name+'"' + ' id= ' + picture.img + '>';
    html += '</div>';
  });
  // Add all the divs to the HTML
  $('#memory_board').append(html);

// Create click button event
$('.card').on('click',function(){
   //this will return the entire div of the clicked card
  // console.log($(this).index());
  // console.log($(this).attr("id"));
  var cardIndex = $(this).index(); //Do NOT need this index
  var cardImage = "url(img/" + $(this).attr("id") + ")";
  // $('div.card').eq(cardIndex).css("background-image",cardImage); TOO LONG
  $(this).css("background-image",cardImage);
  memoryGame._selectCard(this); //This has to be at the end for the timeout delay for displaying cards before flippping over if wrong
});

});

//UPDATE pairs clicked
function updatePairs() {
  memoryGame.pairsClicked++;
  $('#pairs_clicked').html(memoryGame.pairsClicked);
}
//UPDATE correct
function updateCorrect() {
  memoryGame.correctPairs++;
  $('#pairs_guessed').html(memoryGame.correctPairs);
}

//CHECK for WIN
function checkWin() {
  if(memoryGame.correctPairs === memoryGame.cards.length/2){
    $('h2').html("YOU WIN!!");
    setTimeout(function() {
      location.reload();
    },3000);
  }
}
