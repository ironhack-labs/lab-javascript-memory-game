//******************************************************************
// Game Logic
//******************************************************************
var thisCell;
var cellsClicked = [];
var clicks = 0;
var cards = [
  {id: 1, img: "./img/1.jpg", value: 1},
  {id: 2, img: "./img/2.jpg", value: 2},
  {id: 3, img: "./img/3.jpg", value: 3},
  {id: 4, img: "./img/4.jpg", value: 4},
  {id: 5, img: "./img/5.jpg", value: 5},
  {id: 6, img: "./img/6.jpg", value: 6},
  {id: 7, img: "./img/7.jpg", value: 7},
  {id: 8, img: "./img/8.jpg", value: 8},
  {id: 9, img: "./img/9.jpg", value: 9},
  {id: 10, img: "./img/10.jpg", value: 10},
  {id: 11, img: "./img/11.jpg", value: 11},
  {id: 12, img: "./img/12.jpg", value: 12},
  {id: 13, img: "./img/1.jpg", value: 1},
  {id: 14, img: "./img/2.jpg", value: 2},
  {id: 15, img: "./img/3.jpg", value: 3},
  {id: 16, img: "./img/4.jpg", value: 4},
  {id: 17, img: "./img/5.jpg", value: 5},
  {id: 18, img: "./img/6.jpg", value: 6},
  {id: 19, img: "./img/7.jpg", value: 7},
  {id: 20, img: "./img/8.jpg", value: 8},
  {id: 21, img: "./img/9.jpg", value: 9},
  {id: 22, img: "./img/10.jpg", value: 10},
  {id: 23, img: "./img/11.jpg", value: 11},
  {id: 24, img: "./img/12.jpg", value: 12},
  {id: 25, img: "./img/nothing.jpg", value: 99}
];

var cardsShuffle = _.shuffle(cards);

cellsClicked.push(24);
// MemoryGame.prototype._shuffleCard = function() {
//   _.shuffle(cards);
// };
//
// MemoryGame.prototype.selectCard = function(card) {
// };
//
// MemoryGame.prototype.finished = function() {
// };
function MemoryGame() {

}

function showCard() {
  $(".a" + (thisCell + 1)).css("background-image", "url('" + cardsShuffle[thisCell].img + "')");
  clicks += 1;
  matchCards();
}

function hideCard() {
  //If clicks > 2 then hide last 2 card shows.
  if (clicks >= 2) {
  var a = cellsClicked[(1)] + 1;
  var b = cellsClicked[(2)] + 1;
  $(".a" + a).css("background-image", "none");
  $(".a" + b).css("background-image", "none");
  clicks = 0;
  } else {
    //code for clicks less than 2
  }
}

function matchCards() {
  var a = cellsClicked[(0)];
  var b = cellsClicked[(1)];
  console.log(thisCell, a, b, clicks);
  if (cardsShuffle[a].value === cardsShuffle[b].value) {
    console.log(cards[(cellsClicked[0])].value);
    console.log(cards[(cellsClicked[1])].value);
    cellsClicked.shift();
    cellsClicked.shift();
    console.log("match match match");
    clicks = 0;
  } else {
    hideCard();
  }
}

function countClicks() {
  //clicks += 1;
  console.log(clicks);
  if (clicks >= 3) {
    matchCards();
  }
  return clicks;
}
//******************************************************************
// HTML/CSS Interactions
//******************************************************************

$(".a1").on("click", function() {
  thisCell = 0;
  cellsClicked.unshift(thisCell);
  showCard();
});

$(".a2").on("click", function() {

  thisCell = 1;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a3").on("click", function() {

  thisCell = 2;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a4").on("click", function() {

  thisCell = 3;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a5").on("click", function() {

  thisCell = 4;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a6").on("click", function() {

  thisCell = 5;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a7").on("click", function() {

  thisCell = 6;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a8").on("click", function() {

  thisCell = 7;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a9").on("click", function() {

  thisCell = 8;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a10").on("click", function() {

  thisCell = 9;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a11").on("click", function() {

  thisCell = 10;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a12").on("click", function() {

  thisCell = 11;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a13").on("click", function() {

  thisCell = 12;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a14").on("click", function() {

  thisCell = 13;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a15").on("click", function() {

  thisCell = 14;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a16").on("click", function() {

  thisCell = 15;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a17").on("click", function() {

  thisCell = 16;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a18").on("click", function() {

  thisCell = 17;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a19").on("click", function() {

  thisCell = 18;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a20").on("click", function() {

  thisCell = 19;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a21").on("click", function() {

  thisCell = 20;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a22").on("click", function() {

  thisCell = 21;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a23").on("click", function() {

  thisCell = 22;
  cellsClicked.unshift(thisCell);
  showCard();
});
$(".a24").on("click", function() {

  thisCell = 23;
  cellsClicked.unshift(thisCell);
  showCard();
  console.log(cellsClicked);
});

$('.back').on('click', function(){
});



$(document).ready(function(){
});

//PLAYSPACE
//
// $(".a24").css("background-image", "url('" + cardsShuffle[23].img + "')");
// cardsShuffle.forEach(function(x) {
//   console.log(x.img);
// });
// console.log(cardsShuffle[23].img);
