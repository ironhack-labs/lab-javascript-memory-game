// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [{
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
    {
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};







//cards, selectedCards, pairsClicked, correctPairs

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
      memoryGame = new MemoryGame();
      MemoryGame.prototype._shuffleCards = function() {};









      var html = '';

      memoryGame.cards.forEach(function(pic, index) {
        var sanitizedName = pic.name.split(' ').join('_');

        html += '<div  class= "card" name="card_' + sanitizedName + '">';
        html += '<div role="button" class="back"';
        html += '    name="' + pic.name + '">';
        html += '</div>';
        html += '<div class="front" ';
        html += 'style="background: url(img/' + pic.img + '") no-repeat"';
        html += '    name="' + pic.name + '">';
        html += '</div>';
        html += '</div>';


        /*$(".back").click(function() {
          $(".card").addClass("selected");
        });

        if ($(".card").hasClass("selected")) {
          $(".card").toggleClass("front");
        }*/



        /*

            $(".back").click(function() {
              $(".card").toggleClass("selected");
            });

            if ($(".card").hasClass("selected")) {
              $(".card").addClass("front");
            }
          });

        */
      });

      $(document).ready(function() {
        $('.back').on("click", (function() {
          $(this).parent().toggleClass("front");

        }));
      });

      //if i click the child of a div create class selected




      MemoryGame.prototype.selectCard = function(cards) {

        function shuffle(cards) {
          var m = randomizerArray.length,
            t, i;

          // While there remain elements to shuffle…
          while (m) {
            //
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = randomizerArray[m];
            randomizerArray[m] = randomizerArray[i];
            randomizerArray[i] = t;
          }

          //this.cards[yx].push(this.selectedCards);


        };


        //var memory_boardArray = document.getElementById('memory_board');

        //var memory_boardArray = $("#memory_board");



        //$("#memory_board").children();



        //first child







        /*  $(".card:first-child").click(function() {
            $(".card").toggleClass("front");
          });


        $("#memory_board  > div");

        */

        /*
          $(".card:first-child").click(function() {
            $(".card").toggleClass("selected");
          });

          if ($(".card").hasClass("selected")) {
            $(".card").addClass("front");
          }


        */


        //$(: nth - child(0));



        // Add all the divs to the HTML
        document.getElementById('memory_board').innerHTML = html;
      });





    /* var randomizerArray = [];
      var elements = document.getElementById("memory_board");

      for (var ix = 0; ix < elements.length; ix++) {
        randomizerArray.push(elements[ix]);
      }


    var elements = document.getElementById("memory_board");
    Array.from(elements);




      MemoryGame.prototype.shuffleCard = function(cards) {


        function shuffle(randomizerArray) {
          var m = randomizerArray.length,
            t, i;

          // While there remain elements to shuffle…
          while (m) {
            //
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = randomizerArray[m];
            randomizerArray[m] = randomizerArray[i];
            randomizerArray[i] = t;
          }

          return randomizerArray;
        }

        //$("#memory_board").contents().replaceWith(array);

      };

    */



    // function shuffle(array) {
    //   var m = array.length, t, i;
    //
    //   // While there remain elements to shuffle…
    //   while (m) {
    //
    //     // Pick a remaining element…
    //     i = Math.floor(Math.random() * m--);
    //
    //     // And swap it with the current element.
    //     t = array[m];
    //     array[m] = array[i];
    //     array[i] = t;
    //   }
    //
    //   return array;
    // }







    // Math.floor(Math.random()*12)
    // for(var ix = 0;ix < cards.length;ix++){
    //             cards[ix].name;
