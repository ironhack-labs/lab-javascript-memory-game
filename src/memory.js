class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.turnedcard = []//creo este nuevo array para almacenar las cartas que estan giradas
    this.puntuacion = 0

    // add the rest of the class properties here
  }
/************************************************ */
 shuffleCards(arr) { //las cartas se barajan
  if(arr===undefined){
    return undefined
  }
  
  return arr.sort(()=>Math.random()-0.5)}

/*************************************************** */
  checkIfPair(card1,card2) {//las cartas se comparan 
                           
    this.pairsClicked ++//se le suma 1 como que hemos hecho click dos veces
    this.puntuacion++
      
    if ( card1 === card2){//sse comparan 
      this.pairsGuessed++//si son iguales se le suma 1 a par adivinado 
      this.turnedcard[0].classList.add ("guessed")//le agregamos una nueva clase guessed a las cards que sean iguales 
                                                  // dentro del array de cartas giradas para despues poder difernciarlos 
                                                  //
      this.turnedcard[1].classList.add ("guessed")
      
      return true
    }else{//si no son iguales llamamos en dos segundos a la function 

        setTimeout(this.check, 1000)
   
      return false
    }
   
  }
/************************************************* */
 check(){
        
  let elementos = document.querySelectorAll('.card.turned');//crea una variable con los elementos que contengan la clas turned 

 
  elementos.forEach(function(elemento) {  // Itera sobre los elementos

    if (!elemento.classList.contains("guessed")){//si la clase del elemento no contiene guessed 
      elemento.classList.remove('turned');//le borramos la clase turned es decir le damos la vuelta
    }
  
  });
   
    
   
  }
 
  /***************************** */

  checkIfFinished() {
    if (this.pairsGuessed === 1){//si hemos averiguado los 12 pares el juego se acaba
      console.log("true")
      return true
    }else  {
      return false
    }
  }
/********************* */
   reload() {
    // Utilizamos el método location.reload() para recargar la página
    location.reload();
}
}