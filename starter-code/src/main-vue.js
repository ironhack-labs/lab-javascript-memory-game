Vue.component('card-square',{
  props: ['e'],
  template: `<div class="card"><div class="front"></div><div class="back" v-bind:style="{background: 'url(' + e.img +') no-repeat'}"></div></div>`
});

// v-bind:style="{background: 'url(' + e.img +') no-repeat'}"

var game = new Vue({
  el: '#memory_board',
  data: {
    cards: [
      { name: 'aquaman',         img: 'img/aquaman.jpg' },
      { name: 'batman',          img: 'img/batman.jpg' },
      { name: 'captain america', img: 'img/captain-america.jpg' },
      { name: 'fantastic four',  img: 'img/fantastic-four.jpg' },
      { name: 'flash',           img: 'img/flash.jpg' },
      { name: 'green arrow',     img: 'img/green-arrow.jpg' },
      { name: 'green lantern',   img: 'img/green-lantern.jpg' },
      { name: 'ironman',         img: 'img/ironman.jpg' },
      { name: 'spiderman',       img: 'img/spiderman.jpg' },
      { name: 'superman',        img: 'img/superman.jpg' },
      { name: 'the avengers',    img: 'img/the-avengers.jpg' },
      { name: 'thor',            img: 'img/thor.jpg' },
      { name: 'aquaman',         img: 'img/aquaman.jpg' },
      { name: 'batman',          img: 'img/batman.jpg' },
      { name: 'captain america', img: 'img/captain-america.jpg' },
      { name: 'fantastic four',  img: 'img/fantastic-four.jpg' },
      { name: 'flash',           img: 'img/flash.jpg' },
      { name: 'green arrow',     img: 'img/green-arrow.jpg' },
      { name: 'green lantern',   img: 'img/green-lantern.jpg' },
      { name: 'ironman',         img: 'img/ironman.jpg' },
      { name: 'spiderman',       img: 'img/spiderman.jpg' },
      { name: 'superman',        img: 'img/superman.jpg' },
      { name: 'the avengers',    img: 'img/the-avengers.jpg' },
      { name: 'thor',            img: 'img/thor.jpg' }
    ]
  }
});
