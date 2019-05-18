
Vue.component('card', {
  props: ['single-card'],
  template: 
  `<div class="card" data-card-name="'+ single-card.name +'">
    <div class="back" name="'+ single-card.img +'"></div>
    <div class="front" style="background: url(img/'+ single-card.img +') no-repeat"></div>
   </div>`
})

var app = new Vue({
  el: '#memory_board',
  data: {
    cards: [
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
    ]
  },
  methods: {
    openCard: function(event){
      console.log(event, "card clicked");
    }
  }
})

let memoryGame = new MemoryGame(app.cards);

// document.addEventListener("DOMContentLoaded", function(event) { 
//   var html = '';
//   memoryGame.cards.forEach(function (pic) {
//     html += '<div class="card" data-card-name="'+ pic.name +'">';
//     html += '  <div class="back" name="'+ pic.img +'"></div>';
//     html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
//     html += '</div>';
//   });

//   // Add all the div's to the HTML
//   document.querySelector('#memory_board').innerHTML = html;

//   // Bind the click event of each element to a function
//   document.querySelectorAll('.back').forEach(function(card) {
//     card.onclick = function() {
//       // TODO: write some code here
//       console.log('Card clicked')
//     }
//   });
// });


