$(document).ready(function(){


//******************************************************************
// Game Logic
//******************************************************************

/*********Card******************/
function Card(nam,number,imageURL,find){
  this.nam = nam;
  this.number = number;
  this.imageURL = imageURL;
  this.find = find;
}
//Creacion objetos Card
var memo = new MemoryGame();

memo.Cards[0]= new Card("aquaman",-1,"./img/aquaman.jpg",false);
memo.Cards[1] = new Card("aquaman",-1,"./img/aquaman.jpg",false);
memo.Cards[2] = new Card("batman",-1,"./img/batman.jpg",false);
memo.Cards[3] = new Card("batman",-1,"./img/batman.jpg",false);
memo.Cards[4] = new Card("captain-america",-1,"./img/captain-america.jpg",false);
memo.Cards[5] = new Card("captain-america",-1,"./img/captain-america.jpg",false);
memo.Cards[6] = new Card("fantastic-four",-1,"./img/fantastic-four.jpg",false);
memo.Cards[7] = new Card("fantastic-four",-1,"./img/fantastic-four.jpg",false);
memo.Cards[8] = new Card("flash",-1,"./img/flash.jpg",false);
memo.Cards[9] = new Card("flash",-1,"./img/flash.jpg",false);
memo.Cards[10] = new Card("green-arrow",-1,"./img/green-arrow.jpg",false);
memo.Cards[11] = new Card("green-arrow",-1,"./img/green-arrow.jpg",false);
memo.Cards[12] = new Card("green-lantern",-1,"./img/green-lantern.jpg",false);
memo.Cards[13] = new Card("green-lantern",-1,"./img/green-lantern.jpg",false);
memo.Cards[14] = new Card("ironman",-1,"./img/ironman.jpg",false);
memo.Cards[15] = new Card("ironman",-1,"./img/ironman.jpg",false);
memo.Cards[16] = new Card("spiderman",-1,"./img/spiderman.jpg",false);
memo.Cards[17] = new Card("spiderman",-1,"./img/spiderman.jpg",false);
memo.Cards[18] = new Card("superman",-1,"./img/superman.jpg",false);
memo.Cards[19] = new Card("superman",-1,"./img/superman.jpg",false);
memo.Cards[20] = new Card("the-avengers",-1,"./img/the-avengers.jpg",false);
memo.Cards[21] = new Card("the-avengers",-1,"./img/the-avengers.jpg",false);
memo.Cards[22] = new Card("thor",-1,"./img/thor.jpg",false);
memo.Cards[23] = new Card("thor",-1,"./img/thor.jpg",false);

console.log(memo.Cards);

/*********MemoryGame******************/
function MemoryGame(){
  this.Cards=[];
}

MemoryGame.prototype.lookCard = function(ident){
  var l=0;
  while(l < ident){
    if(ident===this.Cards[l]){
      return this.Cards[l];
    }else{
      l++;
    }
  }
};


MemoryGame.prototype.shuffleCard = function() {
  var visited=[];
  for(var i = 0; i < 24; i++){
    var random=Math.random() * 23;
    if(!lookRandom(random,visited)){
      this.Cards[random] = this.lookCard(i);
    }
  }
  for(var j = 0; j < 24; j++){
    this.Cards[i].number %= 12;
  }//ERROR UNDEFINED
  return true;
};
function lookRandom(random,visited){
  var n=0;
  while(n < visited.length){
    if(n === visited[n]){
      return true;
    }else{
      n++;
    }
    return false;
  }
}


MemoryGame.prototype.selectCard = function(){
  return this.card.number;
};
MemoryGame.prototype.linkImages =function(){
  for(var k = 0;k < 24; k++){
    $(".pic")[k].attr("background-image",memo.Cards[k].imageURL);
  }
};

memo.shuffleCard();
memo.linkImages();

//******************************************************************
// HTML/CSS Interactions
//******************************************************************
//SE ALMACENAN EN 2 VARIABLES LAS CARTAS ELEGIDAS
//SI SE ACIERTA find=true Y EL ATRIBUTO background-image NO ES NONE
//LA FUNCION WIN TIENE QUE COMPROBAR SI TODAS LAS CARTAS TIENEN FIND=TRUE

  //$(".pic").on("click",memo.selectCard);
});
