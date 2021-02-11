class MemoryGame {
  constructor(cards) {
    //dentro do constructor são as propriedades que o construtor possui (elementos que são utilizados ou que interagem dentro do jogo)
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    //embaralhar as cartas - toda vez que criar um jogo a ordem das cartas deve mudar
    const min = 0;
    const max = this.cards.length;
    let randonNumber;
    //pesquisou math.random no MDN e pegou um dos exemplos
    //o splice pega uma carta de qualquer lugar
    //tirar um elementos aleatório de qualquer posição do array -- splice
    //colocar este elemento no final do array -- push
    //vou estipular que vou fazer isso 24 vezes porque tem 24 cartas

    this.cards.forEach(() => {
      randonNumber = Math.floor(Math.random() * (max - min)) + min;
      const selectedCard = this.cards[randonNumber];

      this.cards.splice(randonNumber, 1);
      this.cards.push(selectedCard);
    });

    //for (let i=0; i < this.cards.length; i +=1){
    //  console.log('cada carta --->', eachCard)
    //  console.log('indice da carta --->', index)
    //}
  }

  checkIfPair(card1, card2) {
    //quando um usuário escolhe 2 cartas, precisamos verificar se são iguais
    if (card1 === card2) {
      this.pairsGuessed++;
      this.pairsClicked++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  isFinished() {
    //verificar se a propriedade pairGuessed atingiu o número de pares que o jogo possui
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
