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

//shuffleCards

MemoryGame.prototype.shuffleCards = function(newArray) {
  var ctr = newArray.length;
// While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = newArray[ctr];
    newArray[ctr] = newArray[index];
    newArray[index] = temp;
  }
  return newArray;
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame.shuffleCards(memoryGame.cards);
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
  //Add some code to call the method whenever a user selects a face-down card.
  $('.card').on('click', function(){
    var back= $(this).find('.back');
    var frontStyle= $(this).find(".front").attr('style');
    $(back).attr('style', frontStyle);
  });
});

//selecting las cards
MemoryGame.prototype.selectCard = function(card) {
//If the user has selected a card in the last turn
    if (memoryGame.selectedCards[0] === undefined) {
    memoryGame.selectedCards[0] =$(this);
    }
    else {
    memoryGame.selectedCards[1] = $(this);
    //Increase the pairsClicked attribute of the memoryGame and update the DOM
    memoryGame.selectedCards.pop();
    memoryGame.selectedCards.pop();
    this.pairsClicked++;
    $("pairs_clicked").text(memoryGame.pairsClicked++);
    $("pairs_guessed").text(memoryGame.pairsClicked++);
          //Compare the newly selected card to the previously selected card. Are they of the same type?
            //If yes
                  if (this.selectedCards[0].children(".back").attr(name) === this.selectedCards[1].children(".back").attr(name)){
            //Empty out the selectedCards array for the next round
                    this.selectedCards =[];
            //Increase the correctPairs attribute by one
                    this.correctPairs++;
            //"Flip" the card
                    $("div card").toggleClass();
            //If no
                  } else {
            //Possibly add some styling to tell the user "Wrong Guess"
                  console.log ("Wrong guess");
            //Flip both cards back to the "back side"
                  $("div card").toggleClass("div.back");
            }
//If the user has not selected a card in the last turn
this.selectCards.push(card);
//Add the card to the selectedCards array and move on
}
};



//finishing the Game
MemoryGame.prototype.finished = function() {

};
