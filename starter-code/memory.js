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

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {

  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ')" no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Ocultamos todos los elem con clase "front"
  $('.front').hide();

  // Creamos un evento click
  $('.card').click(function() {
    // Determinamos si ya había un elemento guardado en la primera posición del array selectedCards
    if (memoryGame.selectedCards[0] === undefined) {
      // Si no había ningún elemento guardado, guardamos el objeto
      memoryGame.selectedCards[0] = $(this);

      // Damos la vuelta a la primera carta para mostrar el front
      //voltearFront( memoryGame.selectedCards[0] );
      memoryGame.selectedCards[0].children(".back").hide();
      memoryGame.selectedCards[0].children(".front").show();

    } else {
      // Si había un elemento guardado, guardamos el nuevo objeto en la segunda posición
      memoryGame.selectedCards[1] = $(this);

      // Damos la vuelta a la segunda carta para mostrar el front
      //  voltearFront( memoryGame.selectedCards[1]);
      memoryGame.selectedCards[1].children(".back").hide();
      memoryGame.selectedCards[1].children(".front").show();

      // Comparamos los atributos name de los 2 objetos guardados
      if (memoryGame.selectedCards[0].children(".back").attr("name") === memoryGame.selectedCards[1].children(".back").attr("name")) {
        // Si son iguales
        alert("Iguales");
        memoryGame.correctPairs++;
        memoryGame.selectedCards= []
      } else {
        // Si son distintos
        alert("Distintos");

        setTimeout(
          function() {
            memoryGame.selectedCards[0].children(".back").show();
            memoryGame.selectedCards[0].children(".front").hide();
            memoryGame.selectedCards[1].children(".back").show();
            memoryGame.selectedCards[1].children(".front").hide();
            memoryGame.selectedCards= []

          }, 1000);

      }

      memoryGame.pairsClicked++;


    }

    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.correctPairs);
  });

});

// function voltearFront( card ) {
//   card.children(".back").hide();
//   card.children(".front").show();
// }
//
// function voltearBack( card ) {
//   card.children(".back").show();
//   card.children(".front").hide();
// }
