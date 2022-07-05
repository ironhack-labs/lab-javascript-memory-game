const cardsArray = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' }
];

let memoryGame;

describe('MemoryGame', () => {
  beforeEach(() => {
    memoryGame = new MemoryGame(cardsArray);
  });

  it('should be declared', () => {
    expect(typeof MemoryGame).toBe('function');
  });

  describe('constructor method', () => {
    it('should receive `cards` as a parameter and store the cards in its own `cards` property', () => {
      expect(MemoryGame.constructor.length).toBe(1);
      expect(memoryGame.cards instanceof Array).toBe(true);
    });

    it('should have a pickedCards property starting off as an empty array', () => {
      expect(memoryGame.pickedCards).toBeDefined();
      expect(memoryGame.pickedCards instanceof Array).toBe(true);
      expect(memoryGame.pickedCards.length).toBe(0);
    });

    it('should have a pairsClicked property starting off as 0', () => {
      expect(memoryGame.pairsClicked).toBe(0);
    });

    it('should have a pairsGuessed property starting off as 0', () => {
      expect(memoryGame.pairsGuessed).toBeDefined();
    });
  });

  describe('shuffleCards method', () => {
    beforeEach(() => {
      memoryGame = new MemoryGame(cardsArray);
    });

    it('should be declared', () => {
      expect(typeof memoryGame.shuffleCards).toBe('function');
    });

    it('should return undefined if argument (cards array) is not passed', () => {
      expect(typeof new MemoryGame().shuffleCards()).toBe('undefined');
    });

    it('should return the shuffled (mixed) array of cards', () => {
      const formerCards = memoryGame.cards.map((card) => card.name).toString();
      memoryGame.shuffleCards();
      const newCards = memoryGame.cards.map((card) => card.name).toString();
      expect(formerCards === newCards).toBe(false);
    });
  });

  describe('checkIfPair method', () => {
    it('should be declared', () => {
      expect(typeof memoryGame.checkIfPair).toBe('function');
    });

    it('should add 1 to `pairsClicked` when we call it', () => {
      memoryGame.checkIfPair('batman', 'ironman');
      expect(memoryGame.pairsClicked).toBe(1);
    });

    it('should return true when comparing cards that are the same', () => {
      expect(memoryGame.checkIfPair('ironman', 'ironman')).toBe(true);
    });

    it('should return false when the comparing cards are not the same', () => {
      expect(memoryGame.checkIfPair('ironman', 'flash')).toBe(false);
    });

    it('should add 1 to pairsGuessed if they are the same card', () => {
      memoryGame.pairsGuessed = 0;
      memoryGame.checkIfPair('ironman', 'ironman');
      expect(memoryGame.pairsGuessed).toBe(1);
    });

    it('should not add to pairsGuessed if the cards are not the same', () => {
      memoryGame.pairsGuessed = 0;
      memoryGame.checkIfPair('ironman', 'green lantern');
      expect(memoryGame.pairsGuessed).toBe(0);
    });
  });

  describe('checkIfFinished method', () => {
    it('should be declared', () => {
      expect(typeof memoryGame.checkIfFinished).toBe('function');
    });

    it('should return false at the beginning of the game', () => {
      expect(memoryGame.checkIfFinished()).toBe(false);
    });

    it("should return false if there's still some pairs to be guessed", () => {
      memoryGame.pairsGuessed = 4;
      expect(memoryGame.checkIfFinished()).toBe(false);
    });

    it('should return true if all pairs are guessed', () => {
      memoryGame.pairsGuessed = 8;
      expect(memoryGame.checkIfFinished()).toBe(true);
    });
  });
});
