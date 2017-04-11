var MemoryGame = function() {
  this.Cards = [
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
  this.picked_cards  = [];
  this.picked_pos = [];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;
  this._shuffleCard();
};
// this function just takes the array of cards above and shuffles them into a random order
MemoryGame.prototype._shuffleCard = function() {
  var counter = this.Cards.length;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = this.Cards[counter];
    this.Cards[counter] = this.Cards[index];
    this.Cards[index] = temp;
  }
  return this.Cards[index];
};

var memoryGame;
$(document).ready(function(){

  // create an object of MemoryGame and generate a card
  memoryGame = new MemoryGame();
  
  // get all element which class is ".card"
  var $cards = $('.card');
  

  // traverse the array of cards
  for (var index = 0; index < $cards.length; index++) {
    $($cards[index]).on('click', function(e) {

      if (memoryGame.picked_cards.length == 2) {
        memoryGame.picked_cards = [];
        memoryGame.picked_pos = [];   
      }

      //var img = "ironman.jpg";
      // generate an img
      var img = getNewImage();
      memoryGame.picked_cards.push(img);
      console.log(memoryGame.picked_cards);

      // get which card was clicked
      var clickedCard = $(e.currentTarget).attr('class');
      //console.log(clickedCard);
      
      // apply regular expression to extract the class="pos-#" from var clickedCard
      var reg = "(pos-[0-9]*) card";
      var subStr = clickedCard.match(reg);
      var cardClass = subStr[1];
      memoryGame.picked_pos.push(cardClass);
      console.log(memoryGame.picked_pos);
      //console.log(cardClass);
      
      // Selects elements .img that are descendants of a given ancestor .pos-#
      // sets property src of img inside div
      $('.' + cardClass + '> .img').prop("src", "img/" + img);  
      setTimeImg(cardClass);

      // checks if cards have same image
      compareCards(img);
      
      // update scores
      $('.clicked').html(memoryGame.pairs_clicked);
      $('.guessed').html(memoryGame.pairs_guessed);

      // check for winner
      if (memoryGame.pairs_guessed == 12) {
        $(".winner").css('display', 'inherit' );
        $('.card').addClass('blocked');
      }

      if (memoryGame.pairs_clicked > 48) {
        $(".looser").css('display', 'inherit' );
        $('.card').addClass('blocked');
      }
      

      }); // end click event      
    } // end for loop

  }); // end ready function

  
  //--------------------------------------------------------------------------------
  // Functions
  //--------------------------------------------------------------------------------

  // Set timeout to display image of Superhero in the card
  function setTimeImg(cardClass) {
      setTimeout(function () {
      $('.' + cardClass + '> .img').prop("src", ""); 
    }, 500); 
  }

  // Calls the -_shuffleCard method on MemoryGame and get a new image
  function getNewImage() {
    var card = memoryGame._shuffleCard();
    return card.img;
  } 

  // Compares cards and checks if images are the same
  function compareCards(img) {
    if (memoryGame.picked_cards[0] == memoryGame.picked_cards[1]) {
        setTimeout(function () {   
          console.log('correct');
          $('.' + memoryGame.picked_pos[0] + '> .img').prop("src", "img/" + img); 
          $('.' + memoryGame.picked_pos[0]).addClass('blocked');
          $('.' + memoryGame.picked_pos[1] + '> .img').prop("src", "img/" + img);
          $('.' + memoryGame.picked_pos[1]).addClass('blocked');
        }, 1000);
        memoryGame.pairs_guessed++;
        memoryGame.pairs_clicked++;
      }
      else {
        console.log('incorrect');
        memoryGame.pairs_clicked++;
      }      
  }

