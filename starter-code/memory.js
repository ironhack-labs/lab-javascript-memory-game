// //******************************************************************
// // Game Logic
// //******************************************************************
var rows = 6
var columns = 8

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
    this.chosenCard = null;
    /*
    MemoryGame.prototype.randomizeGrid = function () {
      var tempArray = []

      $('.card').toArray().map(function (card, cardIndex) {
        console.log(this)
        var randomCard =_.sample(this.cards)
        // alert(randomCard.name)
        if (tempArray.indexOf(randomCard.name) > -1) {
          $(card).atrr('id', 'card_' + randomCard.name)
          $(card).children('div.front').css('background', 'url(img/' + randomCard.img + ') no-repeat')
          $(card).children('div.front').attr('id', randomCard.img )
          tempArray.push(randomCard.name)
        }
      }.bind(this))
    };*/
    MemoryGame.prototype.randomizeGrid = function () {
        this.cards = _.shuffle(  this.cards)
    };
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame.randomizeGrid();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" >';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '>';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '>';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  var that = memoryGame

  $('.card').click(function (event) {

      console.log('previously selected card:' + $(that.chosenCard).children('div.back').attr('name'))
      console.log('clicked card:' + $(this).children('div.back').attr('name'))

      flipCard(this)
      var object = this


        if(that.chosenCard) {
          console.log($(that.chosenCard).children('div.back').attr('name'))
          console.log($(this).children('div.back').attr('name'))
          if($(that.chosenCard).children('div.back').attr('name') === $(this).children('div.back').attr('name')) {

            that.selectedCards.push(that)
            that.correctPairs ++
            that.chosenCard = null
            that.pairsClicked = false

            removeFoundCard(that)

          } else {
            if (!that.pairsClicked){
              that.pairsClicked = true
              that.chosenCard = this
            } else {
              setTimeout(function(){
                flipCardRemove(object)
                flipCardRemove(that.chosenCard)
                that.chosenCard = null
                that.pairsClicked = false
              }, 2000)
            }
          }
        } else {
          if (!that.pairsClicked){
            that.pairsClicked = true
            that.chosenCard = this
          } else {
            setTimeout(function(){
              flipCardRemove(object)
              flipCardRemove(that.chosenCard)
              that.chosenCard = null
              that.pairsClicked = false
            }, 2000)
          }
        }
        console.log($(that.chosenCard).children())
  })
});


function flipCard(card) {
  $(card).children('div.back').css('display', 'none')
  $(card).children('div.front').addClass('back')
}

function flipCardRemove(card) {
  $(card).children('div.back').css('display', 'block')
  $(card).children('div.front').removeClass('back')
}

function removeFoundCard(card) {
  $(card).children('div.back').css('display', 'none')
  $(card).children('div.front').css('display', 'none')
}
