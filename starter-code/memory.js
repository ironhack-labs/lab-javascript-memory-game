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
  return;
};

//******************************************************************
// HTML/CSS Interactions
//******************************************************************
var memoryGame;
$(document).ready(function() {
  memoryGame = new MemoryGame();

  var idx = 0; //setting an index to use throughout the function
  var countChocula = 0; //he's really good at counting
  //a cheap way to access this global variable in another function
  var imgTag = "";
  var clickedSrc = "";
  var currentClass = "";
  var lastSrc = "";
  var cardsclicked = 0;
  var cardsRemain = 0;

  var clearCards = function() {
    if ($(currentClass).hasClass("clicked")){
    console.log("no match...CLEAR");
    setTimeout(function(){ //hides the img after 3 seconds, have to add some conditionals
      imgTag.toggleClass(); //runs toggle and adds hidden class after three seconds of being clicked
      $(currentClass).toggleClass('hidebg'); //selects the currenet div clicked and adds/toggles the pic class
      $(currentClass).removeClass("clicked");
    },1000); //closes the timeout function
  }
};

  $('.col').each(function(){ //an each loop that will iterate through each box/column
    var currentImg = $(this).children("img"); //selects the img tag in each box/column
    $(currentImg).prop('src', memoryGame.Cards[idx].img); //targets the src property of the img tag selected and replaces it with Card array img src
    idx+=1; //increases the index value so that you can continue iterating through the loop

  }); //close the each loop
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

  $(".col").on('click', function(){ //when you click box/column do the following:

    cardsclicked +=1;
    $("#cardsclicked").text(cardsclicked);

    currentClass = $(this); //selects the current classes clicked for use later
    imgTag = $(this).children('img'); //selects the img tag for this clicked div/box/column
    clickedSrc = $(imgTag).attr("src"); //add a class called clicked, so that I can later refer to the clicked classes

    $(this).toggleClass('clicked hidebg'); //selects the currenet div clicked and adds/toggles the "clicked" class which hides bg and lets you track
    imgTag.toggleClass(); //toggles the the hidden class on/off on the current selected img


    if (lastSrc === clickedSrc && $(currentClass).hasClass("clicked")) {
      countChocula +=1;
      console.log("found a pair");
      $("#pairs").text(countChocula);
    } else {
        clearCards();
      }
    lastSrc = clickedSrc;

    var remaincount = 12 - countChocula;
    $('#remain').text(remaincount);


    if (countChocula >= 12) {
      countChocula = 0;
      $('memory_board').text (
        '<video width="900" autoplay loop poster="./img/marvel.jpg">' +
        '<source src="https://i.imgur.com/NKJljnz.mp4" type="video/mp4"></source>' +
        '</video>');
      }
});

});

// video.appendTo($('#gallery'));




//$(currentClass).hasClass("clicked") &&
// checkEm(); //runs a function that cheks for pairs and clears those cards that aren't

// var checkEm = function() {
// $(".clicked").each(function(){
//
// });
//   //
//   // }
// }
    //

  // var currentClass = $(this).attr('class');

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
