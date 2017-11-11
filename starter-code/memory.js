// //******************************************************************
// // Game Logic
// //******************************************************************
// 0. Have I won?
// 0a. If yes, Good job!
// 0b. If no, keep playing:
// 1.  Click on a back card, it flips front. 
// 2.  If it’s the first card, push to array
// 3.  If it’s the second card, 
// 3a.  if it’s the same as first
// 3ai.  it’s a match
// 3aii. both cards can no longer be touched
// 3aiii.  increase flip counter
// 3aiv. increase match counter
// 3b.  if it’s not the same
// 3bi.  see both for 2 seconds
// 3bii. they both flip to back
// 3biii.  increase flip counter

//all my card objects
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

MemoryGame.prototype.shuffle = function(array) {
  for (var i = array.length-1; i >= 0; i--){
    var random = Math.floor(Math.random() * i+1);
    var temp = array[i];
    array[i] = array[random];
    array[random] = temp;
  }
}

MemoryGame.prototype.selectCard = function(card) {
  // 2.  If it’s the first card, push to array
  if (this.selectedCards.length === 0 ) {
    this.selectedCards.push(card); 
  }


  //one card drawn, 
  else if (this.selectedCards.length === 1) {
    this.selectedCards.push(card);
    var id1 = $(this.selectedCards[0]).html();
    var id2 = $(this.selectedCards[1]).html();
    
    if (id1 === id2) {
      console.log("match");
      $(this.selectedCards[0]).off("click");
      $(this.selectedCards[1]).off("click");
      this.pairsClicked++;
      this.correctPairs++;
      this.selectedCards = [];
      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.correctPairs);
    }

    else  if (id1 !== id2) {
      console.log("no match");
      var that = this;
      setTimeout(function() {
        $(that.selectedCards[0]).children().toggleClass("front").toggleClass("back");
        $(that.selectedCards[1]).children().toggleClass("front").toggleClass("back");
        // if (selectedCards.length===2){
        //   $(".back").off("click");
        // }
        that.selectedCards = [];
        that.pairsClicked++;
        $("#pairs_clicked").text(memoryGame.pairsClicked);
        $("#pairs_guessed").text(memoryGame.correctPairs);
      }, 2000);
    }  
  }
}

MemoryGame.prototype.determineWin = function() {
  var that = this
  if (this.correctPairs === 12) {
    setTimeout(function(){
     alert("You won!");
     $(".card").children().toggleClass("back").toggleClass("front");
     that.correctPairs = 0;
     that.pairsClicked = 0;
     $("#pairs_clicked").text(memoryGame.pairsClicked);
     $("#pairs_guessed").text(memoryGame.correctPairs);
   }, 1000);
  }
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  //memoryGame.shuffle(memoryGame.cards);

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
// 1.  Click on a back card, it flips front. 

$(".back").click(function(){
  if (memoryGame.selectedCards.length < 2) {
    $(this).toggleClass("back").toggleClass("front");
    $(this).siblings().toggleClass("back").toggleClass("front");
      memoryGame.selectCard($(this).parent());// 1.  Click on a back card, it flips front. 
      memoryGame.determineWin();
    } 
  })
});



