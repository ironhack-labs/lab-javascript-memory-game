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

MemoryGame.prototype._shuffleCards = function() {
  this.cards = _.shuffle(this.cards);
};

MemoryGame.prototype.selectCard = function(card) {
  console.log(card.attr('name'));


    if (this.selectedCards.length===1) {//If the user has selected a card in the last turn
    this.selectedCards.push(card);
    this.pairsClicked++;
    $("#pairs_clicked").text(this.pairsClicked);
    //console.log(this.selectedCards[0]+" "+this.selectedCards[1]);
    // update the DOM
    if (card.attr('name')===this.selectedCards[0].attr('name')) { //Compare the newly selected card to the previously selected card. Are they of the same type?
      this.correctPairs++;
      $("#pairs_guessed").text(this.correctPairs);
      console.log(this.selectedCards);
      this.selectedCards[0].addClass('blocked');
      this.selectedCards[1].addClass('blocked');
      //console.log(this.selectedCards[1]===this.selectedCards[0]);
      this.selectedCards= [];
    } else { //(this.selectedCards[1]!=this.selectedCards[0] && this.selectedCards.length===2) {

      //If no
      //Possibly add some styling to tell the user "Wrong Guess"
      //Flip both cards back to the "back side"
      console.log(this.selectedCards[0]);
      console.log(this.selectedCards[0]);
      setTimeout(function(){
        alert("Wrong guess!!!");

        $(".front").hide();
        $(".front").siblings(".back").show();

        /*this.selectedCards[0].parent().find('.front').hide();
        this.selectedCards[1].parent().find('.front').hide();

        this.selectedCards[0].show();
        this.selectedCards[1].show();
        */

        /*

        $(".front[name*='"+this.selectedCards[0]+"']").hide();
        $(".back[name*='"+this.selectedCards[0]+"']").show();
        $(".front[name*='"+this.selectedCards[1]+"']").hide();
        $(".back[name*='"+this.selectedCards[1]+"']").show();
        */
      }, 500);
      this.selectedCards= [];

      //$('.front').hide();

      //$('.front').siblings('.back').show();

    }

  } else {
    //If the user has not selected a card in the last turn
  //  Add the card to the selectedCards array and move on

    this.selectedCards.push(card);
    console.log(card.attr('name'));
    //card.parent().find('.front').show();

  }
  console.log(this.selectedCards);

};


MemoryGame.prototype.finished = function() {
};



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame._shuffleCards();


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
  $('.front').hide();

//to call the method whenever a user selects a face-down card
  $('.back').on('click', function(){
    $(this).hide();
    $(this).parent().find('.front').show();
    memoryGame.selectCard($(this)/*.parent()/*.get(0)*/);
    //$(this).parent().find('.front').addClass('blocked');
  });

});
