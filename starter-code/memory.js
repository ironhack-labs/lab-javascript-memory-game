var MemoryGame = function() {
  this.Cards = [
  		{ name: "aquaman",         img: "img/aquaman.jpg" },
  		{ name: "batman",          img: "img/batman.jpg" },
  		{ name: "captain america", img: "img/captain-america.jpg" },
  		{ name: "fantastic four",  img: "img/fantastic-four.jpg" },
  		{ name: "flash",           img: "img/flash.jpg" },
      { name: "green arrow",     img: "img/green-arrow.jpg" },
  		{ name: "green lantern",   img: "img/green-lantern.jpg" },
  		{ name: "ironman",         img: "img/ironman.jpg" },
  		{ name: "spiderman",       img: "img/spiderman.jpg" },
  		{ name: "superman",        img: "img/superman.jpg" },
  		{ name: "the avengers",    img: "img/the-avengers.jpg" },
  		{ name: "thor",            img: "img/thor.jpg" },
      { name: "aquaman",         img: "img/aquaman.jpg" },
  		{ name: "batman",          img: "img/batman.jpg" },
  		{ name: "captain america", img: "img/captain-america.jpg" },
      { name: "fantastic four",  img: "img/fantastic-four.jpg" },
  		{ name: "flash",           img: "img/flash.jpg" },
  		{ name: "green arrow",     img: "img/green-arrow.jpg" },
  		{ name: "green lantern",   img: "img/green-lantern.jpg" },
  		{ name: "ironman",         img: "img/ironman.jpg" },
  		{ name: "spiderman",       img: "img/spiderman.jpg" },
  		{ name: "superman",        img: "img/superman.jpg" },
  		{ name: "the avengers",    img: "img/the-avengers.jpg" },
  		{ name: "thor",            img: "img/thor.jpg" },
  	];
  this.picked_cards  = [];
  this.position_cards  = [];
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

MemoryGame.prototype.selectCard = function(card,i){
   this.picked_cards.push(card);
   this.position_cards.push(i);

   if (this.picked_cards.length===2){
     if(this.picked_cards[0]!=this.picked_cards[1] || this.position_cards[0]===this.position_cards[1]){
       var that = this;
       var delayTimer = setTimeout(function () {
       $("#theImg"+that.position_cards[0]).toggle();
       $("#theImg"+that.position_cards[1]).toggle();
       console.log(that.position_cards[0]);
       console.log(that.position_cards[1]);
       that.picked_cards.length=0;
       that.position_cards.length=0;
     },500);
   }else{
     var a = this.position_cards[0] +1;
     var b = this.position_cards[1] +1;
     $(".pic:nth-child("+a+")").prop( "disabled", true );
     $(".pic:nth-child("+b+")").prop( "disabled", true );
     this.picked_cards.length=0;
     this.position_cards.length=0;
     this.pairs_guessed +=1;
   }
    this.pairs_clicked +=1;
    this.finished();
   }

};

MemoryGame.prototype.finished = function() {

  if (this.pairs_guessed===this.Cards.length/2){
    $("#score").html("Final Score : "+this.pairs_clicked);
    $(".row").toggle();
    $(".jumbotron").toggle();
    console.log("hello");
   }
};




var memoryGame;
$(document).ready(function(){
  memoryGame = new MemoryGame();
  var that = this;
  $(".jumbotron").toggle();
 prepreGame();
 displayCards();
 for (i=0; i<memoryGame.Cards.length;i++){
 clickAction(i);
}
});

function prepreGame(){
  $(".pic").prop( "disabled", true );
  var start = setTimeout(function () {
  $("img").toggle();
  $(".pic").prop( "disabled", false );
},1000);
}

function displayCards(){
  for (i=0; i<memoryGame.Cards.length;i++){
    var a = i+1;
  $(".pic:nth-child("+a+")").prepend($('<img>',{id:'theImg'+i ,src:memoryGame.Cards[i].img}));
  }

}

function clickAction(i){
  var a = i+1;
 $(".pic:nth-child("+a+")").click(function(){
  $("#theImg"+i).toggle();
  var info =$("#theImg"+i).attr('src');
  console.log(info);
  memoryGame.selectCard(info,i);
  });
}
