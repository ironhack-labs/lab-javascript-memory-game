$( document ).ready(function() {

//******************************************************************
// Game Logic
//******************************************************

var guess1 = 0;
var guess2 = 0;
var counter = 0;


$('#memory_board').on("click", ".pic", function() {
  if (counter < 2) {
    counter++;
    $(this).toggleClass("hidden");
    $(this).toggleClass("selected");
  }
  if (counter === 1 ) {
    guess1 = Number(this.id);
    if (guess1 >=12) {
      guess1 = guess1 - 12;
    }
    console.log(guess1 + " is the first card");
  }
  else {
    guess2 = Number(this.id);
    if (guess2 >=12) {
      guess2 = guess2 - 12;
    }
    console.log(guess2 + " is the second card");

    if (guess1 === guess2) {
      console.log(guess1 + ' & ' + guess2 + ' are a match');
      setTimeout(function() {
        $('.selected').addClass('.stay-flipped');
      }, 3000);
    }
    else {
      console.log("try again");
      setTimeout(function() {
        $('.selected').toggleClass("hidden selected");
      }, 3000);
    }
    counter = 0;
    }
});


// RANDOMIZING ARRAY

var picArray = $('.pic').toArray();

function shuffle(array) {
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
}

var cards = [
		{
			name: "aquaman",
			img: "img/aquaman.jpg",
			id: 1,
		},
    {
      name: "batman",
      img: "img/batman.jpg",
      id: 2,
    },
    {
      name: "captain-america",
      img: "img/captain-america.jpg",
      id: 3,
    },
    {
      name: "fantastic-four",
      img: "img/fantastic-four.jpg",
      id: 4,
    },
    {
      name: "flash",
      img: "img/flash.jpg",
      id: 5,
    },
    {
      name: "green-arrow",
      img: "img/green-arrow.jpg",
      id: 6,
    },
    {
      name: "green-lantern",
      img: "img/green-lantern.jpg",
      id: 7,
    },
    {
      name: "ironman",
      img: "img/ironman.jpg",
      id: 8,
    },
    {
      name: "spiderman",
      img: "img/spiderman.jpg",
      id: 9,
    },
    {
      name: "superman",
      img: "img/superman.jpg",
      id: 10,
    },
    {
      name: "the-avengers",
      img: "img/the-avengers.jpg",
      id: 11,
    },
    {
      name: "thor",
      img: "img/thor.jpg",
      id: 12,
    },
    {
      name: "aquaman",
      img: "img/aquaman.jpg",
      id: 13,
    },
    {
      name: "batman",
      img: "img/batman.jpg",
      id: 14,
    },
    {
      name: "captain-america",
      img: "img/captain-america.jpg",
      id: 15,
    },
    {
      name: "fantastic-four",
      img: "img/fantastic-four.jpg",
      id: 16,
    },
    {
      name: "flash",
      img: "img/flash.jpg",
      id: 17,
    },
    {
      name: "green-arrow",
      img: "img/green-arrow.jpg",
      id: 18,
    },
    {
      name: "green-lantern",
      img: "img/green-lantern.jpg",
      id: 19,
    },
    {
      name: "ironman",
      img: "img/ironman.jpg",
      id: 20,
    },
    {
      name: "spiderman",
      img: "img/spiderman.jpg",
      id: 21,
    },
    {
      name: "superman",
      img: "img/superman.jpg",
      id: 22,
    },
    {
      name: "the-avengers",
      img: "img/the-avengers.jpg",
      id: 23,
    },
    {
      name: "thor",
      img: "img/thor.jpg",
      id: 24,
    },
	];

shuffle(cards);

// APPENDING PIC CARD DIVS TO HTML

for (var i = 0; i < cards.length; i++) {
  var backgroundImage = cards[i].img;
  var imageId = cards[i].id;
  var div = $("<div></div>");
  div.addClass("pic hidden");
  div.css("background-image", "url(" + backgroundImage + ")");
  div.attr("id", imageId);
  $('#memory_board').append(div);
}

//******************************************************************
// HTML/CSS Interactions
//******************************************************************







});
