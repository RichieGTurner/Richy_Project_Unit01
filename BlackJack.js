var buttons = {
  deal: 'deal',
  hit: 'hitMe',
  stand: 'stand'
};

var player = {
  hand: [],
  currentPoints: 0,
  bankRoll: 1000,
  currentBet: 0,
  cardContainer: 'player-hand',
  type: 'player'
};

var dealer = {
  hand: [],
  currentPoints: 0,
  cardContainer: 'dealer-hand',
  type: 'dealer'
};

var deck = [
  {
    value: '2',
    type: 'clubs',
    gameValue: [2],
    imgPath: 'images/cards/twoclubs.jpeg'
  },
  {
    value: '2',
    type: 'spades',
    gameValue: [2],
    imgPath: 'images/cards/twospades.jpeg'
  },
  {
    value: '2',
    type: 'diamonds',
    gameValue: [2],
    imgPath: 'images/cards/twodiamonds.jpeg'
  },
  {
    value: '2',
    type: 'hearts',
    gameValue: [2],
    imgPath: 'images/cards/twohearts.jpeg'
  },
  {
    value: '3',
    type: 'clubs',
    gameValue: [3],
    imgPath: 'images/cards/threeclubs.jpeg'
  },
  {
    value: '3',
    type: 'spades',
    gameValue: [3],
    imgPath: 'images/cards/threespades.jpeg'
  },
  {
    value: '3',
    type: 'diamonds',
    gameValue: [3],
    imgPath: 'images/cards/threediamonds.jpeg'
  },
  {
    value: '3',
    type: 'hearts',
    gameValue: [3],
    imgPath: 'images/cards/threehearts.jpeg'
  },
  {
    value: '4',
    type: 'clubs',
    gameValue: [4],
    imgPath: 'images/cards/fourclubs.jpeg'
  },
  {
    value: '4',
    type: 'spades',
    gameValue: [4],
    imgPath: 'images/cards/fourspades.jpeg'
  },
  {
    value: '4',
    type: 'diamonds',
    gameValue: [4],
    imgPath: 'images/cards/fourdiamonds.jpeg'
  },
  {
    value: '4',
    type: 'hearts',
    gameValue: [4],
    imgPath: 'images/cards/fourhearts.jpeg'
  },
  {
    value: '5',
    type: 'clubs',
    gameValue: [5],
    imgPath: 'images/cards/fiveclubs.jpeg'
  },
  {
    value: '5',
    type: 'spades',
    gameValue: [5],
    imgPath: 'images/cards/fivespades.jpeg'
  },
  {
    value: '5',
    type: 'diamonds',
    gameValue: [5],
    imgPath: 'images/cards/fivediamonds.jpeg'
  },
  {
    value: '5',
    type: 'hearts',
    gameValue: [5],
    imgPath: 'images/cards/fivehearts.jpeg'
  },
  {
    value: '6',
    type: 'clubs',
    gameValue: [6],
    imgPath: 'images/cards/sixclubs.jpeg'
  },
  {
    value: '6',
    type: 'spades',
    gameValue: [6],
    imgPath: 'images/cards/sixspades.jpeg'
  },
  {
    value: '6',
    type: 'diamonds',
    gameValue: [6],
    imgPath: 'images/cards/sixdiamonds.jpeg'
  },
  {
    value: '6',
    type: 'hearts',
    gameValue: [6],
    imgPath: 'images/cards/sixhearts.jpeg'
  },
  {
    value: '7',
    type: 'clubs',
    gameValue: [7],
    imgPath: 'images/cards/sevenclubs.jpeg'
  },
  {
    value: '7',
    type: 'spades',
    gameValue: [7],
    imgPath: 'images/cards/sevenspades.jpeg'
  },
  {
    value: '7',
    type: 'diamonds',
    gameValue: [7],
    imgPath: 'images/cards/sevendiamonds.jpeg'
  },
  {
    value: '7',
    type: 'hearts',
    gameValue: [7],
    imgPath: 'images/cards/sevenhearts.jpeg'
  },
  {
    value: '8',
    type: 'clubs',
    gameValue: [8],
    imgPath: 'images/cards/eightclubs.jpeg'
  },
  {
    value: '8',
    type: 'spades',
    gameValue: [8],
    imgPath: 'images/cards/eightspades.jpeg'
  },
  {
    value: '8',
    type: 'diamonds',
    gameValue: [8],
    imgPath: 'images/cards/eightdiamonds.jpeg'
  },
  {
    value: '8',
    type: 'hearts',
    gameValue: [8],
    imgPath: 'images/cards/eighthearts.jpeg'
  },
  {
    value: '9',
    type: 'clubs',
    gameValue: [9],
    imgPath: 'images/cards/nineclubs.jpeg'
  },
  {
    value: '9',
    type: 'spades',
    gameValue: [9],
    imgPath: 'images/cards/ninespades.jpeg'
  },
  {
    value: '9',
    type: 'diamonds',
    gameValue: [9],
    imgPath: 'images/cards/ninediamonds.jpeg'
  },
  {
    value: '9',
    type: 'hearts',
    gameValue: [9],
    imgPath: 'images/cards/ninehearts.jpeg'
  },
  {
    value: '10',
    type: 'clubs',
    gameValue: [10],
    imgPath: 'images/cards/tenclubs.jpeg'
  },
  {
    value: '10',
    type: 'spades',
    gameValue: [10],
    imgPath: 'images/cards/tenspades.jpeg'
  },
  {
    value: '10',
    type: 'diamonds',
    gameValue: [10],
    imgPath: 'images/cards/tendiamonds.jpeg'
  },
  {
    value: '10',
    type: 'hearts',
    gameValue: [10],
    imgPath: 'images/cards/tenhearts.jpeg'
  },
  {
    value: 'jack',
    type: 'clubs',
    gameValue: [10],
    imgPath: 'images/cards/jackclubs.jpeg'
  },
  {
    value: 'jack',
    type: 'spades',
    gameValue: [10],
    imgPath: 'images/cards/jackspades.jpeg'
  },
  {
    value: 'jack',
    type: 'diamonds',
    gameValue: [10],
    imgPath: 'images/cards/jackdiamonds.jpeg'
  },
  {
    value: 'jack',
    type: 'hearts',
    gameValue: [10],
    imgPath: 'images/cards/jackhearts.jpeg'
  },
  {
    value: 'queen',
    type: 'clubs',
    gameValue: [10],
    imgPath: 'images/cards/queenclubs.jpeg'
  },
  {
    value: 'queen',
    type: 'spades',
    gameValue: [10],
    imgPath: 'images/cards/queenspades.jpeg'
  },
  {
    value: 'queen',
    type: 'diamonds',
    gameValue: [10],
    imgPath: 'images/cards/queendiamonds.jpeg'
  },
  {
    value: 'queen',
    type: 'hearts',
    gameValue: [10],
    imgPath: 'images/cards/queenhearts.jpeg'
  },
  {
    value: 'king',
    type: 'clubs',
    gameValue: [10],
    imgPath: 'images/cards/kingclubs.jpeg'
  },
  {
    value: 'king',
    type: 'spades',
    gameValue: [10],
    imgPath: 'images/cards/kingspades.jpeg'
  },
  {
    value: 'king',
    type: 'diamonds',
    gameValue: [10],
    imgPath: 'images/cards/kingdiamonds.jpeg'
  },
  {
    value: 'king',
    type: 'hearts',
    gameValue: [10],
    imgPath: 'images/cards/kinghearts.jpeg'
  },
  {
    value: 'ace',
    type: 'clubs',
    gameValue: [1, 11],
    imgPath: 'images/cards/aceclubs.jpeg'
  },
  {
    value: 'ace',
    type: 'spades',
    gameValue: [1, 11],
    imgPath: 'images/cards/acespades.jpeg'
  },
  {
    value: 'ace',
    type: 'diamonds',
    gameValue: [1, 11],
    imgPath: 'images/cards/acediamonds.jpeg'
  },
  {
    value: 'ace',
    type: 'hearts',
    gameValue: [1, 11],
    imgPath: 'images/cards/acehearts.jpeg'
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
  // Enabled hit and stand buttons
  document.getElementById(buttons.hit).removeAttribute('disabled');
  document.getElementById(buttons.stand).removeAttribute('disabled');
  // Display cards in UI
  renderCards(dealer, true);
  renderCards(player, true);
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
  // Render new set of cards
  renderCards(opponent, false);
  // If opponents currentPoints is greater than 21 call gameOver function
  if (opponent.currentPoints > 21) {
    gameOver();
  }
  console.log(opponent.currentPoints);
}

// Game over function
function gameOver() {
  console.log('you lost dawg!');
}

// Stand function
function stand() {

}

// Dealers turn function
function dealersTurn() {

}

// Render cards to UI for an opponent
function renderCards(opponent, initialDeal) {
  var html = '';
  opponent.hand.forEach(function(card, index) {
    if (opponent.type === 'dealer' && index === 0 && initialDeal) {
      html += '<div class="card-back"></div>';
    } else {
      html += '<img src="' + card.imgPath + '" />';
    }
  });
  document.getElementById(opponent.cardContainer).innerHTML = html;
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
