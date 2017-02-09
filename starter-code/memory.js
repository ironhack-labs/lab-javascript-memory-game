//******************************************************************
// Game Logic
//******************************************************************

//******************************************************************
// HTML/CSS Interactions
//******************************************************************
$(document).ready(function(){

  // demoP = document.getElementById("demo");
  // var imgs = ["img/aquaman.jpg", "img/batman", "img/captain-america.jpg"];
  //
  // function myFunction(item, index) {
  //     demoP.innerHTML = demoP.innerHTML + "index[" + 0 + "]: " + item + "<br>";
  // }

      $("#hide").click(function(){
          $("p").hide();
      });
      $("#show").click(function(){
          $("p").show();
      });

  });
