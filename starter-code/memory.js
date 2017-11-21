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

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';
  var value;

    //Fisher-Yates
  MemoryGame.prototype._shuffleCards = function() {

      var currentIndex = this.cards.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
    

  };
 
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


  //$(".front").hide();
  MemoryGame.prototype.selectCard = function(selCard){

    if(this.selectedCards.length>1){
      this.pairsClicked++;

      if(compareCards(this.selectedCards[0].attr('name'),this.selectedCards[1].attr('name')))
      {
        this.selectedCards = [];
        this.correctPairs++;
        
        $("#pairs_guessed").html(this.correctPairs);
        this.pairsClicked++;
        $("#pairs_clicked").html(this.pairsClicked/2);
        value.attr('class','back blocked');
        selCard.attr('class','back blocked');
        this.finished();
      }
      else{
    //     alert("WRONG");
        this.pairsClicked++;
        $("#pairs_clicked").html(this.pairsClicked/2);
        this.selectedCards = [];
        setTimeout(function() {
          $(".back").not(".blocked").css('background','#456783');
        }, 500);       
        
      }
    }
    else{
      value = selCard;
    }

  
  };

  MemoryGame.prototype.finished = function() {
    debugger;
    if(this.correctPairs === this.cards.length/2){
      
      return alert("WIN");
    }
  };

  
  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.back').on('click', function(e){
    var selCard = $(this);
    var name = $(this).attr('name');
   // alert(name);
    memoryGame.selectedCards.push($(this));
    var parent = $(this).parent();
    var front  = parent.find(".front");
    var back = parent.find(".back");
    var css = front.css('background');
    back.css('background',css);
    memoryGame.selectCard($(this));
  //  window.setTimeout(memoryGame.selectCard,1000,$(this));
          
  });
});

/*$("#memory_board" ).on( "click", "div.back", function( event ) {
  //event.preventDefault();
  //console.log($(this));
  memoryGame.selectCards.push($(this).attr('name'));
});
*/


function randNum(max){
  return Math.floor(Math.random()*max);
}

function compareCards(previous,old){
  
    return (previous === old) ? 1 : 0;

}