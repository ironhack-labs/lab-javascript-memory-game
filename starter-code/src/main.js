// var cards = [
//   { name: 'aquaman',         img: 'aquaman.jpg' },
//   { name: 'batman',          img: 'batman.jpg' },
//   { name: 'captain america', img: 'captain-america.jpg' },
//   { name: 'fantastic four',  img: 'fantastic-four.jpg' },
//   { name: 'flash',           img: 'flash.jpg' },
//   { name: 'green arrow',     img: 'green-arrow.jpg' },
//   { name: 'green lantern',   img: 'green-lantern.jpg' },
//   { name: 'ironman',         img: 'ironman.jpg' },
//   { name: 'spiderman',       img: 'spiderman.jpg' },
//   { name: 'superman',        img: 'superman.jpg' },
//   { name: 'the avengers',    img: 'the-avengers.jpg' },
//   { name: 'thor',            img: 'thor.jpg' },
//   { name: 'aquaman',         img: 'aquaman.jpg' },
//   { name: 'batman',          img: 'batman.jpg' },
//   { name: 'captain america', img: 'captain-america.jpg' },
//   { name: 'fantastic four',  img: 'fantastic-four.jpg' },
//   { name: 'flash',           img: 'flash.jpg' },
//   { name: 'green arrow',     img: 'green-arrow.jpg' },
//   { name: 'green lantern',   img: 'green-lantern.jpg' },
//   { name: 'ironman',         img: 'ironman.jpg' },
//   { name: 'spiderman',       img: 'spiderman.jpg' },
//   { name: 'superman',        img: 'superman.jpg' },
//   { name: 'the avengers',    img: 'the-avengers.jpg' },
//   { name: 'thor',            img: 'thor.jpg' }
// ];




//   var html = '';
//   memoryGame.cards.forEach(function (pic) {
//     html += '<div class="card" data-card-name="'+ pic.name +'">';
//     html += '  <div class="back" name="'+ pic.img +'"></div>';
//     html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
//     html += '</div>';
//   });
  
//   // Add all the div's to the HTML
//   document.querySelector('#memory_board').innerHTML = html;

//   //Bind the click event of each element to a function
//   document.querySelectorAll('.back').forEach(function(card) {
//     card.onclick = function() {
//       // TODO: write some code here      
//       card.classList.replace('back','front');  
             
//       console.log('Card clicked')
//     }
//   });  
//   document.querySelectorAll('.front').forEach(function(card) {
//     card.onclick = function() {
//       // TODO: write some code here      
//       card.classList.replace('front','back');  
             
//       console.log('Front')
//     }
//   });  

    
// });


var component = Vue.component('cards',{  
  template:
  `<div>
  <div 
  v-for="(card,index) in cards"
  :key= "card.id"
  class="card" 
  :data-card-name="card.name"
  @click="flipCard(index)">  
    <div  :class="card.classBack" :name="card.img"></div>  
    <div :class="card.classFront" :style="{background: 'url(img/'+card.img+') no-repeat'}"></div>
  </div>
  </div>`,

  data(){
    return {
      
      currentCard: 0,
      temporaryValue:0,
      randomIndex:0,

      cards: [
      {id: 0, name: 'aquaman',         img: 'aquaman.jpg' ,classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 1, name: 'batman',          img: 'batman.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 2, name: 'captain america', img: 'captain-america.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 3, name: 'fantastic four',  img: 'fantastic-four.jpg' ,classBack:{back: true, front:false},classFront:{front:true, back: false}},
      {id: 4, name: 'flash',           img: 'flash.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 5, name: 'green arrow',     img: 'green-arrow.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 6, name: 'green lantern',   img: 'green-lantern.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 7, name: 'ironman',         img: 'ironman.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 8, name: 'spiderman',       img: 'spiderman.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 9, name: 'superman',        img: 'superman.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 10, name: 'the avengers',    img: 'the-avengers.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 11, name: 'thor',            img: 'thor.jpg' ,classBack:{back: true, front:false},classFront:{front:true, back: false}},
      {id: 12, name: 'aquaman',         img: 'aquaman.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 13, name: 'batman',          img: 'batman.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 14,name: 'captain america', img: 'captain-america.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 15, name: 'fantastic four',  img: 'fantastic-four.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 16, name: 'flash',           img: 'flash.jpg' ,classBack:{back: true, front:false},classFront:{front:true, back: false}},
      {id: 17, name: 'green arrow',     img: 'green-arrow.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 18, name: 'green lantern',   img: 'green-lantern.jpg' ,classBack:{back: true, front:false},classFront:{front:true, back: false}},
      {id: 19, name: 'ironman',         img: 'ironman.jpg' ,classBack:{back: true, front:false},classFront:{front:true, back: false}},
      {id: 20, name: 'spiderman',       img: 'spiderman.jpg' ,classBack:{back: true, front:false},classFront:{front:true, back: false}},
      {id: 21,name: 'superman',        img: 'superman.jpg' ,classBack:{back: true, front:false},classFront:{front:true, back: false}},
      {id: 22, name: 'the avengers',    img: 'the-avengers.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} },
      {id: 23, name: 'thor',            img: 'thor.jpg',classBack:{back: true, front:false},classFront:{front:true, back: false} }
    ],
    index: 0,

    }
    

  },
  methods:{
    flipCard(index){
      this.cards[index].classBack.back = !this.cards[index].classBack.back;
      this.cards[index].classBack.front = !this.cards[index].classBack.front;
      this.cards[index].classFront.back = !this.cards[index].classFront.back;
      this.cards[index].classFront.front = !this.cards[index].classFront.front;
    },
    //Todavía no funciona este metodo
    shuffleCards() {
      
      this.currentIndex = this.cards.length;
    // While there remain elements to shuffle...
    while (0 !== this.currentIndex) {
  
      // Pick a remaining element...
      this.randomIndex = Math.floor(Math.random() * this.currentIndex);
      this.currentIndex -= 1;
  
      // And swap it with the current element.
      this.temporaryValue = this.cards[this.currentIndex];
      this.cards[this.currentIndex] = this.cards[this.randomIndex];
      this.cards[this.randomIndex] = this.temporaryValue;
  
    }

  }
  }
});

var app = new Vue({
  el: "#app",    
});

var arrayofCards = component.options.data().cards;
var memoryGame = new MemoryGame(arrayofCards);
document.addEventListener("DOMContentLoaded", function(event) { 

var shuffledCards = memoryGame.shuffleCards();

arrayofCards = shuffledCards;
});

