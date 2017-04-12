

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
    // console.log(this.Cards[counter]);
  }

  return;
};

function doUrlLoop() {
  var tmpArray = [];
  var tmp;
  for (var i=0; i<24; i++) {
    tmp = memoryGame.Cards[i].img;
    tmp = String(tmp);
    console.log(tmp);
    tmp = "url('./img/" + tmp + "')";
    tmpArray[i] = tmp;
    // console.log(tmp);
  }
  return tmpArray;
}

function updateCssLoop(textArray) {
  var tmpClassHolder;
  for (var x=0; x<24; x++) {
    tmpClassHolder = "pic";
    tmpClassHolder = tmpClassHolder + (x + 1);
    $('.' + tmpClassHolder).css('background-image',textArray[x]);
    $('.' + tmpClassHolder).attr('id','\'' + memoryGame.Cards[x].name + '\'');
  }
}

function updateRandomPictures() {
  var textArray = [];
  textArray = doUrlLoop();
  updateCssLoop(textArray);
}

function showPicturesShortly() {
  $("#overlay").hide();
  setTimeout(function(){
    $("#overlay").show();
}, 2000);

}

function eventListener() {
  var name1, name2;
  var choices = [];
  var clickCount = 0;
  $('#overlay').click(function (e) {
      if (clickCount < 2) {
    if (e.target.id.match('pic')) {
        var entry = $(e.target);
        console.log(entry);
        entry.css('opacity','0');
        choices[clickCount] = entry;
        console.log("clickCount: " + clickCount);
        clickCount++;

      }
    }

    console.log("test");
    var choice1 = choices[0];
    var choice2 = choices[1];
    console.log(choice1);
    var id1overlay;
    id1overlay = choice1.attr('id');
    name1 = $('.' + id1overlay).attr('id');
    var id2overlay;
    id2overlay = choice2.attr('id');
    name2 = $('.' + id2overlay).attr('id');
    // console.log("id",id1overlay);
    // console.log("id",id2overlay);

    // name1 = $('.' + id1overlay).attr('id');
    // name2 = $('.' + id2overlay).attr('id');
    // console.log("name", name1);
    // console.log("name", name2);
    if (name1 != name2 && name2 !== null && name1 !== null) {
      setTimeout(function(){
        choice1.css('opacity','1');
        choice2.css('opacity','1');
        clickCount = 0;
        name1=null;
        name2=null;
      }, 2500);


      eventListener();
    } else {

      var imageLink = $('.'+id1overlay).css('background-image');
      choice1.css('background-image',imageLink);
      choice1.css('background-size','contain');
      choice2.css('background-image',imageLink);
      choice2.css('background-size','contain');
      name1=null;
      name2=null;
      clickCount = 0;
      eventListener();
      // console.log(imageLink);
      // choice1.css('background-image','\'' + m);
      // choice2.css('disabled','true');
    }

  //  if (choice1.attr('id') != choice2.attr('')) {

  //  }

  });
}

function playRules(choices) {
}

var memoryGame;
$(document).ready(function(){
  memoryGame = new MemoryGame();
  $("#overlay").css('background','transparent');
  // console.log(memoryGame.Cards[0]);
  updateRandomPictures();
  showPicturesShortly();
  eventListener();



});
