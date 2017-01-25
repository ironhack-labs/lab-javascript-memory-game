//******************************************************************
// Game Logic
//******************************************************************
var choiceOne = 'undefined';
var choiceTwo = 'undefined';
var clickedThing;

function firstChoice () {
  console.log("first choice");
  clickedThing.show();
  choiceOne = clickedThing;
  return choiceOne;
}

function secondChoice () {
  console.log("second choice");
  clickedThing.show();
  choiceTwo = clickedThing;
  return choiceTwo;
}



function result () {

  if (choiceTwo.attr("name") === choiceOne.attr("name")) {
    console.log("Nice One");
    choiceOne.addClass("active");
    choiceTwo.addClass("active");
    choiceOne.off("click");
    choiceTwo.off("click");
    choiceOne = 'undefined';
    choiceTwo = 'undefined';
  } else {
    console.log("Nope! Try again...");
    choiceOne = 'undefined';
    choiceTwo = 'undefined';
    setTimeout(function() {
      $.each($("#gameBoard div img"), function(i,elem) {
        if ($(elem).is(":visible") && !$(elem).hasClass("active")) {
          $(elem).hide();
        }
      });
    }, 800);
  }
  return choiceOne, choiceTwo;
}


//******************************************************************
// HTML/CSS Interactions
//******************************************************************
var div = ('<div></div>');
var imgArray = [
  {
    img: 'img/aquaman.jpg',
    id: 'aquaman'
  },
  {
    img: 'img/aquaman.jpg',
    id: 'aquaman'
  },
  {
    img: 'img/batman.jpg',
    id: 'batman'
  },
  {
    img: 'img/batman.jpg',
    id: 'batman'
  },
  {
    img: 'img/captain-america.jpg',
    id: 'captain-america'
  },
  {
    img: 'img/captain-america.jpg',
    id: 'captain-america'
  },
  {
    img: 'img/fantastic-four.jpg',
    id: 'fantastic-four'
  },
  {
    img: 'img/fantastic-four.jpg',
    id: 'fantastic-four'
  },
  {
    img: 'img/flash.jpg',
    id: 'flash'
  },
  {
    img: 'img/flash.jpg',
    id: 'flash'
  },
  {
    img: 'img/green-arrow.jpg',
    id: 'green-arrow'
  },
  {
    img: 'img/green-arrow.jpg',
    id: 'green-arrow'
  },
  {
    img: 'img/green-lantern.jpg',
    id: 'green-lantern'
  },
  {
    img: 'img/green-lantern.jpg',
    id: 'green-lantern'
  },
  {
    img: 'img/ironman.jpg',
    id: 'ironman'
  },
  {
    img: 'img/ironman.jpg',
    id: 'ironman'
  },
  {
    img: 'img/spiderman.jpg',
    id: 'spiderman'
  },
  {
    img: 'img/spiderman.jpg',
    id: 'spiderman'
  },
  {
    img: 'img/superman.jpg',
    id: 'superman'
  },
  {
    img: 'img/superman.jpg',
    id: 'superman'
  },
  {
    img: 'img/the-avengers.jpg',
    id: 'the-avengers'
  },
  {
    img: 'img/the-avengers.jpg',
    id: 'the-avengers'
  },
  {
    img: 'img/thor.jpg',
    id: 'thor'
  },
  {
    img: 'img/thor.jpg',
    id: 'thor'
  }
];

var suffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

function picCreator() {
  suffle(imgArray);

  for(var i = 0; i < imgArray.length; i++) {
    $("#gameBoard").append(div);
  }

  var myDivArray = $("#gameBoard div");
  $.each(myDivArray, function(i,elem) {
    $(elem).addClass('pic');
    $(elem).append("<img src=''>");
  });

  var myImgArray = $("#gameBoard div img");
  $.each(myImgArray, function(i,elem) {
    $(elem).attr("src",imgArray[i].img);
    $(elem).attr("name",imgArray[i].id);
    $(elem).hide();
    $(elem).addClass("image");
  });
  $("#gameBoard div").on('click', function () {
    clickedThing = $(this).children("img");
    console.log(choiceOne, choiceTwo);
    if (choiceOne === 'undefined') {
      firstChoice();
    } else if (choiceOne !== 'undefined') {
      secondChoice();
      result();
    }
  });
}

$(document).ready(function(){
  picCreator();
});
