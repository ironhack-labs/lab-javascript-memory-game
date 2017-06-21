$(document).ready(function() {

  var app = {
    cards: [1,1,2,2,3,3,4,4,5,5,6,6],
    init: function() {
      app.shuffle();

    },
    shuffle: function () {
      var random = 0;
      var temp = 0;
      for(i = 1; i < app.cards.length; i++) {
        // could use lo-dash below?? ._random
        random = Math.round(Math.random() * i);

        //store current index into temp
        temp = app.cards[i];
        //set that to a random
        app.cards[i] = app.cards[random];
        //then set back to the temp
        app.cards[random] = temp;
        //essentially swapping these numbers, better than
        //reducing to lower numbers and more  work
      }
      app.assignCards();
      console.log("Shuffled Card Array: " + app.cards);
    },
    assignCards: function() {
      $(".card").each(function(index) {
        //this assigns a value to the app.cards index of cards
        //data value can be seen in the console after shuffling
        $(this).attr("data-card-value", app.cards[index]);
      });
      // we want to handle it after they are assigned
      app.clickHandlers();
    },
    clickHandlers: function() {
      $(".card").on("click", function () {
        $(this).html("<p>" + $(this).data("cardValue") + "<p>").addClass("selected");
        app.checkMatch();
      });
    },
    checkMatch: function() {
      // if first selected equals last selected
      // (and there  are  only two)
      if ($(".selected").length === 2) {
        // if the selected first data value is equal to the other
        if ($(".selected").first().data("cardValue") === $(".selected").last().data("cardValue")) {
          //then opacity null function to EACH of them
          $(".selected").each(function() {
            $(this).animate({opacity: 0}).removeClass("unmatched");
          });
          $(".selected").each(function() {
            $(this).removeClass("selected");
          });
          app.checkWin();
        } else {
          setTimeout(function() {
            $(".selected").each(function() {
              $(this).html("").removeClass('selected');
            });
          }, 1000);
        }
      }
    },
    checkWin: function() {
      if($(".unmatched").length === 0 ) {
        $(".container").html("<h1>You Won!</h1>");
      }
    }

  };
  app.init();

});
