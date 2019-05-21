Vue.component('card-square',{
  props: ['e'],
  template: `<div class="card" v-on:click="e.isFlipped=!e.isFlipped" v-bind:id=e.id><div v-bind:class="[!e.isFlipped ? 'back' : 'front']" v-bind:id=e.id+100></div><div v-bind:class="[e.isFlipped ? 'back' : 'front']"  v-bind:id=e.id+200 v-bind:style="{background: 'url(' + e.img +') no-repeat'}"></div></div>`,
  methods:{
    cardClicked: function(){
      console.log('Card clicked');
    }
  }
});

// v-bind:style="{background: 'url(' + e.img +') no-repeat'}"

var game = new Vue({
  el: '#game',
  data: {
    cards: [
      { id: 1, name: 'aquaman',         img: 'img/aquaman.jpg', isFlipped: false },
      { id: 2, name: 'batman',          img: 'img/batman.jpg', isFlipped: false },
      { id: 3, name: 'captain america', img: 'img/captain-america.jpg', isFlipped: false },
      { id: 4, name: 'fantastic four',  img: 'img/fantastic-four.jpg', isFlipped: false },
      { id: 5, name: 'flash',           img: 'img/flash.jpg', isFlipped: false },
      { id: 6, name: 'green arrow',     img: 'img/green-arrow.jpg', isFlipped: false },
      { id: 7, name: 'green lantern',   img: 'img/green-lantern.jpg', isFlipped: false },
      { id: 8, name: 'ironman',         img: 'img/ironman.jpg', isFlipped: false },
      { id: 9, name: 'spiderman',       img: 'img/spiderman.jpg', isFlipped: false },
      { id: 10, name: 'superman',        img: 'img/superman.jpg', isFlipped: false },
      { id: 11, name: 'the avengers',    img: 'img/the-avengers.jpg', isFlipped: false },
      { id: 12, name: 'thor',            img: 'img/thor.jpg', isFlipped: false },
      { id: 13, name: 'aquaman',         img: 'img/aquaman.jpg', isFlipped: false },
      { id: 14, name: 'batman',          img: 'img/batman.jpg', isFlipped: false },
      { id: 15, name: 'captain america', img: 'img/captain-america.jpg', isFlipped: false },
      { id: 16, name: 'fantastic four',  img: 'img/fantastic-four.jpg', isFlipped: false },
      { id: 17, name: 'flash',           img: 'img/flash.jpg', isFlipped: false },
      { id: 18, name: 'green arrow',     img: 'img/green-arrow.jpg', isFlipped: false },
      { id: 19, name: 'green lantern',   img: 'img/green-lantern.jpg', isFlipped: false },
      { id: 20, name: 'ironman',         img: 'img/ironman.jpg', isFlipped: false },
      { id: 21, name: 'spiderman',       img: 'img/spiderman.jpg', isFlipped: false },
      { id: 22, name: 'superman',        img: 'img/superman.jpg', isFlipped: false },
      { id: 23, name: 'the avengers',    img: 'img/the-avengers.jpg', isFlipped: false },
      { id: 24, name: 'thor',            img: 'img/thor.jpg', isFlipped: false }
    ]
  }
});
