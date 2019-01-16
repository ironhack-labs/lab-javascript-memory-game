var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0; 
};

MemoryGame.prototype.shuffleCards = function () {

  var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }




  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

var first = $(firstCard).parent().attr("data-card-name")
var second = $(secondCard).parent().attr("data-card-name");

if(first === second){
 this.pairsGuessed += 1;
 $("#pairs_guessed").html(this.pairsGuessed)
 return true;
    }

  return false; 
    }

MemoryGame.prototype.isFinished = function () {
  if(this.pairsClicked === 0 || this.pairsGuessed < (this.cards.length/2) ){
    return false
  }
  
  if(this.pairsGuessed === (this.cards.length/2)){
    
    return true
  }
 

};


var game = new MemoryGame(cards);


$(document).ready(function(){

  $('.back').click(function(){
    
  $("#pairs_clicked").html(++game.pairsClicked)
    
  
  //$(this).toggleClass("front back")
  //$(this).next().toggleClass("back front")

    
     //La imagen azul se va
 
//fadeIn muestra algo oculto
//fadeOut hace desaparecer
  //La imagen del superheroe aparece

  //Hace aparecer cada imagen

  $(this).fadeOut(500,function(){
    
    $(this).removeClass("back")
    $(this).addClass("front")
  
  })

 $(this).fadeIn(500,function(){
  $(this).next().removeClass("front")
    $(this).next().addClass("back") 
 })




   
    game.pickedCards.push(this)
   //.parents().attr("data-card-name")

    if(game.pickedCards.length ===  2){

      if(game.checkIfPair(game.pickedCards[0],game.pickedCards[1])=== false){
      

       
//Hace aparecer cada imagen

$(game.pickedCards[0]).next().addClass("front")
  $(game.pickedCards[0]).next().removeClass("back")               
  $(game.pickedCards[0]).removeClass("front")
  $(game.pickedCards[0]).addClass("back")
     


setTimeout(function(){


  $(game.pickedCards[1]).next().removeClass("back")
  $(game.pickedCards[1]).next().addClass("front")
  $(game.pickedCards[1]).addClass("back estoesback")
  $(game.pickedCards[1]).removeClass("front")
  game.pickedCards = []
    
},2000)
 

 

        

        //Aparece el fondo azul
        
   
      } else {
        game.pickedCards = []
      }

       
       
      
    } 
    
    
 
   

    
  });
});

