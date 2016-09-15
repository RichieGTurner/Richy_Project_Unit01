var buttons = {
  deal: 'deal',
  hit: 'hitMe',
  stand: 'stand'
};

var player = {
  hand: [],
  currentPoints: 0,
  bankRoll: 1000,
  currentBet: 0
};

var dealer = {
  hand: [],
  currentPoints: 0
};

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

var cardIndex = 0;

//shuffle function taken from stack overflow
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};

function deal() {
  // Shuffle deck
  shuffle(deck);
  // Reset the hands of both dealer and player
  cardIndex = 4;
  dealer.hand = [];
  player.hand = [];
  // Insert cards into dealer and players hand array
  player.hand.push(deck[0]);
  player.hand.push(deck[2]);
  dealer.hand.push(deck[1]);
  dealer.hand.push(deck[3]);
  // Calculate dealer and player hands
  player.currentPoints = calcPointsForHand(player.hand);
  dealer.currentPoints = calcPointsForHand(dealer.hand);
  // Prompt user to hit or stay
  console.log(player, dealer);
}

function calcPointsForHand(hand) {
  var points = 0;
  hand.forEach(function(card) {
    points += card.gameValue[0];
  });
  return points;
}

// Takes either the player or dealer object as argument
function hit(opponent) {
  opponent.hand.push(deck[cardIndex]);
  cardIndex++;
  opponent.currentPoints = calcPointsForHand(opponent.hand);
  // If opponents currentPoints is greater than 21 call gameOver function
  if (opponent.currentPoints > 21) {
    gameOver();
  }
  console.log(opponent.currentPoints);
}

// Game over function
function gameOver() {
  console.log('you lost!');
}

// Stand function
function stand() {

}

// Dealers turn function
function dealersTurn() {

}

// Attach event handlers
document.getElementById(buttons.deal).addEventListener('click', function() {
  deal();
});

document.getElementById(buttons.hit).addEventListener('click', function() {
  hit(player);
});

//remove top card from array
//look into splicing and slicing

//console log grab a random card
//setup player card and dealer card array
// Deal cards


// Calculate players card values

// Deal with players turn



// preparation for interview
