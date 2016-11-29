var Memory = {
  init: function(memory_pics) {
    var html = '';
    picked_cards = [];
    memory_pics = this._shuffle(memory_pics);
    for(var i = 0; i < memory_pics.length; i++){
      html += '<div class="pic" name="img/'+memory_pics[i].name+'"id="'+memory_pics[i].img+'"></div>';
    }
    document.getElementById('memory_board').innerHTML = html;
    this._flipCard();
  },
  _flipCard: function() {
    $('.pic').on('click', this._cardSelected);
  },
  _cardSelected: function() {
    if (picked_cards.length === 0) {
      // flip(); //Fix this later
      picked_cards.push(this);
      this.style.background = 'url(img/' + this.id + ') no-repeat';
    }
    else if (picked_cards.length == 1) {
      // flip();
      picked_cards.push(this);
      this.style.background = 'url(img/' + this.id + ')';
      console.log(this);
      console.log(picked_cards[0].id);
      console.log(picked_cards[1].id);
      if(picked_cards[0].id == picked_cards[1].id) {
        console.log("Yeah motherfocker");
        picked_cards = [];
      }
      else{
        setTimeout(function () {
          picked_cards[0].style.background = '#456783';
          picked_cards[1].style.background = '#456783';
          picked_cards = [];
        }, 1000);
      }
    }
  },
  _shuffle: function() {
    var counter = memory_pics.length, temp, index;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = memory_pics[counter];
      memory_pics[counter] = memory_pics[index];
      memory_pics[index] = temp;
    }
    return memory_pics;
  }
};


var memory_pics = [
		{
			name: "aquaman",
			img: "aquaman.jpg",
			id: 1
		},
		{
			name: "batman",
			img: "batman.jpg",
			id: 2
		},
		{
			name: "captain america",
			img: "captain-america.jpg",
			id: 3
		},
		{
			name: "fantastic four",
			img: "fantastic-four.jpg",
			id: 4
		},
		{
			name: "flash",
			img: "flash.jpg",
			id: 5
		},
		{
			name: "green arrow",
			img: "green-arrow.jpg",
			id: 6
		},
		{
			name: "green lantern",
			img: "green-lantern.jpg",
			id: 7
		},
		{
			name: "ironman",
			img: "ironman.jpg",
			id: 8
		},
		{
			name: "spiderman",
			img: "spiderman.jpg",
			id: 9
		},
		{
			name: "superman",
			img: "superman.jpg",
			id: 10
		},
		{
			name: "the avengers",
			img: "the-avengers.jpg",
			id: 11
		},
		{
			name: "thor",
			img: "thor.jpg",
			id: 12
		},
    {
			name: "aquaman",
			img: "aquaman.jpg",
			id: 13
		},
		{
			name: "batman",
			img: "batman.jpg",
			id: 14
		},
		{
			name: "captain america",
			img: "captain-america.jpg",
			id: 15
		},
    {
			name: "fantastic four",
			img: "fantastic-four.jpg",
			id: 16
		},
		{
			name: "flash",
			img: "flash.jpg",
			id: 17
		},
		{
			name: "green arrow",
			img: "green-arrow.jpg",
			id: 18
		},
		{
			name: "green lantern",
			img: "green-lantern.jpg",
			id: 19
		},
		{
			name: "ironman",
			img: "ironman.jpg",
			id: 20
		},
		{
			name: "spiderman",
			img: "spiderman.jpg",
			id: 21
		},
		{
			name: "superman",
			img: "superman.jpg",
			id: 22
		},
		{
			name: "the avengers",
			img: "the-avengers.jpg",
			id: 23
		},
		{
			name: "thor",
			img: "thor.jpg",
			id: 24
		},
	];
