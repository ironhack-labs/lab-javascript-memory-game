Vue.component('card', {
  props: ['single-card'],
  data: function() {
    return {
      cards: [
        { name: 'aquaman',         img: 'aquaman.jpg', back: 'back', front: 'front' },
        { name: 'batman',          img: 'batman.jpg', back: 'back', front: 'front' },
        { name: 'captain america', img: 'captain-america.jpg', back: 'back', front: 'front'  },
        { name: 'fantastic four',  img: 'fantastic-four.jpg', back: 'back', front: 'front'  },
        { name: 'flash',           img: 'flash.jpg', back: 'back', front: 'front'  },
        { name: 'green arrow',     img: 'green-arrow.jpg', back: 'back', front: 'front'  },
        { name: 'green lantern',   img: 'green-lantern.jpg', back: 'back', front: 'front'  },
        { name: 'ironman',         img: 'ironman.jpg', back: 'back', front: 'front'  },
        { name: 'spiderman',       img: 'spiderman.jpg', back: 'back', front: 'front'  },
        { name: 'superman',        img: 'superman.jpg', back: 'back', front: 'front'  },
        { name: 'the avengers',    img: 'the-avengers.jpg', back: 'back', front: 'front'  },
        { name: 'thor',            img: 'thor.jpg', back: 'back', front: 'front'  },
        { name: 'aquaman',         img: 'aquaman.jpg', back: 'back', front: 'front'  },
        { name: 'batman',          img: 'batman.jpg', back: 'back', front: 'front'  },
        { name: 'captain america', img: 'captain-america.jpg', back: 'back', front: 'front'  },
        { name: 'fantastic four',  img: 'fantastic-four.jpg', back: 'back', front: 'front'  },
        { name: 'flash',           img: 'flash.jpg', back: 'back', front: 'front'  },
        { name: 'green arrow',     img: 'green-arrow.jpg', back: 'back', front: 'front'  },
        { name: 'green lantern',   img: 'green-lantern.jpg', back: 'back', front: 'front'  },
        { name: 'ironman',         img: 'ironman.jpg', back: 'back', front: 'front'  },
        { name: 'spiderman',       img: 'spiderman.jpg', back: 'back', front: 'front'  },
        { name: 'superman',        img: 'superman.jpg', back: 'back', front: 'front'  },
        { name: 'the avengers',    img: 'the-avengers.jpg', back: 'back', front: 'front'  },
        { name: 'thor',            img: 'thor.jpg', back: 'back', front: 'front'  }
      ],
      pairsArr: [],
      pairsClicked: 0
    }
  },
  methods: {
    openCard: function(index){

      let myCard = this.cards[index];

      if(myCard.back === 'back'){
        myCard.back = 'front';
        myCard.front = 'back';
      }
      else{
        myCard.back = 'back';
        myCard.front = 'front';
      }
      
  },
    checkIfPairs: function(index){

      let memoryGame = new MemoryGame(this.cards);
      let myCard = {
        name: this.cards[index].name,
        index: index
      }

      if(this.pairsArr.length < 2){
        this.pairsArr.push(myCard);
      }

      if(this.pairsArr.length === 2){
        let checkIfPairs = memoryGame.checkIfPair(this.pairsArr[0].name, this.pairsArr [1].name);
        this.pairsClicked++;
        
        if(checkIfPairs === true && this.pairsArr[0].index != this.pairsArr[1].index){
          this.pairsArr = []
        }
        else{

          let cardClose = () =>{ 

              //Error handling para evitar tres cartas seleccionadas
              if(this.pairsArr[1] != undefined && this.pairsArr[0] != undefined ){
                this.openCard(this.pairsArr[0].index);
                this.openCard(this.pairsArr[1].index);
                this.pairsArr = []
              }
              else{
                this.openCard(index);
                this.pairsArr = [];
                this.pairsClicked--;
              }
          }
          let timeOut = setTimeout(cardClose, 300)
          return timeOut;
        }
      }


    },
    shuffleCards: function(){
      return new MemoryGame(this.cards).shuffleCards();
    }
  },
  beforeMount(){
    this.shuffleCards()
  },
  template: 
  `<div>
    <div
      class="card"
      :data-card-name="singleCard.name"
      v-for="(singleCard, index) in cards"
      :key="index"
      :single-card="index"
      @click="openCard(index); checkIfPairs(index)"
      >
      <div :class="singleCard.back" :name="singleCard.img"></div>
      <div :class="singleCard.front" :style="{ background: 'url(img/' + singleCard.img + ') no-repeat' }"></div>
    </div>
   </div>`
   
})

//:single-card="card"

var app = new Vue({
  el: '#memory_board',
  data: {
  }
})

var app = new Vue({
  el: '#score',
  data: {
    passedPairsClicked: 0
  },
  template:
  ` <div class="score">
      <h2>Score</h2>
      <p>Pairs Clicked: <span id="pairs_clicked">{{ passedPairsClicked }}</span></p>
      <p>Pairs Guessed: <span id="pairs_guessed">0</span></p>
    </div>
    `
})




