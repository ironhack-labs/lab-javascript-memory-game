var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

var flip_1 = "primer"
var flip_2 = "primer"
var pairs_clicked = $('#pairs_clicked')
var pairs_guessed = $('#pairs_guessed')
var resultado = ""
var intentos = 0
var pares = 0
var tarjeta_1 = []
var tarjeta_2 = []

function shuffle(a) {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = a[i]
      a[i] = a[j]
      a[j] = x
  }
  return a;
}


$(document).ready(function(){
  var memoryGame = new MemoryGame(shuffle(cards))
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  if (pares === 12) alert("Felicidades, has ganado en " + intentos + " intentos")
  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function (e) {
    if (flip_1 === "primer" && flip_2 === "primer"){
      //console.log("SOY LA TARJETA 1")
      tarjeta_1 = e.target.parentNode.children
      tarjeta_1[0].classList.remove("back")
      tarjeta_1[0].classList.add("front")
      tarjeta_1[1].classList.remove("front")
      tarjeta_1[1].classList.add("back")
      flip_1 = "segun"
      //console.log(tarjeta_1)
      //console.log(tarjeta_1[0].outerHTML)
      //console.log(tarjeta_1[1])
    } else if (flip_2 === "primer" && flip_1 === "segun"){
      //console.log("SOY LA TARJETA 2")
      tarjeta_2 = e.target.parentNode.children
      tarjeta_2[0].classList.remove("back")
      tarjeta_2[0].classList.add("front")
      tarjeta_2[1].classList.remove("front")
      tarjeta_2[1].classList.add("back")
      flip_2 = "segun"
      if(tarjeta_1[0].outerHTML === tarjeta_2[0].outerHTML){
        pares++
        pairs_guessed.text(pares)
        intentos++
        pairs_clicked.text(intentos)
        flip_1 = "primer"
        flip_2 = "primer"
        resultado = ""
        if (pares === 12) alert("Felicidades, has ganado en " + intentos + " intentos")
        console.log("segun segun par intentos: " + intentos + " pares: "+ pares)
      } else{
        resultado = "impar"
      }
    }else if(flip_1 === "segun" && flip_2 === "segun"){
      tarjeta_1[0].classList.remove("front")
      tarjeta_1[0].classList.add("back")
      tarjeta_1[1].classList.remove("back")
      tarjeta_1[1].classList.add("front")

      tarjeta_2[0].classList.remove("front")
      tarjeta_2[0].classList.add("back")
      tarjeta_2[1].classList.remove("back")
      tarjeta_2[1].classList.add("front")

      intentos++
      flip_1 = "primer"
      flip_2 = "primer"
      pairs_guessed.text(pares)
      pairs_clicked.text(intentos)
      resultado = ""
      tarjeta_1 = []
      tarjeta_2 = []
      if (pares === 12) alert("Felicidades, has ganado en " + intentos + " intentos")
      console.log("segun segun impar intentos: " + intentos + " pares: "+ pares)

      tarjeta_1 = e.target.parentNode.children
      tarjeta_1[0].classList.remove("back")
      tarjeta_1[0].classList.add("front")
      tarjeta_1[1].classList.remove("front")
      tarjeta_1[1].classList.add("back")
      flip_1 = "segun"
    }


  })
  $('.front').click(function (e) {

    if(flip_1 === "segun" && flip_2 === "segun" && resultado === "impar"){
      //console.log("SOY LA TARJETA 1")
      tarjeta_1[0].classList.remove("front")
      tarjeta_1[0].classList.add("back")
      tarjeta_1[1].classList.remove("back")
      tarjeta_1[1].classList.add("front")

      tarjeta_2[0].classList.remove("front")
      tarjeta_2[0].classList.add("back")
      tarjeta_2[1].classList.remove("back")
      tarjeta_2[1].classList.add("front")

      intentos++
      flip_1 = "primer"
      flip_2 = "primer"
      pairs_guessed.text(pares)
      pairs_clicked.text(intentos)
      resultado = ""
      tarjeta_1 = []
      tarjeta_2 = []
      if (pares === 12) alert("Felicidades, has ganado en " + intentos + " intentos")
      console.log("segun segun impar intentos: " + intentos + " pares: "+ pares)

    } else if(flip_1 === "segun" && flip_2 === "segun" && resultado === "par"){

    }

  })



});


