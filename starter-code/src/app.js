const ProcesoJugada = {
    isParesAbiertos: false,
    carta1: null,
    carta2: null,
    validarSiHayParesAbiertos: () => {
        return ProcesoJugada.isParesAbiertos === true;
    },
    validarSiCartaEsResuelta: (carta) => {
        return carta.isResuelta === true;
    },
    mostrarCarta: (carta) => {
        carta.isShow = true;
    },
    evaluarSiEsPrimeraCarta: (carta) => {
        return ProcesoJugada.carta1 === null;
    },
    validarSiSeRepiteCarta1: (carta) => {

        return carta.id === ProcesoJugada.carta1.id;

    },
    registrarCarta1: (carta) => {
        ProcesoJugada.carta1 = carta;
    },
    registrarCarta2: (carta) => {
        ProcesoJugada.carta2 = carta;
    },
    reset: () => {
        ProcesoJugada.carta1 = null;
        ProcesoJugada.carta2 = null;
        ProcesoJugada.isParesAbiertos = false;
    }
};

const ProcesoCalificarJugada = {
    validarSiSonPareja: (carta1, carta2) => {

        let isPareja = carta1.name === carta2.name;

        if (isPareja) {
            carta1.isResuelta = true;
            carta2.isResuelta = true;
        }

        return isPareja;
    }
};

const app = new Vue({
    el: "#appContenedor",
    data: {
        listaCartas: [
            {name: 'aquaman', img: 'aquaman.jpg', isShow: false, isResuelta: false, id: 1},
            {name: 'batman', img: 'batman.jpg', isShow: false, isResuelta: false, id: 2},
            {name: 'captain america', img: 'captain-america.jpg', isShow: false, isResuelta: false, id: 3},
            {name: 'fantastic four', img: 'fantastic-four.jpg', isShow: false, isResuelta: false, id: 4},
            {name: 'flash', img: 'flash.jpg', isShow: false, isResuelta: false, id: 5},
            {name: 'green arrow', img: 'green-arrow.jpg', isShow: false, isResuelta: false, id: 6},
            {name: 'green lantern', img: 'green-lantern.jpg', isShow: false, isResuelta: false, id: 7},
            {name: 'ironman', img: 'ironman.jpg', isShow: false, isResuelta: false, id: 8},
            {name: 'spiderman', img: 'spiderman.jpg', isShow: false, isResuelta: false, id: 9},
            {name: 'superman', img: 'superman.jpg', isShow: false, isResuelta: false, id: 25},
            {name: 'the avengers', img: 'the-avengers.jpg', isShow: false, isResuelta: false, id: 10},
            {name: 'thor', img: 'thor.jpg', isShow: false, isResuelta: false, id: 11},
            {name: 'aquaman', img: 'aquaman.jpg', isShow: false, isResuelta: false, id: 12},
            {name: 'batman', img: 'batman.jpg', isShow: false, isResuelta: false, id: 13},
            {name: 'captain america', img: 'captain-america.jpg', isShow: false, isResuelta: false, id: 14},
            {name: 'fantastic four', img: 'fantastic-four.jpg', isShow: false, isResuelta: false, id: 33},
            {name: 'flash', img: 'flash.jpg', isShow: false, isResuelta: false, id: 15},
            {name: 'green arrow', img: 'green-arrow.jpg', isShow: false, isResuelta: false, id: 16},
            {name: 'green lantern', img: 'green-lantern.jpg', isShow: false, isResuelta: false, id: 17},
            {name: 'ironman', img: 'ironman.jpg', isShow: false, isResuelta: false, id: 18},
            {name: 'spiderman', img: 'spiderman.jpg', isShow: false, isResuelta: false, id: 19},
            {name: 'superman', img: 'superman.jpg', isShow: false, isResuelta: false, id: 20},
            {name: 'the avengers', img: 'the-avengers.jpg', isShow: false, isResuelta: false, id: 21},
            {name: 'thor', img: 'thor.jpg', isShow: false, isResuelta: false, id: 22}
        ],
        juego: {
            numJugadas: 0,
            numParejas: 0
        },
        onClickCarta(event, carta) {

            let jugada = ProcesoJugada;

            if (jugada.validarSiHayParesAbiertos()) {
                return;
            }

            if (jugada.validarSiCartaEsResuelta(carta)) {
                return;
            }

            jugada.mostrarCarta(carta);

            if (jugada.evaluarSiEsPrimeraCarta(carta)) {
                jugada.registrarCarta1(carta);
                return;
            }


            if (jugada.validarSiSeRepiteCarta1(carta)) {
                return;
            }

            /*aqui ya sabemos que fue una carta 2 valdia*/
            jugada.registrarCarta2(carta);
            this.juego.numJugadas++;


            let isParejaEncontrada = ProcesoCalificarJugada.validarSiSonPareja(jugada.carta1, jugada.carta2);

            if (isParejaEncontrada) {
                this.juego.numParejas++;

                if (this.juego.numParejas === this.listaCartas.length / 2) {
                    alert('ya se termino el juego');
                }

                console.log('par encontrado');

                ProcesoJugada.reset();
            } else {

                ProcesoJugada.isParesAbiertos = true;

                setTimeout(() => {
                    ProcesoJugada.carta1.isShow = false;
                    ProcesoJugada.carta2.isShow = false;
                    ProcesoJugada.reset();
                }, 3000);

            }

        }


    },
    methods: {
        barajear() {

            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }

            this.listaCartas = shuffle(this.listaCartas);


            this.listaCartas.forEach(item => {

                item.isShow = false;
                item.isResuelta = false;
            });


            ProcesoJugada.reset();

            //reset puntos
            this.juego.numJugadas = 0;
            this.juego.numParejas = 0;

            //msg de debug
            console.log('barajear')
        },
        getUrlImgBgCarta(carta) {
            return "img/" + carta.img;
        }

    },
    computed: {
        compNumJugadas() {
            return this.juego.numJugadas;
        },
        compNumParejas() {
            return this.juego.numParejas;
        }
    },
    created() {
        this.barajear();
    }
});