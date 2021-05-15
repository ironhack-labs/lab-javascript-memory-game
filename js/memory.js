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
        //Creamos una copia del array original
        //let cards2 = [...cards]
        //Con el metodo random aplicado al array barajaremos las cartas
        //Index aleatorio que escogemos para mover de una posicion (indexDeparture) a otra (indexArrival)
        //Lo haremos un numero determinado de veces en funcion de la longitud del array (a mas veces mejor barajado). Dicho
        //valor se ha establecido en la variable suffle
        let suffle = Math.trunc(this.cards.length / 2)
        //OPCION A

        for (let i = 0; i < suffle; i++) {
            let indexDeparture = Math.floor(Math.random() * this.cards.length)
            let indexArrival = Math.floor(Math.random() * this.cards.length)
            //Definimos una variable auxiliar para acumular el objeto de partida en él, en lo que el de llegada se traslada a la posicion del de partida
            //Posteriormente la posicion del del objeto de partida acumulada en aux se lleva a la posicion inicial del objeto de llegada
            //No entiendo por que no se pone this. Regular. Pero si yo quiero acceder a la propiedad this.cards . this.cards no es el array?OK
            let aux = this.cards[indexDeparture]
            this.cards[indexDeparture] = this.cards[indexArrival]
            this.cards[indexArrival] = aux
        }
        /**OPCION B 
         *  for (let i = this.cards.length; i > 0; i--) {
        let random = Math.floor(Math.random() * i--);
        let temp = this.cards[i];
        this.cards[i] = this.cards[random];
        this.cards[random] = temp;
        }
        */
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