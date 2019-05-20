const ProcesoJugada = {
    esperandoOcultarPar: false,
    carta1: null,
    carta2: null,
    validarSiHayParesAbiertos: () => {
        return ProcesoJugada.esperandoOcultarPar === true;
    },
    validarSiCartaEsJugable: (carta) => {
        return carta.isResuelta === false;
    },
    mostrarCarta: (carta) => {
        carta.isShow = true;
    },
    evaluarSiEsPrimeraCarta: (carta) => {
        let isEsperandoCarta1 = ProcesoJugada.carta1 === null;

        if (isEsperandoCarta1) {
            ProcesoJugada.carta1 = carta
        }

        return isEsperandoCarta1;

    },
    validarSiSeRepiteCarta1: (carta) => {

        return carta.id === ProcesoJugada.carta1.id;

    },
    registrarCarta2: (carta) => {
        ProcesoJugada.carta2 = carta;
    },
    reset: () => {
        ProcesoJugada.carta1 = null;
        ProcesoJugada.carta2 = null;
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

            if (!jugada.validarSiCartaEsJugable(carta)) {
                return;
            }

            jugada.mostrarCarta(carta);

            if (jugada.evaluarSiEsPrimeraCarta(carta)) {
               /* si es la primer carta salimos y esperamos por la segunda carta*/
                return;
            }


            if (jugada.validarSiSeRepiteCarta1(carta)) {
                /* si  repite click en la priemr carta nos salimos a esperar una carta valida */
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
            }else{

                ProcesoJugada.esperandoOcultarPar = true;

                setTimeout(() => {
                    ProcesoJugada.carta1.isShow = false;
                    ProcesoJugada.carta2.isShow = false;
                    ProcesoJugada.esperandoOcultarPar = false;
                    ProcesoJugada.reset();
                    console.log('ocultados');
                },3000);
                console.log('esperando ocultar');
            }

        }


    },
    methods: {
        barajear() {

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