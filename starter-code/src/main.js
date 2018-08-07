var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){

  var dealCards = function() {
    var html = ' ';
      cards.forEach(function (pic, index) {
        html += '<div class= "card" id="card_' + pic.name + '">';
        html += '<div class="back"';
        html += '    name="'       + pic.img +  '">';
        html += '</div>';
        html += '<div class="front" ';
        html += 'style="background: url(img/' + pic.img + ') no-repeat">';
        html += '</div>';
        html += '</div>';
        $('#memory_board').html(html);
      });
      // Add all the div's to the HTML
      document.getElementById('memory_board').innerHTML = html;


      // Bind the click event of each element to a function
    $('.back').on('click', function () {
     
      $(this).toggle();
      $(this).parent().find('.front').toggle();
      
      oneGame.currentPair.push($(this));
      
      if (oneGame.currentPair.length === 2){
        var result = oneGame.checkIfPair(oneGame.currentPair[0], oneGame.currentPair[1])
        $('#pairs_clicked').html(oneGame.pairsClicked);
        $('#pairs_guessed').html(oneGame.pairsGuessed);
        

        if(!result){

          setTimeout(function(){
            oneGame.currentPair[0].toggle();
            oneGame.currentPair[0].parent().find('.front').toggle();
            oneGame.currentPair[1].toggle();
            oneGame.currentPair[1].parent().find('.front').toggle();
            oneGame.currentPair = [];
          }, 1000);
        }
         else {
           oneGame.currentPair = [];
           $('.back').removeClass('blocked');
         }
      
      }
    });
    }
  

var MemoryGame = function (deckOfCards) {
  this.cards = deckOfCards;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.currentPair = [];
};

MemoryGame.prototype.shuffleCard = function () {
  var cardsArr = this.cards;

  for (var i = cardsArr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cardsArr[i];
    cardsArr[i] = cardsArr[j];
    cardsArr[j] = temp;
}

this.cards = cardsArr;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 this.pairsClicked++;
 if(firstCard.attr('name') === (secondCard.attr('name'))) {
   this.pairsGuessed++;
   return true;
 }
 return false;
}

MemoryGame.prototype.finished = function () {
    return this.pairsGuessed >= 12;
};

var oneGame = new MemoryGame(cards);
oneGame.shuffleCard();
dealCards();

});
