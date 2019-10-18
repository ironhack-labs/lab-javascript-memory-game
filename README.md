![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | JS Memory Game


## Introduction
We just learned how to use Vanilla JavaScript to manipulate DOM elements. Great! Let's practice a bit more and have fun while developing a game.

Do you remember that game called Memory that you used to play in with actual paper tiles? To win, you needed to remember the position of tiles. 

The game consists of an even number of tiles with images on one side and a generic back. Each image appears on precisely two tiles.

![Memory Game Board](https://i.imgur.com/H6GLZGQ.jpg)

When the game starts, all tiles are turned face down. The player then flips over two cards, selecting them by clicking on them. If the two tiles have the same image, they remain face up. Otherwise, the tiles flip back over after a short period of time.

The goal of the game is to get all the tiles flipped face-up in the least number of tries. That means that a lower number of attempts scores better.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Create Pull Request so your TAs can check up your work.


## Instructions
First, you will do some routine work - connecting files to the `memory.html`, so we make sure styles and JS files are loading when we open the game in the browser. Then you will proceed to work on the game logic and making sure everything works properly just by printing all desired results in the console. When the logic is down, you will move forward to `js/main.js` and work on the interactions - what happens when user clicks on the card: how do we get the movement/flipping sides effect, how we keep the cards showing images if they are found to be the same and how we make cards flip back to blue background if the cards are not the same. All the time keep in mind, we need to work only with two cards at the same time.

*Let's do this in JavaScript using DOM manipulation!*

### Iteration 1: Plan your Game

To code the game, on one hand we will need to re-create the physical parts of the game (the layout). On the other hand, we will implement the rules of the game (the logic). We will make a single-player version of the game, which will simplify some of the logic.

Remember: organization is the key. Keep the JavaScript related to your layout and your user interface in one section of your file and the JavaScript related to the logic in another section (meaning in a separate file).

#### The layout and the logic files

Many things are already done for you. However, you need to properly link some files in the `memory.html` file to get the CSS and JS working for you. So let's see which files we are talking about:

- **the styles**: don't forget to add the link to the CSS file in the `<head>` of your page.
- **the logic**: take a look at the `js/main.js` and `js/memory.js` files. You already have one file for the logic and one file for the HTML/CSS interactions (DOM manipulation).

After connecting them properly, you should be able to see the board, the tiles, and the score.

### Iteration 2: The `MemoryGame` class

We will test our game logic using Jasmine (at this point, you should be **Jasmine Masters!**). Actually, for this game the game logic is pretty simple, we only going to need a `MemoryGame` class, and some *methods* to shuffle and compare cards, and one to check if the game is finished.

If you open `memory.js` file, you will see that it is preset for you:

```js
class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
  }
  shuffleCards() {}
  checkIfPair(card1, card2) {}
  isFinished() {}
}
```

1. The `MemoryGame` class: we created a `MemoryGame` class and, as we can see in its constructor, it will receive an array of cards as a parameter and set this array to a `this.cards` property. 
2. We also need a `this.pickedCards` array, where we will be storing the cards the user have clicked so we can compare them. 
3. Finally a `this.pairsClicked` and `this.pairsGuessed` properties where will be adding every time a user choose and guess a pair. Go ahead and add these in the constructor.

### Iteration 3: The class methods

1. Create logic for the method `shuffleCards()` to shuffle the cards - every time you create a new game, the order of the cards changes. You will only need to change the `cards` property from your object. **Hint:** It would be a good idea to implement something like a [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). If you struggle on this method, you can skip it for the moment and go back to it later.

2. When a user picks 2 cards, we will need to check if they are the same. Let's create logic for the method `checkIfPair()`, that will receive two parameters, the names of both cards selected by the user (example: `'ironman'` and `'batman'`). The method will add 1 to our `pairsClicked` property, and if the cards are the same also add 1 to `pairsGuessed`. It should return `true` or `false` depending on the result of comparing both cards.

3. Finally, we need to make sure our game ends, and for that, we can add some logic to the `isFinished()` method. Here we need to check if our property `pairsGuessed` has reached *the numbers of pairs the game has*.

### HTML/CSS Interactions

Think about the interactions your user and the game will have: basically, the user will click on elements of the page (cards) and receive some result - whether they guessed the pair or not.

- The first thing that is done for us - each card's information is dynamically filled in the tiles, and the board is pre-filled with cards for us. As we want this behavior to be triggered as soon as the page loads, we need to wrap it under a `DOMContentLoaded` event. This is also already done for us.

```javascript
document.addEventListener("DOMContentLoaded", function(event) { 
  // some code goes here
});
```

- The other important interaction is the click listener. On click on every single card, we can get some information about that specific card. This code snippet, which is also already provided for us, serves for that.

```javascript
document.querySelectorAll('.back').forEach( card => {
  card.onclick = function() {
    // TODO: write some code here
    console.log('Card clicked: ', card);
  };
});
```

To flip a card, you have to add the class `turned` to the `div` of class `card`:

```html
<!-- Only display the back that is blue -->
<div class="card" data-card-name="ironman">
  <div class="back" name="ironman.jpg"></div>
  <div class="front" style="background: url(img/ironman.jpg) no-repeat"></div>
</div>

<!-- After flipping -->
<div class="card turned" data-card-name="ironman">
  <div class="back" name="ironman.jpg"></div>
  <div class="front" style="background: url(img/ironman.jpg) no-repeat"></div>
</div>
```

## Extra Resources

- [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

**Happy coding!** :heart: 

