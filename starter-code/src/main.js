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


  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" add-class-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  memoryGame.isFinished();

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.card').click(function () {
    // TODO: write some code here

var carta=$(this);
var liso=$(this).children(":first");
var imagen=$(this).children(":nth-child(2)");

if(liso.attr("class")=="back"){

  if(memoryGame.pairsClicked===0){  
  memoryGame.pickedCards.push(carta);

  liso.toggleClass("back",false);
  liso.toggleClass("front",true);
  imagen.toggleClass("back",true);
  imagen.toggleClass("front",false);
  
    
    memoryGame.pairsClicked=1;

  }else if(memoryGame.pairsClicked===1){
    
    memoryGame.pickedCards.push(carta);

    liso.toggleClass("back",false);
    liso.toggleClass("front",true);
    imagen.toggleClass("back",true);
    imagen.toggleClass("front",false);

    memoryGame.pairsClicked=0;

 

    if(memoryGame.checkIfPair(memoryGame.pickedCards[0].attr("add-class-name"),memoryGame.pickedCards[1].attr("add-class-name"))){

    //memoryGame.pairsGuessed===1){

    //memoryGame.pairsGuessed=0;
    memoryGame.pickedCards=[];
    }else{ 

var capa1;
var capa2;
var liso1;
var imagen1;
var liso2;
var imagen2;

//do something special 
capa1 = memoryGame.pickedCards[0];
capa2 = memoryGame.pickedCards[1];

liso1=capa1.children(":first");
imagen1=capa1.children(":nth-child(2)");

liso2=capa2.children(":first");
imagen2=capa2.children(":nth-child(2)");


setTimeout(
  function(){ 
 

  liso1.toggleClass("back",true);
  liso1.toggleClass("front",false);
  imagen1.toggleClass("back",false);
  imagen1.toggleClass("front",true);

  liso2.toggleClass("back",true);
  liso2.toggleClass("front",false);
  imagen2.toggleClass("back",false);
  imagen2.toggleClass("front",true);



 }, 1000); 

 //memoryGame.pairsGuessed=0;
 memoryGame.pickedCards=[];

}


  }

    
}
    

  });
});

