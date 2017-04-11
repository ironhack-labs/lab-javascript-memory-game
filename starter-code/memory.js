////////////////////////////////////gameLogic//////////////////////////////

var MemoryGame = function() {
  console.log("initObj");
  // this.Cards = [
  // 		{ name: "aquaman",         img: "aquaman.jpg" },
  // 		{ name: "batman",          img: "batman.jpg" },
  // 		{ name: "captain america", img: "captain-america.jpg" },
  // 		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  // 		{ name: "flash",           img: "flash.jpg" },
  //     { name: "green arrow",     img: "green-arrow.jpg" },
  // 		{ name: "green lantern",   img: "green-lantern.jpg" },
  // 		{ name: "ironman",         img: "ironman.jpg" },
  // 		{ name: "spiderman",       img: "spiderman.jpg" },
  // 		{ name: "superman",        img: "superman.jpg" },
  // 		{ name: "the avengers",    img: "the-avengers.jpg" },
  // 		{ name: "thor",            img: "thor.jpg" },
  //     { name: "aquaman",         img: "aquaman.jpg" },
  // 		{ name: "batman",          img: "batman.jpg" },
  // 		{ name: "captain america", img: "captain-america.jpg" },
  //     { name: "fantastic four",  img: "fantastic-four.jpg" },
  // 		{ name: "flash",           img: "flash.jpg" },
  // 		{ name: "green arrow",     img: "green-arrow.jpg" },
  // 		{ name: "green lantern",   img: "green-lantern.jpg" },
  // 		{ name: "ironman",         img: "ironman.jpg" },
  // 		{ name: "spiderman",       img: "spiderman.jpg" },
  // 		{ name: "superman",        img: "superman.jpg" },
  // 		{ name: "the avengers",    img: "the-avengers.jpg" },
  // 		{ name: "thor",            img: "thor.jpg" },
  // 	];

    this.Cards = [
    		{ name: "batman",          img: "batman.jpg" },
    		{ name: "ironman",         img: "ironman.jpg" },
    		{ name: "superman",        img: "superman.jpg" },
    		{ name: "thor",            img: "thor.jpg" },
    		{ name: "batman",          img: "batman.jpg" },
    		{ name: "ironman",         img: "ironman.jpg" },
    		{ name: "superman",        img: "superman.jpg" },
    		{ name: "thor",            img: "thor.jpg" }
    	];

  this.picked_cards  = [];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;
  this._shuffleCard();
  this.startGame = false;
  this.gameFinished = false;
  this.compareCardsBool = false;
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

MemoryGame.prototype.selectCard = function(card){

  if(!this.startGame)
  {
    this.startGame = true;
  }

  if(this.pairs_clicked<2)
  {
    this.compareCards = false;
    this.pairs_clicked++;
    this.picked_cards.push(this.Cards[card]);
  }

  if(this.pairs_clicked ==2)
  {
    this.compareCardsBool = true;

    this._compareCards();
  }

};

MemoryGame.prototype._compareCards = function(){

  if(this.picked_cards[0].name === this.picked_cards[0].name)
  {
    this.pairs_guessed++;
  }
};

MemoryGame.prototype.finished = function(){

  if(this.pairs_guessed*2 === this.Cards.length)
  {
    this.gameFinished = true;
  }
};



//////////////////////////jquery///////////////////////////////////////////

var memoryGame;

$(document).ready(function(){
  console.log("initDocument");
  memoryGame = new MemoryGame();

  // $('.btn-pepperonni').on('click', function(){
  // });
  //
  // $('#listTask').on('click', ".fa", function(){
  //
  // });

  var temp="";
  var tempImage="";
  console.log(memoryGame.Cards.length);
  for(var i=0; i<memoryGame.Cards.length; i++)
  {
    temp = "#card"+(i+1).toString();
    console.log(temp);
    $(temp).on('click', function(){
        //selectCard(i);
        var tempId = "";
        tempId = $(this).attr('id');
        tempId = parseInt(tempId.substr(4));
        selectCard(tempId);
        //tempId
    });

    temp = temp + "-reversed";
    console.log(temp);
    $(temp).css('display','none');

    temp = temp + " img";
    console.log(temp);
    tempImage="img\\"+memoryGame.Cards[i].img;
    $(temp).attr('src',tempImage);





  }






});
