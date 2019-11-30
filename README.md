<img src="https://avatars1.githubusercontent.com/u/45364181?s=460&v=4" alt="Carballo" width="200" height="200"> ![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# [MAD-PT DE] Joan Carballo - Octubre 2019 (Kata pair con Juan Espegel )


# LAB | DOM Memory Game


## Introduction

We just learned how to use (Vanilla) JavaScript to manipulate DOM elements. Great! Let's practice a bit more and have fun while developing a game.

![Memory Game Board](https://i.imgur.com/H6GLZGQ.jpg)

Do you remember that game called Memory that you used to play with the actual paper cards? To win, you needed to memorize the position of the paired card. Well, the logic of the game we will be building is the same.

- The game consists of an even number of cards (precisely, 24) with a specific image on one side and a generic blue background on the other side. 
- Each image appears on two cards.

__The game rules:__

- When the game starts, all cards are turned face down.
- The player then flips over two cards, selecting them by clicking on them. 
- If the selected two cards have the same image, they remain face up. Otherwise, the cards flip back over after a short period of time.

The goal of the game is to get all the cards flipped face-up in the least number of tries. That means that a lower number of attempts scores better.

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

### Test, tets, test!

We will test our game logic using Jasmine (at this point, you should be __Jasmine Masters__).

### Iteration 1: Initial set up

First, you will do some routine work: we need to make sure that all files we need are actually connected to the file that is rendering cards in the browser.
The file that is rendering cards is actually `memory.html`, so we have to make sure that the _styles_ and _JS files_ are loading when we open the game in the browser:

- __styles__: don't forget to add the link to the CSS file in the `<head>` of your page,
- __the logic__: take a look at the `js/main.js` and `js/memory.js` files. You already have one file for the logic and one file for the HTML/CSS interactions (DOM manipulation).

After connecting them properly, you should be able to see the board, the cards, and the score.

### Iteration 2: Plan your game

In this iteration, you will work on the game logic. You can see this part, like defining the methods that will take care of the game logic. No visible result will be shown just yet, and we will make sure everything works properly just by printing everything in the console. 
You should be working in the `js/memory.js` file.

The game logic for this game is pretty simple:
1. we need a `MemoryGame` class, 
2. we need a _method_ to _shuffle_ cards,
3. we need a _method_ to _compare cards_, and
3. we need a _method_ to check if the game is finished.

_Side note:_ We will make a single-player version of the game, which will simplify some of the logic.

Let's do this step by step.

#### Iteration 2.1: The `MemoryGame` class

If you open `js/memory.js` file, you will see that it is preset for you:

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
2. We also need a `this.pickedCards` array, where we will be storing the cards the user has clicked so we can compare them. 
3. Finally, a `this.pairsClicked` and `this.pairsGuessed` properties where will be adding every time a user choose and guess a pair. Go ahead and add these to the constructor.

#### Iteration 2.2: The class methods

1. Create logic for the method `shuffleCards()` to shuffle the cards - every time you create a new game, the order of the cards should change. 

    __Hint:__ It would be a good idea to implement something like a [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). If you struggle with this method, you can skip it for the moment and go back to it later.

2. When a user picks 2 cards, we will need to check if they are the same. Let's create logic for the method `checkIfPair()`, which will receive two parameters, the names of both cards selected by the user (example: `'ironman'` and `'batman'`). The method will add 1 to our `pairsClicked` property, and if the cards are the same also add 1 to `pairsGuessed`. It should return `true` or `false` depending on the result of comparing both cards.

    So, to summarize, we will have to update _pairsClicked_ on every two open cards by a user - it doesn't matter if the cards are the same. If two cards that we are comparing are the same, then _pairsGuessed_ gets updated with +1.

3. Finally, we need to make sure our game ends, and for that, we can add some logic to the `isFinished()` method. Here we need to check if our property `pairsGuessed` has reached _the numbers of pairs the game has_.


#### The layout and the logic files

When the logic is down, you will move forward to `js/main.js` and work on the interactions. What do we consider as interaction is what happens when the user clicks on the card: 
 -how do we get the movement/flipping sides effect, 
- how we keep the cards showing images if they are found to be the same and 
 -how do we make cards flip back to the blue background if the cards are not the same? All the time, keep in mind, we need to work only with two cards at the same time.


### HTML/CSS Interactions

Think about the interactions your user and the game will have: basically, the user will click on elements of the page (cards) and receive some result - whether they guessed the pair or not.

- The first thing that is done for us - each card's information is dynamically filled in the tiles, and the board is pre-filled with cards for us. As we want this behavior to be triggered as soon as the page loads, we need to wrap it under a `DOMContentLoaded` event. This is also already done for us.

```javascript
// js/main.js

document.addEventListener("DOMContentLoaded", function(event) { 
  // some code goes here
});
```

- The other important interaction is the click listener. On click on every single card, we can get some information about that specific card. This code snippet, which is also already provided for us, serves for that.

```javascript
// js/main.js

// Bind the click event of each element to a function
document.querySelectorAll('.card').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      console.log('Card clicked: ', card);
    };
});
```

To flip a card, you can have multiple approaches. We will give you two possible ways (but you can find even more than that):
- on click, add the class `turned` to the `div` of class `card` like in the following example:

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

- on click, toggle the classes _back_ and _front_. To get more familiar how [`element.classList.toggle()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList). Keep in mind that the method `.toggle()` can receive two parameters - the HTML element on which we want to toggle the classes and the array of two classes we want to toggle on click event.

- Now when you have cards flipping from back to front and vice versa, you have to make sure you call `.checkIfPair(card1, card2)` method. If the two cards are the same, they should get class _blocked_, which is going to keep them flipped so we can see images.

_Hint 1_: The array of picked cards can't ever hold more than two cards.
_Hint 2_: Make sure you call `isFinished` method to check if the condition for the end of the game is true, and if so, you can just alert the end, or be more creative and add some text on the canvas - displaying _You won!!!_
## Extra Resources

- [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

**Happy coding!** :heart: 

