/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('MemoryGame constructor', () => {
  beforeEach(() => {
    memoryGame = new MemoryGame([]);
  });

  it('should create MemoryGame object', () => {
    expect(typeof MemoryGame).toBe('function');
  });

  it('should receive `cards` as a parameter and create it own `cards` property', () => {
    expect(memoryGame.cards).toBeDefined();
  });

  it('should have a pickedCards property', () => {
    expect(memoryGame.pickedCards).toBeDefined();
  });

  it('should pickedCards property should be an array', () => {
    expect(typeof memoryGame.pickedCards).toBe('object');
    expect(memoryGame.pickedCards).toEqual(jasmine.any(Array));
  });

  it('MemoryGame should have a pairsClicked property', () => {
    expect(memoryGame.pairsClicked).toBeDefined();
  });

  it('pairsClicked property should be a number', () => {
    expect(typeof memoryGame.pairsClicked).toBe('number');
  });

  it('should have a pairsGuessed property', () => {
    expect(memoryGame.pairsGuessed).toBeDefined();
  });

  it('pairsGuessed property should be a number', () => {
    expect(typeof memoryGame.pairsGuessed).toBe('number');
  });
});

describe('shuffleCards method', () => {
  beforeEach(() => {
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
    memoryGame = new MemoryGame(cardsArray);
  });

  it('should be declared', () => {
    expect(typeof memoryGame.shuffleCards).toBe('function');
  });

  it('should return undefined', () => {
    expect(typeof memoryGame.shuffleCards()).toBe('undefined');
  });

  it('should  mixed the cards property', () => {
    var formerCardsString = memoryGame.cards.map(card => card.name).toString();
    memoryGame.shuffleCards();
    const newCardsString = memoryGame.cards.map(card => card.name).toString();
    expect(formerCardsString === newCardsString).toBe(false);
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

  it('should return true when the comparing cards are the same', () => {
    expect(memoryGame.checkIfPair('ironman', 'ironman')).toBe(true);
  });

  it('should return false when the comparing cards are the same', () => {
    expect(memoryGame.checkIfPair('ironman', 'flash')).toBe(false);
  });

  it('should add 1 to pairsGuessed if they are the same card', () => {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair('ironman', 'ironman');
    expect(memoryGame.pairsGuessed).toBe(1);
  });

  it('should not add anything to pairsGuessed if the not the same card', () => {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair('ironman', 'green lantern');
    expect(memoryGame.pairsGuessed).toBe(0);
  });
});

describe('isFinished method', () => {
  it('should be declared', () => {
    expect(typeof memoryGame.isFinished).toBe('function');
  });

  it('should return false at the start of the game', () => {
    expect(memoryGame.isFinished()).toBe(false);
  });

  it('should return false if there still some pairs to be guessed', () => {
    memoryGame.pairsGuessed = 4;
    expect(memoryGame.isFinished()).toBe(false);
  });

  it('should return true if all pairs were guessed', () => {
    memoryGame.pairsGuessed = 8;
    expect(memoryGame.isFinished()).toBe(true);
  });
});
