//SINGLE PLAYER VERSION 1.0  <link rel="stylesheet" href="./css/style.css" />
class MemoryGame {
    //cards: Array de objetos
    constructor(cards) {
        //Establece cards en la propiedad this.cards
        this.cards = cards;
        // add the rest of the class properties here
        //Array donde se almacenan las tarjetas en las que el usuario ha hecho click
        //para poder compararlas en el metodo checkifPair
        this.pickedCards = []
        //Declaramos la propiedad pairsClicked, que inicializaremos a 0
        //Propiedad donde se iran agregando las cards que el usuario elija
        this.pairsClicked = 0
        //Declaramos la propiedad pairsGuessed, que inicializaremos a 0
        //Propiedad donde se iran agregando las cards que el usuario adivine
        this.pairsGuessed = 0
    }
    //barajar
    shuffleCards() {
        //Si no recibe argumento devuelve undefined
        if (!this.cards) {
            return undefined
        }
        //Creamos una copia del array original
        //let cards2 = [...cards]
        //Con el metodo random aplicado al array barajaremos las cartas
        //Index aleatorio que escogemos para mover de una posicion (indexDeparture) a otra (indexArrival)
        //Lo haremos un numero determinado de veces en funcion de la longitud del array (a mas veces mejor barajado). Dicho
        //valor se ha establecido en la variable suffle
        let suffle = Math.trunc(cards2.length / 2)

        for (let i = 0; i < suffle; i++) {
            let indexDeparture = Math.floor(Math.random() * cards.length)
            let indexArrival = Math.floor(Math.random() * cards.length)
            //Definimos una variable auxiliar para acumular el objeto de partida en él, en lo que el de llegada se traslada a la posicion del de partida
            //Posteriormente la posicion del del objeto de partida acumulada en aux se lleva a la posicion inicial del objeto de llegada

            let aux = this.cards[indexDeparture]
            this.cards[indexDeparture] = this.cards[indexArrival]
            this.cards[indexArrival] = aux
        }
        //return this.cards
    }
    //comparara tarjertas
    checkIfPair(card1, card2) {
        this.pairsClicked = +1
        if (card1 === card2) {
            this.pairsGuessed = +1
            return true
        } else {
            return false
        }
    }
    //comprobar si el juego esta terminado
    isFinished() {
        if (this.pairsGuessed === this.cards.length / 2) {
            return true
        } else {
            return false
        }
    }
}