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
    },

};

const app = new Vue({
    el: "#appContenedor",
    data: {
        listaCartas: [
            {name: 'aquaman', img: 'aquaman.jpg', isShow: false, isResuelta: false, id: 1, isDisplay: false},
            {name: 'batman', img: 'batman.jpg', isShow: false, isResuelta: false, id: 2, isDisplay: false},
            {
                name: 'captain america',
                img: 'captain-america.jpg',
                isShow: false,
                isResuelta: false,
                id: 3,
                isDisplay: false
            },
            {
                name: 'fantastic four',
                img: 'fantastic-four.jpg',
                isShow: false,
                isResuelta: false,
                id: 4,
                isDisplay: false
            },
            {name: 'flash', img: 'flash.jpg', isShow: false, isResuelta: false, id: 5, isDisplay: false},
            {name: 'green arrow', img: 'green-arrow.jpg', isShow: false, isResuelta: false, id: 6, isDisplay: false},
            {
                name: 'green lantern',
                img: 'green-lantern.jpg',
                isShow: false,
                isResuelta: false,
                id: 7,
                isDisplay: false
            },
            {name: 'ironman', img: 'ironman.jpg', isShow: false, isResuelta: false, id: 8, isDisplay: false},
            {name: 'spiderman', img: 'spiderman.jpg', isShow: false, isResuelta: false, id: 9, isDisplay: false},
            {name: 'superman', img: 'superman.jpg', isShow: false, isResuelta: false, id: 25, isDisplay: false},
            {name: 'the avengers', img: 'the-avengers.jpg', isShow: false, isResuelta: false, id: 10, isDisplay: false},
            {name: 'thor', img: 'thor.jpg', isShow: false, isResuelta: false, id: 11, isDisplay: false},
            {name: 'aquaman', img: 'aquaman.jpg', isShow: false, isResuelta: false, id: 12, isDisplay: false},
            {name: 'batman', img: 'batman.jpg', isShow: false, isResuelta: false, id: 13, isDisplay: false},
            {
                name: 'captain america',
                img: 'captain-america.jpg',
                isShow: false,
                isResuelta: false,
                id: 14,
                isDisplay: false
            },
            {
                name: 'fantastic four',
                img: 'fantastic-four.jpg',
                isShow: false,
                isResuelta: false,
                id: 33,
                isDisplay: false
            },
            {name: 'flash', img: 'flash.jpg', isShow: false, isResuelta: false, id: 15, isDisplay: false},
            {name: 'green arrow', img: 'green-arrow.jpg', isShow: false, isResuelta: false, id: 16, isDisplay: false},
            {
                name: 'green lantern',
                img: 'green-lantern.jpg',
                isShow: false,
                isResuelta: false,
                id: 17,
                isDisplay: false
            },
            {name: 'ironman', img: 'ironman.jpg', isShow: false, isResuelta: false, id: 18, isDisplay: false},
            {name: 'spiderman', img: 'spiderman.jpg', isShow: false, isResuelta: false, id: 19, isDisplay: false},
            {name: 'superman', img: 'superman.jpg', isShow: false, isResuelta: false, id: 20, isDisplay: false},
            {name: 'the avengers', img: 'the-avengers.jpg', isShow: false, isResuelta: false, id: 21, isDisplay: false},
            {name: 'thor', img: 'thor.jpg', isShow: false, isResuelta: false, id: 22, isDisplay: false}
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
                    this.terminarJuego();

                } else {
                    console.log('par encontrado');

                    ProcesoJugada.reset();
                }


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
        ponerCartaEnTablero: function () {
            setTimeout(function () {
                let cartaPendiente = app.listaCartas.find(item => {
                    return item.isDisplay === false;
                });

                if (cartaPendiente) {
                    cartaPendiente.isDisplay = true;
                    app.ponerCartaEnTablero();
                }

            }, 50);
        },
        terminarJuego() {
            alert(`ya se termino el juego con ${this.juego.numJugadas}`);

            this.barajear();

            setTimeout(() => {
                app.ponerCartaEnTablero();
            }, 3000);
        },
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
                item.isDisplay = false;
            });


            ProcesoJugada.reset();

            /* las cartas no se ven , mostrar una por una
              usando ponerCartasEnTablero*/


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
    },
    mounted() {
        console.log('xxxxxx');
        setTimeout(() => {
            app.ponerCartaEnTablero();
        }, 500);
    }
});