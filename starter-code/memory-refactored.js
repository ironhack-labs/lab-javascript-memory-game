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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var pairsClicked = 0;
var pairsGuessed = 0;
var clickAmount = 0;

function pairClk(){
  clickAmount += 1;
  if(clickAmount%2===0){
    pairsClicked +=1;
  }
  else{
    pairsClicked = pairsClicked
  }
  $("#pairs_clicked").html(pairsClicked);
}

var imgUrl ="";

function changePic(x){
  var imgUrl = (x.children(".front").prop("id"));
  console.log(imgUrl)
  x.children(".back").css("background", "url(img/" + imgUrl);
}

// var imgUrl = ($(this).children(".front").prop("id"));
// $(this).children(".back").css("background", "url(img/" + imgUrl);
// $(this).addClass("blocked");

function findSuperhero(){
function findCard(superhero) {
  return superhero.img === imgUrl;
};
var foundCard = memoryGame.cards.find(findCard);
memoryGame.selectedCards.push(foundCard);
console.log(memoryGame.selectedCards);
};




// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  shuffle(memoryGame.cards);
  var html = '';
// ------------------------------
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

// ==========================================================
  $("div.card").on("click", function(){
  pairClk();
  changePic($(this));
  console.log(imgUrl);
  $(this).addClass("blocked");

  // var imgUrl = ($(this).children(".front").prop("id"));
  // $(this).children(".back").css("background", "url(img/" + imgUrl);
  // $(this).addClass("blocked");
  findSuperhero();





  })







});
