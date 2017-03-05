//******************************************************************
// Game Logic
//******************************************************************
var MemoryGame = function() {
  this.Cards = [
  		{ name: "aquaman",         img: "./img/aquaman.jpg" },
  		{ name: "batman",          img: "./img/batman.jpg" },
  		{ name: "captain america", img: "./img/captain-america.jpg" },
  		{ name: "fantastic four",  img: "./img/fantastic-four.jpg" },
  		{ name: "flash",           img: "./img/flash.jpg" },
      { name: "green arrow",     img: "./img/green-arrow.jpg" },
  		{ name: "green lantern",   img: "./img/green-lantern.jpg" },
  		{ name: "ironman",         img: "./img/ironman.jpg" },
  		{ name: "spiderman",       img: "./img/spiderman.jpg" },
  		{ name: "superman",        img: "./img/superman.jpg" },
  		{ name: "the avengers",    img: "./img/the-avengers.jpg" },
  		{ name: "thor",            img: "./img/thor.jpg" },
      { name: "aquaman",         img: "./img/aquaman.jpg" },
  		{ name: "batman",          img: "./img/batman.jpg" },
  		{ name: "captain america", img: "./img/captain-america.jpg" },
      { name: "fantastic four",  img: "./img/fantastic-four.jpg" },
  		{ name: "flash",           img: "./img/flash.jpg" },
  		{ name: "green arrow",     img: "./img/green-arrow.jpg" },
  		{ name: "green lantern",   img: "./img/green-lantern.jpg" },
  		{ name: "ironman",         img: "./img/ironman.jpg" },
  		{ name: "spiderman",       img: "./img/spiderman.jpg" },
  		{ name: "superman",        img: "./img/superman.jpg" },
  		{ name: "the avengers",    img: "./img/the-avengers.jpg" },
  		{ name: "thor",            img: "./img/thor.jpg" },
  	];
  this.picked_cards  = [];
  this.selectedPairs_clicked = 0;
  this.selectedPairs_guessed = 0;
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
  return;
};

//---------------------------------------------------------------------------
//a cheap way to access/initialize variables

var idx = 0; //setting an index to use throughout the function
var countChocula = 0; //he's really good at counting
var imgTag = "";
var clickedSrc = "";
var currentDiv = "";
var lastDiv = [];
var cardsclicked = 0;
var cardsRemain = 0;
var selectedPairs = [];
var imgIDs = [];
var idNum = 0;

//-------------------------------------------------------------------------------
//this function lets me create some logic for the cards that don't match
//first thing it does is log...so that you know the card is about to be cleared

var clearCards = function() {
    console.log("CARD WILL BE CLEARED");
    $(".col").toggleClass("blocked"); //then it blockes the user from clicking anything until timeout.
    setTimeout(function(){ //hides the img after 1 second, also removes the blocked class
      imgTag.toggleClass(); //runs toggle and adds hidden class after three seconds of being clicked
      $(currentDiv).toggleClass('hidebg'); //selects the currenet div clicked and adds/toggles the img visibility
      // $(currentDiv).removeClass("clicked"); //for ever item that is defined as clicked, removes this class
      $(".col").toggleClass("blocked"); //removes the click block
  },1000); //closes the timeout function
};



//******************************************************************
// HTML/CSS Interactions
//******************************************************************
var memoryGame;
$(document).ready(function() {
  memoryGame = new MemoryGame();
//-------------------------------------------------------------------------------

  $('.col').each(function(){ //an each loop that will iterate through each box/column
    var currentImg = $(this).children("img"); //selects the img tag in each box/column
    $(currentImg).prop('src', memoryGame.Cards[idx].img); //targets the src property of the img tag selected and replaces it with Card array img src
    idx+=1; //increases the index value so that you can continue iterating through the loop

  }); //close the each loop

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
  $(".col").on('click', function(){ //when you click box/column do the following:

    cardsclicked +=1; //first thing we are going to do is count the cards clicked....every single one...for stats?
    $("#cardsclicked").text(cardsclicked);

    currentDiv = $(this); //selects the current divs clicked for use in other functions
    imgTag = $(this).children('img'); //selects the img tag for this clicked div/box/column
    clickedSrc = $(imgTag).prop("src");  //stores the value of the img src on click.


    $(this).toggleClass('hidebg'); //selects the currenet div clicked and adds/toggles the "clicked" class which hides bg and lets you track
    imgTag.toggleClass(); //toggles the the hidden class on/off on the current selected img
    imgTag.prop("id", idNum);
    idNum+=1;
    //then comes....
    imgIDs.unshift(imgTag);
    selectedPairs.unshift(clickedSrc);
    allthelogic();
});

//-------------------------------------------------------------------------------

  $(".col").one('click', function() {
    $(".spacer").animate ({height: '120px'});
    $("#title").animate ({
      left: '25%',
      fontSize: '50px',
      background: '#000',
      color: '#fff',
      opacity: '0.5',
      height: '55px',
      width: '850px',

    }); //closes the animate function

  }); //closes the click once function

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


var allthelogic = function() {

// selectedPairs[0] == selectedPairs[1] &&
  if ( $(imgIDs[0]).prop("id") == ($(imgIDs[1]).prop("id")) ) {
    console.log("you clicked the same card twice!!");
    clearCards();

  } else if (selectedPairs[0] == selectedPairs[1]) {

      countChocula +=0.5; //this is a hack because I didn't want to change scoreboard Logic
      console.log("found a pair");
      $(currentDiv).toggleClass("blocked");
      $(currentDiv).toggleClass("clicked");
    } //closes this else if statement for checking our pairs
      //when you find a pair in the game one of the cards hide, and you have to click on it again
      //because of this unintended side effect the counter counts an extra pair... so 0.5 because two clicks equals 1 pair
      //temp solution while I find out some other way to count selectedPairs
    else {
    clearCards();
  } //closes whole if statement

  var remaincount = 12 - countChocula;
  $('#remain').text(remaincount);
  $("#pairs").text(countChocula);


if (countChocula >= 12) {
  countChocula = 0;
  setTimeout(function(){
    $("video").toggleClass("hidden");
    $("#win").toggleClass("hidden");
  },3000);
  $("#win").toggleClass("hidden");

  }
};



});
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// video.appendTo($('#gallery'));




//$(currentDiv).hasClass("clicked") &&
// checkEm(); //runs a function that cheks for selectedPairs and clears those cards that aren't

// var checkEm = function() {
// $(".clicked").each(function(){
//
// });
//   //
//   // }
// }
    //

  // var currentDiv = $(this).attr('class');

  // var currentDiv = $(this).toggleClass('pic');
  // var currentImg = $(this).children("img");
  // var insertImg = $(currentImg).prop('src', memoryGame.Cards[idx].img);

 //
//   if ($(this).hasClass("clicked")) {
//     console.log("Got em");
 //
 //
//   } else if (idx <= 23) {
//    $(this).addClass(`clicked ${idx}`);
//    insertImg = insertImg;
//    clickedArray.push(insertImg);
//    console.log(clickedArray);
//    idx+=1;
//    console.log(idx);
//  } else if (idx > 23) {
//    console.log("no more cards bro");
//    idx=0;
//  }
//   // $(currentImg).prop('src', memoryGame.Cards[idx].img);
