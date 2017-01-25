//******************************************************************
// Game Logic
//******************************************************************
var Card = [{name: 'aquaman', image: 'aquaman.jpg'}, {name: 'aquaman', image: 'aquaman.jpg'},
            {name: 'batman', image: 'batman.jpg'}, {name: 'batman', image: 'batman.jpg'},
            {name: 'captain-america', image: 'captain-america.jpg'}, {name: 'captain-america', image: 'captain-america.jpg'},
            {name: 'fantastic-four', image: 'fantastic-four.jpg'}, {name: 'fantastic-four', image: 'fantastic-four.jpg'},
            {name: 'flash', image: 'flash.jpg'}, {name: 'flash', image: 'flash.jpg'},
            {name: 'green-arrow', image: 'green-arrow.jpg'}, {name: 'green-arrow', image: 'green-arrow.jpg'},
            {name: 'green-lantern', image: 'green-lantern.jpg'}, {name: 'green-lantern', image: 'green-lantern.jpg'},
            {name: 'ironman', image: 'ironman.jpg'}, {name: 'ironman', image: 'ironman.jpg'},
            {name: 'spiderman', image: 'spiderman.jpg'}, {name: 'spiderman', image: 'spiderman.jpg'},
            {name: 'superman', image: 'superman.jpg'}, {name: 'superman', image: 'superman.jpg'},
            {name: 'the-avengers.jpg', image:'superman.jpg'}, {name: 'the-avengers.jpg', image:'superman.jpg'},
            {name: 'thor', image: 'thor.jpg'}, {name: 'thor', image: 'thor.jpg'}];


var m = Card.length, t, i;

while (m) {
  i = Math.floor(Math.random() * m--);

  t = Card[m];
  Card[m] = Card[i];
  Card[i] = t;
}
console.log(Card);

//******************************************************************
// HTML/CSS Interactions
//******************************************************************
$(document).ready(function(){
  var output = "<div game-table>";
  for (var i = 0; i < 16; i++) {
    output += "<li>";
    output += "<img src = '" + images[i] + "'/>";
    output += "</li>";
  }
  output += "</ol>";
  document.getElementById("container").innerHTML = output;
  $("img").hide();

  var guess1 = "";
  var guess2 = "";
  var count = 0;

  $("li").click(function() {
    if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {

      // increment guess count, show image, mark it as face up
      count++;
      $(this).children("img").show();
      $(this).children("img").addClass("face-up");

      //guess #1
      if (count === 1 ) {
        guess1 = $(this).children("img").attr("src");
      }

      //guess #2
      else {
        guess2 = $(this).children("img").attr("src");

        // since it's the 2nd guess check for match
        if (guess1 === guess2) {
          console.log("match");
          $("li").children("img[src='" + guess2 + "']").addClass("match");
        }

        // else it's a miss
        else {
          console.log("miss");
          setTimeout(function() {
            $("img").not(".match").hide();
            $("img").not(".match").removeClass("face-up");
          }, 1000);
        }

        // reset
        count = 0;
        setTimeout(function() { console.clear(); }, 60000);
      }
    }
  });

  // randomize array of images
  function randomizeImages(){
    Array.prototype.randomize = function()
    {
      var i = this.length, j, temp;
      while ( --i )
      {
        j = Math.floor( Math.random() * (i - 1) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    };

    images.randomize();
  }

});
