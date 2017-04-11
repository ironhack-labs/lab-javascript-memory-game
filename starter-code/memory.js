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
    		{ name: "batman",          img: "batman.jpg" , guess: false},
    		{ name: "ironman",         img: "ironman.jpg" , guess: false},
    		{ name: "superman",        img: "superman.jpg" , guess: false},
    		{ name: "thor",            img: "thor.jpg" , guess: false},
    		{ name: "batman",          img: "batman.jpg" , guess: false},
    		{ name: "ironman",         img: "ironman.jpg" , guess: false},
    		{ name: "superman",        img: "superman.jpg" , guess: false},
    		{ name: "thor",            img: "thor.jpg" , guess: false}
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

MemoryGame.prototype.selectCard = function(cardId){

  if(this.pairs_clicked<2)
  {
    this.compareCards = false;
    this.pairs_clicked++;
    this.picked_cards.push(this.Cards[cardId]);
  }

  if(this.pairs_clicked ==2 && this.picked_cards.length === 2)
  {
    this._compareCards();
  }
};

MemoryGame.prototype._compareCards = function(){

  if(this.picked_cards[0].name === this.picked_cards[1].name)
  {
    this.pairs_guessed++;
    var self = this;
    var arrayTemp=[];
    this.Cards.forEach(function(card){
      if(card.name===self.picked_cards[0].name)
      {
        card.guess = true;
        arrayTemp.push(card);
      }
      else {
        arrayTemp.push(card);
      }
    });
    this.Cards = arrayTemp;
    this.picked_cards = [];
    this.pairs_clicked = 0;
  }
};

MemoryGame.prototype.resetClicked = function(cardId){

  var self = this;
  var arrayTemp=[];

  this.picked_cards.forEach(function(card){
    if(card.name!==self.Cards[cardId].name)
    {
      arrayTemp.push(card);
    }
    else {
      self.pairs_clicked--;
    }

  });
  this.picked_cards = arrayTemp;

};

MemoryGame.prototype.finished = function(){

  if(this.pairs_guessed*2 === this.Cards.length)
  {
    return true;
  }
  else {
    return false;
  }
};

//////////////////////////jquery///////////////////////////////////////////

var memoryGame;

$(document).ready(function(){
  //console.log("initDocument");

  memoryGame = new MemoryGame();
  $('#win-text').css('display','none');

  $('#memory_board').on('click', ".pic", function(){
    if(!memoryGame.finished())
    {
      var tempId = $(this).attr('id');
      tempId = parseInt(tempId.substr(4));

      if(memoryGame.Cards[tempId-1].guess === false && memoryGame.pairs_clicked<2)
      {
        memoryGame.selectCard(tempId-1);
        $(this).css('display','none');
        //console.log("this",this);
        var temp = "#card" + tempId + "-reversed";
        //console.log("temp",temp);
        $(temp).css('display','block');

        if(memoryGame.finished())
        {
          $('#win-text').css('display','block');
        }

      }
    }
  });

  $('#memory_board').on('click', ".pic-reversed", function(){
    if(!memoryGame.finished())
    {
      var tempId = $(this).attr('id');
      tempId = parseInt(tempId.substr(4,5));

      if(memoryGame.Cards[tempId-1].guess === false)
      {
        memoryGame.resetClicked(tempId-1);
        //memoryGame.selectCard(tempId-1);
        $(this).css('display','none');
        //console.log("this",this);
        var temp = "#card" + tempId;
        //console.log("temp",temp);
        $(temp).css('display','block');

      }
    }
  });

  //console.log(memoryGame.Cards.length);
  for(var i=0; i<memoryGame.Cards.length; i++)
  {
    var temp = "#card"+(i+1).toString();
    temp = temp + "-reversed";
    $(temp).css('display','none');
    temp = temp + " img";
    var tempImage="img\\"+memoryGame.Cards[i].img;
    $(temp).attr('src',tempImage);
  }
});
