let count = 0;
let firstCard = '';
let secondCard = '';
// let score = document.getElementById('score');
// Vue.component('score',{
//   props: 'a',
//   template: '<h2>Score</h2><p>Pairs Clicked: <span>{{ pairsClicked }}</span></p><p>Pairs Guessed: <span>{{ pairsGuessed }}</span></p>'
// });

Vue.component('card-square',{
  props: ['e'],
  template: `<div class="card" v-on:click="!isFlippable(e) ? e.isFlipped=true : e.isFlipped; cardClicked(e.name, e.id)" v-bind:id=e.id><div v-bind:class="[!e.isFlipped ? 'back' : 'front']" v-bind:id=e.id+100></div><div v-bind:class="[e.isFlipped ? 'back' : 'front']"  v-bind:id=e.id+200 v-bind:style="{background: 'url(' + e.img +') no-repeat'}"></div></div>`,
  methods:{
    cardClicked: function(name, id){
      console.log('Card clicked',name);
      console.log('Click count',count);
      if(count === 0){
        firstCard = name;
        count ++;
      } else if(count === 1){
        secondCard = name;
        cardsAreEqual = compareCards(firstCard, secondCard);
        console.log('Cards Equal?:', cardsAreEqual);
        count = 0;
        return cardsAreEqual;
      } else {
        return false;
      }
    },
    isFlippable: function(elem){
      checkFlip(elem);
    }
  }
});

// v-bind:style="{background: 'url(' + e.img +') no-repeat'}"

var game = new Vue({
  el: '#game',
  data: {
    pairsClicked: 0,
    pairsGuessed: 0,
    clickCount: 0,
    attemptSuccess: true, 
    cards: [
      { id: 1, name: 'aquaman',         img: 'img/aquaman.jpg', isFlipped: false, guessedRight: false },
      { id: 2, name: 'batman',          img: 'img/batman.jpg', isFlipped: false, guessedRight: false },
      { id: 3, name: 'captain america', img: 'img/captain-america.jpg', isFlipped: false, guessedRight: false },
      { id: 4, name: 'fantastic four',  img: 'img/fantastic-four.jpg', isFlipped: false, guessedRight: false },
      { id: 5, name: 'flash',           img: 'img/flash.jpg', isFlipped: false, guessedRight: false },
      { id: 6, name: 'green arrow',     img: 'img/green-arrow.jpg', isFlipped: false, guessedRight: false },
      { id: 7, name: 'green lantern',   img: 'img/green-lantern.jpg', isFlipped: false, guessedRight: false },
      { id: 8, name: 'ironman',         img: 'img/ironman.jpg', isFlipped: false, guessedRight: false },
      { id: 9, name: 'spiderman',       img: 'img/spiderman.jpg', isFlipped: false, guessedRight: false },
      { id: 10, name: 'superman',        img: 'img/superman.jpg', isFlipped: false, guessedRight: false },
      { id: 11, name: 'the avengers',    img: 'img/the-avengers.jpg', isFlipped: false, guessedRight: false },
      { id: 12, name: 'thor',            img: 'img/thor.jpg', isFlipped: false, guessedRight: false },
      { id: 13, name: 'aquaman',         img: 'img/aquaman.jpg', isFlipped: false, guessedRight: false },
      { id: 14, name: 'batman',          img: 'img/batman.jpg', isFlipped: false, guessedRight: false },
      { id: 15, name: 'captain america', img: 'img/captain-america.jpg', isFlipped: false, guessedRight: false },
      { id: 16, name: 'fantastic four',  img: 'img/fantastic-four.jpg', isFlipped: false, guessedRight: false },
      { id: 17, name: 'flash',           img: 'img/flash.jpg', isFlipped: false, guessedRight: false },
      { id: 18, name: 'green arrow',     img: 'img/green-arrow.jpg', isFlipped: false, guessedRight: false },
      { id: 19, name: 'green lantern',   img: 'img/green-lantern.jpg', isFlipped: false, guessedRight: false },
      { id: 20, name: 'ironman',         img: 'img/ironman.jpg', isFlipped: false, guessedRight: false },
      { id: 21, name: 'spiderman',       img: 'img/spiderman.jpg', isFlipped: false, guessedRight: false },
      { id: 22, name: 'superman',        img: 'img/superman.jpg', isFlipped: false, guessedRight: false },
      { id: 23, name: 'the avengers',    img: 'img/the-avengers.jpg', isFlipped: false, guessedRight: false },
      { id: 24, name: 'thor',            img: 'img/thor.jpg', isFlipped: false, guessedRight: false }
    ]
  }
});

let compareCards = (card1, card2) =>{
  game.pairsClicked++
  if(card1===card2){
    game.pairsGuessed++
    console.log(score)
    console.log('Pairs Guessed:', game.pairsGuessed, 'Pairs Clicked:', game.pairsClicked);
    // score.classList.remove('right');
    // score.classList.remove('wrong');
    // score.classList.add('right');
    game.attemptSuccess = true;
    return true;
  } else {
    count = 0;
    // score.classList.remove('wrong');
    // score.classList.remove('right');
    // score.classList.add('wrong');
    // console.log(score);
    game.attemptSuccess = false;
    return false;
  }
};

let checkFlip = (currentId, obj=game) =>{
  // obj.cardClicked ++;
  let cardsFlipped = obj.cards.filter(element => {
    return element.isFlipped;
  });
  if(!currentId.isFlipped && cardsFlipped.length < 2){
    console.log('cardsFlipped.length', cardsFlipped.length);
    return true;
  } else {
    obj.cards.forEach(element => {
      element.isFlipped = false;
    return false;
    });
  }
}