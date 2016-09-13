var deck = [
  {
    value: '2',
    type: 'clubs',
    gameValue: [2]
  },
  {
    value: '2',
    type: 'spades',
    gameValue: [2]
  },
  {
    value: '2',
    type: 'diamonds',
    gameValue: [2]
  },
  {
    value: '2',
    type: 'hearts',
    gameValue: [2]
  },
  {
    value: '3',
    type: 'clubs',
    gameValue: [3]
  },
  {
    value: '3',
    type: 'spades',
    gameValue: [3]
  },
  {
    value: '3',
    type: 'diamonds',
    gameValue: [3]
  },
  {
    value: '3',
    type: 'hearts',
    gameValue: [3]
  },
  {
    value: '4',
    type: 'clubs',
    gameValue: [4]
  },
  {
    value: '4',
    type: 'spades',
    gameValue: [4]
  },
  {
    value: '4',
    type: 'diamonds',
    gameValue: [4]
  },
  {
    value: '4',
    type: 'hearts',
    gameValue: [4]
  },
  {
    value: '5',
    type: 'clubs',
    gameValue: [5]
  },
  {
    value: '5',
    type: 'spades',
    gameValue: [5]
  },
  {
    value: '5',
    type: 'diamonds',
    gameValue: [5]
  },
  {
    value: '5',
    type: 'hearts',
    gameValue: [5]
  },
  {
    value: '6',
    type: 'clubs',
    gameValue: [6]
  },
  {
    value: '6',
    type: 'spades',
    gameValue: [6]
  },
  {
    value: '6',
    type: 'diamonds',
    gameValue: [6]
  },
  {
    value: '6',
    type: 'hearts',
    gameValue: [6]
  },
  {
    value: '7',
    type: 'clubs',
    gameValue: [7]
  },
  {
    value: '7',
    type: 'spades',
    gameValue: [7]
  },
  {
    value: '7',
    type: 'diamonds',
    gameValue: [7]
  },
  {
    value: '7',
    type: 'hearts',
    gameValue: [7]
  },
  {
    value: '8',
    type: 'clubs',
    gameValue: [8]
  },
  {
    value: '8',
    type: 'spades',
    gameValue: [8]
  },
  {
    value: '8',
    type: 'diamonds',
    gameValue: [8]
  },
  {
    value: '8',
    type: 'hearts',
    gameValue: [8]
  },
  {
    value: '9',
    type: 'clubs',
    gameValue: [9]
  },
  {
    value: '9',
    type: 'spades',
    gameValue: [9]
  },
  {
    value: '9',
    type: 'diamonds',
    gameValue: [9]
  },
  {
    value: '9',
    type: 'hearts',
    gameValue: [9]
  },
  {
    value: '10',
    type: 'clubs',
    gameValue: [10]
  },
  {
    value: '10',
    type: 'spades',
    gameValue: [10]
  },
  {
    value: '10',
    type: 'diamonds',
    gameValue: [10]
  },
  {
    value: '10',
    type: 'hearts',
    gameValue: [10]
  },
  {
    value: 'jack',
    type: 'clubs',
    gameValue: [10]
  },
  {
    value: 'jack',
    type: 'spades',
    gameValue: [10]
  },
  {
    value: 'jack',
    type: 'diamonds',
    gameValue: [10]
  },
  {
    value: 'jack',
    type: 'hearts',
    gameValue: [10]
  },
  {
    value: 'queen',
    type: 'clubs',
    gameValue: [10]
  },
  {
    value: 'queen',
    type: 'spades',
    gameValue: [10]
  },
  {
    value: 'queen',
    type: 'diamonds',
    gameValue: [10]
  },
  {
    value: 'queen',
    type: 'hearts',
    gameValue: [10]
  },
  {
    value: 'king',
    type: 'clubs',
    gameValue: [10]
  },
  {
    value: 'king',
    type: 'spades',
    gameValue: [10]
  },
  {
    value: 'king',
    type: 'diamonds',
    gameValue: [10]
  },
  {
    value: 'king',
    type: 'hearts',
    gameValue: [10]
  },
  {
    value: 'ace',
    type: 'clubs',
    gameValue: [1, 11]
  },
  {
    value: 'ace',
    type: 'spades',
    gameValue: [1, 11]
  },
  {
    value: 'ace',
    type: 'diamonds',
    gameValue: [1, 11]
  },
  {
    value: 'ace',
    type: 'hearts',
    gameValue: [1, 11]
  }
];

function shuffle(deck) {
  deck = deck.slice(0);
  var shuffledDeck = [];
  for(var i = 0; i < 52; i++) {
    var randomIndex = getRandomArbitrary(0, deck.length - 1);
    shuffledDeck.push(deck[randomIndex]);
    deck.splice(randomIndex, 1);
  }
  return shuffledDeck;
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var shuffledDeck = shuffle(deck);
console.log(shuffledDeck);

// Deal cards

// Calculate players card values

// Deal with players turn
