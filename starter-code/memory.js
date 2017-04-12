

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

// Function to create correct url for each image, which is then added to the div using function addImagesToHtml
function doImgLoop() {
  var tmpArray = [];
  var tmp;
  for (var i=0; i<24; i++) {
    tmp = memoryGame.Cards[i].img;
    tmp = String(tmp);
    // console.log(tmp);
    tmp = "<img class=\"gamePic\" src=\"" + "./img/" + tmp + "\" alt=\"\">";
    // console.log(tmp);
    tmpArray[i] = tmp;
    // console.log(tmp);
  }
  return tmpArray;
}

// Function to add the Images to the different divs
function addImagesToHtml(textArray) {
  var tmpClassHolder;
  var x=0;
  $(".pic").each(function(){
      $(this).prepend(textArray[x]);
      x++;
  });
}

function updateRandomPictures() {
  var textArray = [];
  textArray = doImgLoop();
  addImagesToHtml(textArray);
}

function showPicturesShortly() {

    $(".pic").each(function(){
        $(".gamePic").show();
    });
  clearTimeout();
  setTimeout(function(){
    $(".pic").each(function(){
        $(".gamePic").hide();
    });
  }, 3500);
}

function hidePictures() {
  $(".pic").each(function(){
      $(".gamePic").hide();
  });
}

function eventListener(globalCounter) {
  var name1, name2;
  var choices = [];
  var clickCount = 0;
  $('#memory_board').click(function (e) {
    console.log(e);
      if (clickCount < 2) {
    if (e.target.id.match('pic')) {
        $(e.target).children().show();
        choices[clickCount] = $(e.target).children();
        // console.log(choices[clickCount]);
        clickCount++;
      }
      if (choices[0].attr('src') === choices[1].attr('src')) {
        // console.log('success');
        //animate:
        choices[0].fadeIn(100).delay(200).fadeOut(100).delay(200).fadeIn(100).delay(200).fadeOut(100).delay(200).fadeIn(100);
        choices[1].fadeIn(100).delay(200).fadeOut(100).delay(200).fadeIn(100).delay(200).fadeOut(100).delay(200).fadeIn(100);
        choices[0].parents().addClass("complete");
        choices[1].parents().addClass("complete");
        // checkCompletion();
        globalCounter += 2; // Counter to keep track of how many completed
        if (globalCounter == 24) { // If counter == to 24 then game complete
          $("#overlay").show();
          $("#overlay").delay(200).fadeOut(100).delay(200).fadeIn(100).delay(200).fadeOut(100).delay(200).fadeIn(100);
          $('#restart').click(function (e) {
            location.reload(true);
        }); } else {
          eventListener();
        }
      } else {
        setTimeout(function(){
          choices[0].hide();
          choices[1].hide();
          eventListener();
        }, 1500);

      }
    }
  });
}


var memoryGame;
$(document).ready(function(){
  var globalCounter = 0;
  $("#overlay").hide();
  memoryGame = new MemoryGame();
  updateRandomPictures(); // calls function where images are placed on the board in the order that were shuffled
  hidePictures(); // calls function to start the game with pictures hidden
  showPicturesShortly(); // calls function to briefly show the pictures before the game starts
  eventListener(globalCounter); // listens to key clicking on images, and checks the matching of all the images
});
