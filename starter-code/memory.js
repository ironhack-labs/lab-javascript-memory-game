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

MemoryGame.prototype.matchCards = function(objCard1, objCard2){
    return objCard1.name == objCard2.name;
};


$(document).ready(function(){
    
    var Global = {
            clickCounter: 0, 
            memoryGame: new MemoryGame(), 
            card2Index: []
        };
   
    console.log(Global.memoryGame.Cards);
    
    $(".panel-body").append(createCards(Global.memoryGame.Cards));
    
    console.log(createCards(Global.memoryGame.Cards));
    
    onCardClick(".card", clickHandler.bind({self:this}, Global));
});

function clickHandler(globalVarsObj){
    var cardSelector = $(event.currentTarget);
    
    console.log(cardSelector.attr("disable"));
    if (cardSelector.attr("disable") == "false"){
        cardSelector.attr("disable", "true");
        globalVarsObj.clickCounter++;
        console.log(globalVarsObj.clickCounter);
        cardSelector.css("background-image",'url("img/'+ $(event.currentTarget).attr("img-data") +'")');
        globalVarsObj.card2Index.push(cardSelector.attr("index"));
    }
    
    if (globalVarsObj.clickCounter == 2) {
        globalVarsObj.clickCounter = 0;
        processGameIteration(globalVarsObj);
    }           
}

function processGameIteration(globalVarsObj){
    console.log("I have one Pair");
    
    var index1 = globalVarsObj.card2Index[0];
    var index2 = globalVarsObj.card2Index[1];
    var cardObj1 = globalVarsObj.memoryGame.Cards[index1];
    var cardObj2 = globalVarsObj.memoryGame.Cards[index2];
    
    console.log(cardObj1);
    console.log(cardObj2);
    
    globalVarsObj.memoryGame.pairs_clicked++;
    
    if (globalVarsObj.memoryGame.matchCards(cardObj1, cardObj2)){
        console.log("Son Iguales");
        globalVarsObj.memoryGame.pairs_guessed++;
        globalVarsObj.card2Index = [];
    } else {
        console.log("Son Diferentes");
        
        globalVarsObj.card2Index = [];
        setTimeout(function(){
            $("."+index1).css("background-image",'url("img/cardBack.svg")');
            $("."+index1).attr("disable","false");
            $("."+index2).css("background-image",'url("img/cardBack.svg")');
            $("."+index2).attr("disable","false");
        }, 1000);
    }
    
    refreshStats(globalVarsObj);
}

function refreshStats(globalVarsObj){
    $("#clicked-pairs").text(globalVarsObj.memoryGame.pairs_clicked);
    $("#guessed-pairs").text(globalVarsObj.memoryGame.pairs_guessed);
}

function onCardClick(cssClass, fnArg){
    $(cssClass).on("click", fnArg);
}

function createCards(cardsArr){
    var htmlCards = [];
    cardsArr.forEach(function(cardObj, index){
        htmlCards.push(createHTMLCard(cardObj, index));
    });
    return htmlCards;
}

function createHTMLCard(cardObj, index){
    var divColumn = $("<div>");
    var divCard = $("<div>");
    
    divColumn.addClass("card-holder");
    
    divCard.addClass("card");
    divCard.addClass(index.toString());
    divCard.attr("name",cardObj.name);
    divCard.attr("img-data", cardObj.img);
    divCard.attr("index", index);
    divCard.attr("disable", "false");
    
    divColumn.append(divCard);
    
    return divColumn;
}
