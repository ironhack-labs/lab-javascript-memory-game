var images = [];

// get images, place them in an array & randomize the order
for (var i = 0; i < 8; i++) {
  var rand = Math.floor(Math.random() * (1200 - 900 + 1) + 900);
  var img = 'http://lolcat.com/images/lolcats/' + rand + '.jpg';
  images.push(img);
  images.push(img);
}
randomizeImages();

// output images then hide them
var output = "<ol>";
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
