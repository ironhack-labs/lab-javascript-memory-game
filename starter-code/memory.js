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


var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();

  var imgArray = [];
  var pairArray = [];
  var pairsFound = 0;
  var pairsTried = 0;
  var pairAmount = $('.pic').length / 2;

  memoryGame._shuffleCard();


  $('.pic').click(function(e){

    var curInd = $('.pic').index(e.currentTarget);
    var curImg = memoryGame.Cards[curInd].img;
    console.log(curImg);


    $(e.currentTarget).addClass('flipped');

    if ($('.flipped').length % 2 !== 0 ) {
      $(e.currentTarget).css('background-image', 'url(img/' + curImg + ')');
      imgArray.push(curImg);
      pairArray.push(e.currentTarget);
      console.log(imgArray);

    } else {
      $(e.currentTarget).css('background-image', 'url(img/' + curImg + ')');
      imgArray.push(curImg);
      pairArray.push(e.currentTarget);
      console.log(imgArray);
      console.log(pairArray);
      pairsTried += 1;
      $('#pairs-tried').html("Pairs tried: " + pairsTried);

      if (imgArray[0] === imgArray[1]) {
        pairsFound += 1;
        $('#pairs-found').html("Pairs found: " + pairsFound);
        for (i = 0; i < pairArray.length; i++) {
          $(pairArray[i]).addClass('found');
          console.log(pairArray[x]);
        }
        imgArray = [];
        pairArray = [];
        if (pairsFound === pairAmount) {
          alert("YOU WON! It took you " + pairsTried + " tries.");
        }

      } else {
        setTimeout(function(){
          for (x = 0; x < pairArray.length; x++) {
            $(pairArray[x]).css('background-image', '');
            $(pairArray[x]).removeClass('flipped');
          }
          imgArray = [];
          pairArray = [];
        }, 1000);
      }
    }
  });
});
