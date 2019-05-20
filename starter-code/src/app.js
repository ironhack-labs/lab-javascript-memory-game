const app = new Vue({
    el: "#appContenedor",
    data: {
        listaCartas: [
            {name: 'aquaman', img: 'aquaman.jpg',isShow:false,isResuelta:false,id:1},
            {name: 'batman', img: 'batman.jpg',isShow:false,isResuelta:false,id:2},
            {name: 'captain america', img: 'captain-america.jpg',isShow:false,isResuelta:false,id:3},
            {name: 'fantastic four', img: 'fantastic-four.jpg',isShow:false,isResuelta:false,id:4},
            {name: 'flash', img: 'flash.jpg',isShow:false,isResuelta:false,id:5},
            {name: 'green arrow', img: 'green-arrow.jpg',isShow:false,isResuelta:false,id:6},
            {name: 'green lantern', img: 'green-lantern.jpg',isShow:false,isResuelta:false,id:7},
            {name: 'ironman', img: 'ironman.jpg',isShow:false,isResuelta:false,id:8},
            {name: 'spiderman', img: 'spiderman.jpg',isShow:false,isResuelta:false,id:9},
            {name: 'superman', img: 'superman.jpg',isShow:false,isResuelta:false,id:25},
            {name: 'the avengers', img: 'the-avengers.jpg',isShow:false,isResuelta:false,id:10},
            {name: 'thor', img: 'thor.jpg',isShow:false,isResuelta:false,id:11},
            {name: 'aquaman', img: 'aquaman.jpg',isShow:false,isResuelta:false,id:12},
            {name: 'batman', img: 'batman.jpg',isShow:false,isResuelta:false,id:13},
            {name: 'captain america', img: 'captain-america.jpg',isShow:false,isResuelta:false,id:14},
            {name: 'fantastic four', img: 'fantastic-four.jpg',isShow:false,isResuelta:false,id:33},
            {name: 'flash', img: 'flash.jpg',isShow:false,isResuelta:false,id:15},
            {name: 'green arrow', img: 'green-arrow.jpg',isShow:false,isResuelta:false,id:16},
            {name: 'green lantern', img: 'green-lantern.jpg',isShow:false,isResuelta:false,id:17},
            {name: 'ironman', img: 'ironman.jpg',isShow:false,isResuelta:false,id:18},
            {name: 'spiderman', img: 'spiderman.jpg',isShow:false,isResuelta:false,id:19},
            {name: 'superman', img: 'superman.jpg',isShow:false,isResuelta:false,id:20},
            {name: 'the avengers', img: 'the-avengers.jpg',isShow:false,isResuelta:false,id:21},
            {name: 'thor', img: 'thor.jpg',isShow:false,isResuelta:false,id:22}
        ],
        jugada: {
            carta1: null,
            carta2: null,
        },
        juego: {
            numClicks: 0
        },
        onClickCarta(event, carta) {
            carta.isShow = !carta.isShow;
            console.log(carta);

        }
    },
    methods: {
        barajear() {

            this.listaCartas.forEach(item => {

                item.isShow = false;
                item.isResuelta = false;
            });

            //reset jugada
            this.jugada.carta1 = null;
            this.jugada.carta2 = null;

            //reset puntos
            this.numClicks = 0;

            //msg de debug
            console.log('barajear')
        },
        getUrlImgBgCarta(carta) {
            return "img/" + carta.img;
        }

    }, created() {
        this.barajear();
    }
});