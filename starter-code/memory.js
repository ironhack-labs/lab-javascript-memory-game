//******************************************************************
// Game Logic
function MemoryGame(){
this.cards = [ ];
}
var cards1 = {
    name: "aquaman",
    image: "img/aquaman.jpg"
};
var cards2 = {
    name: "aquaman",
    image: "img/aquaman.jpg"
};
var cards3 = {
    name: "batman",
    image: "img/batman.jpg"
};
var cards4 = {
    name: "batman",
    image: "img/batman.jpg"
};
var cards5 = {
    name: "captain-america",
    image: "img/captain-america.jpg"
};
var cards6 = {
    name: "captain-america",
    image: "img/captain-america.jpg"
};
var cards7 = {
    name: "fantastic-four",
    image: "img/fantastic-tour.jpg"
};
var cards8 = {
    name: "fantastic-four",
    image: "img/fantastic-tour.jpg"
};
var cards9 = {
    name: "flash",
    image: "img/flash.jpg"
};
var cards10 = {
    name: "flash",
    image: "img/flash.jpg"
};
var cards11 = {
    name: "green-arrow",
    image: "img/green-arrow.jpg"
};
var cards12 = {
    name: "green-arrow",
    image: "img/green-arrow.jpg"
};
var cards13 = {
    name: "green-lantern",
    image: "img/green-lantern.jpg"
};
var cards14 = {
    name: "green-lantern",
    image: "img/green-lantern.jpg"
};
var cards15 = {
    name: "ironman",
    image: "ironman.jpg"
};
var cards16 = {
    name: "ironman",
    image: "ironman.jpg"
};
var cards17 = {
    name: "spiderman",
    image: "spiderman.jpg"
};
var cards18 = {
    name: "spiderman",
    image: "spiderman.jpg"
};
var cards19 = {
    name: "superman",
    image: "superman.jpg"
};
var cards20 = {
    name: "superman",
    image: "superman.jpg"
};
var cards21 = {
    name: "the-avengers",
    image: "the-avengers.jpg"
};
var cards22 = {
    name: "the-avengers",
    image: "the-avengers.jpg"
};
var cards23 = {
    name: "thor",
    image: "thor.jpg"
};
var cards24 = {
    name: "thor",
    image: "thor.jpg"
};

var memoryGame1 = new MemoryGame();
memoryGame1.cards = [cards1 , cards2, cards3, cards4,cards5, cards6,cards7,cards8,cards9,cards10,cards11,cards12,cards13,cards14,cards15,cards16,cards17,cards18,cards19,cards20,cards21,cards22,cards23,cards24];


 var arrayShuffle =[];
function suffleArray(memoryGame1){
  /*memoryGame1.cards.sort(function()
  {
       return  Math.random() - 0.5;

  });*/
 _.shuffle(memoryGame1);

}

function selectCard(memoryGame1){

}


//******************************************************************

//******************************************************************
// HTML/CSS Interactions
//******************************************************************
$( document ).ready(function() {
console.log("hola");
for(i=0;i<memoryGame1.cards.length;i++){
  $("#board").append("<div class=pic name=" +_.shuffle(memoryGame1)[i].name+ "  ></div>");
}
});
