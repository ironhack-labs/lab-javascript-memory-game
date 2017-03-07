var theGame;

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
  this.pickedCards  = [];
  this.pairsGuessed = [];
  this.pairsClicked = 0;
  this.shuffleCard();
};
// ---------------_> PROGRAM UNIVERSE  <--------------------

// ------- Method to shuffle the cards


MemoryGame.prototype.shuffleCard = function() {
  var counter = this.Cards.length, j, temp;

  while (--counter > 0) {
    j = Math.floor(Math.random() * (counter+1));
    temp = this.Cards[j];
    this.Cards[j] = this.Cards[counter];
    this.Cards[counter] = temp;
  }
};


// ------- Method to shuffle the cards   ENDS


  $( document ).ready(function() {


var theGame = new MemoryGame();

    // Your code here.

console.log(theGame.Cards);

var card1 = theGame.pickedCards[0];
var card2 = theGame.pickedCards[1];


// ------- FUNCTION THAT MATCHS CARDS


// MemoryGame.prototype.selectCard = function(card) {
//   if (this.picked_cards.length === 0) {
//   this.picked_cards.push(card);
//   this.addClass('blocked');
// }
// else if (this.picked_cards.length == 1) {
//   this.picked_cards.push(card);
//   $('.back').addClass('blocked');
//   this.pais_clicked++;
//
//   if(this.picked_cards[0].attr(src[i]) == this.picked_cards[1].attr(src[i])) {
//     //set the picked cards array back to empty
//     this.picked_cards = [];
//     // add one to correct guesses counter
//     this.pairs_guessed++;
//     //rempve tje blocked class from everthing
//     $('.back').removeClass('blocked');
//     //no need to do anything to keep them face up
//
//   } else {
//     console.log('incorrect');
//     //empty the picked cards arrays
//     // cange them back to normal background
//     var self = this;
//     setTimeOut
//     self.picked_cards[0].style.background = 'fff';
//     self.picked_cards[1].style.background = '000';
//     this.picked_cards = [];
//     $('.back').removeClass('blocked');
//
//   }
//
// }




  // this.shuffleCard
// };

// ------- FUNCTION THAT MATCHS CARDS   ENDS



// ------- FUNCTION  WIN WIN WIN WIN  A R E A


MemoryGame.prototype.finished = function() {
  if (this.pairsGuessed >= 12) {
  alert("You are done");
}
};

// ------- FUNCTION  WIN WIN WIN WIN  A R E A  ENDS
// ---------------_> USER UNIVERSE  <--------------------

theGame.shuffleCard();
$('.pic').append('<img class="target ocult" src="#">');
for (var i = 0; i < theGame.Cards.length; i++) {
  $('.pic img').eq(i).attr('src', 'img/' + theGame.Cards[i].img);
}




// TESTING AREA

// $('.pic > img').hide();

var count = 0;
var firstImage;
var secondImage;


$('.pic').on('click',function(e) {

  count++;
  if (count === 1) {
    theGame.pickedCards.push($(this).children().attr('src'));
    firstImage = $(this).children().disableSelection().toggle();
    // firstImage.css('cursor', 'none');
  }

  if (count === 2 && $(this).children() != theGame.pickedCards[0]) {
    theGame.pickedCards.push($(this).children().attr('src'));
    secondImage = $(this).children().toggle();
     if (theGame.pickedCards[0] === theGame.pickedCards[1]) {
       $(this).children().show();
       count = 0;
       theGame.pickedCards = [];
      //  theGame.pickedCards.push($(this).children().attr('src'));
     }
     if (theGame.pickedCards[0] !== theGame.pickedCards[1]) {
      //  $(this).children().show();
       setTimeout(function(){ secondImage.toggle();}, 500);
      //  $(this).children().toggle();
      setTimeout(function(){  firstImage.toggle();}, 500);

       count = 0;
       theGame.pickedCards = [];
     }
   } else {
    console.log('something is wrong');
  }


  // if (count === 2 && theGame.pickedCards[0].toString() === theGame.pickedCards[1].toString()) {
  //   console.log(theGame.pickedCards);
  //     console.log('Card 1: ',theGame.pickedCards[0] , 'Card 2: ', theGame.pickedCards[1]);
  //     $(this).children().show();
  //     count = 1;
  //     theGame.pickedCards = [];
  //     theGame.pickedCards.push($(this).children().attr('src'));  }

  // else if ( count === 2 && theGame.pickedCards[0].toString() !== theGame.pickedCards[1].toString()) {
  //     console.log('hide hide hide ');
  //     $(this).find('img').attr('src',card1).hide();
  //     // $( "li.item-ii" ).find( "li" ).css( "background-color", "red" );
  //
  //       //  $(this).attr('src',theGame.pickedCards[0].hide());
  //     // $(this).children().hide();
  //     count = 1;
  //     theGame.pickedCards = [];
  //     theGame.pickedCards.push($(this).children().attr('src'));
  // }
  // else if (count === 3) {
  //      count = 1;
  //      theGame.pickedCards = [];
  //      theGame.pickedCards.push($(this).children().attr('src'));
//
  //
  // $('.pic').on('click',function(e) {
  // if (count === 3 && theGame.pickedCards[0] === theGame.pickedCards[1]) {
  //     theGame.pickedCards.concat(theGame.pairsGuessed);
  //     theGame.pickedCards = [];
  //     count = 0;


  //$(this).children().hide();
  //
  // }
  // else if (theGame.pickedCards[0] !== theGame.pickedCards[1]) {
  //   theGame.pickedCards[0].hide();
  //   theGame.pickedCards[1].hide();
  //
  // }
  // else {
  //   // $(this).children().attr('src', "");
  //   // $(this).children().hide();
  //   theGame.pickedCards = [] && count-- ;
  // }

  //  console.log(theGame.pairsGuessed);



console.log('Count: ', count);
console.log(theGame.pickedCards);
// console.log(theGame.pairsGuessed);

});









// function hide(e){
//   e.currentTarget.style.visibility = "hidden";
//   // When this function is used as an event handler: this === e.currentTarget
// }
// var ps = $('.pic img');
//
// for(var i = 0; i < ps.length; i++){
//   ps[i].addEventListener('click', hide, false);
// }

// var fliped = $(".target").toggle();
//
// $('.pic').click(function() {
//   if($('.pic').css('background-image','url(https://s-media-cache-ak0.pinimg.com/736x/96/fb/f7/96fbf705132092f9f900c42368caa071.jpg;')){
//       $(this).css('background-image','none');
//   } else {
//       $(this).css('background-image','url(https://s-media-cache-ak0.pinimg.com/736x/96/fb/f7/96fbf705132092f9f900c42368caa071.jpg);');
//   }
 // $(".target").toggle();
 // $('.target').toggleClass('active');
 // $('target').toggleClass('active');
// });









});
