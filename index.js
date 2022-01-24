var cards = [
  // HEARTS
  {
    id: 1,
    value: 1,
    suit: "HEART",
    name: "A",
  },
  {
    id: 2,
    value: 2,
    suit: "HEART",
    name: "2",
  },
  {
    id: 3,
    value: 3,
    suit: "HEART",
    name: "3",
  },
  {
    id: 4,
    value: 4,
    suit: "HEART",
    name: "4",
  },
  {
    id: 5,
    value: 5,
    suit: "HEART",
    name: "5",
  },
  {
    id: 6,
    value: 6,
    suit: "HEART",
    name: "6",
  },
  {
    id: 7,
    value: 7,
    suit: "HEART",
    name: "7",
  },
  {
    id: 8,
    value: 8,
    suit: "HEART",
    name: "8",
  },
  {
    id: 9,
    value: 9,
    suit: "HEART",
    name: "9",
  },
  {
    id: 10,
    value: 10,
    suit: "HEART",
    name: "10",
  },
  {
    id: 11,
    value: 11,
    suit: "HEART",
    name: "J",
  },
  {
    id: 12,
    value: 12,
    suit: "HEART",
    name: "Q",
  },
  {
    id: 13,
    value: 13,
    suit: "HEART",
    name: "K",
  },
  // DIAMONDS
  {
    id: 14,
    value: 1,
    suit: "DIAMOND",
    name: "A",
  },
  {
    id: 15,
    value: 2,
    suit: "DIAMOND",
    name: "2",
  },
  {
    id: 16,
    value: 3,
    suit: "DIAMOND",
    name: "3",
  },
  {
    id: 17,
    value: 4,
    suit: "DIAMOND",
    name: "4",
  },
  {
    id: 18,
    value: 5,
    suit: "DIAMOND",
    name: "5",
  },
  {
    id: 19,
    value: 6,
    suit: "DIAMOND",
    name: "6",
  },
  {
    id: 20,
    value: 7,
    suit: "DIAMOND",
    name: "7",
  },
  {
    id: 21,
    value: 8,
    suit: "DIAMOND",
    name: "8",
  },
  {
    id: 22,
    value: 9,
    suit: "DIAMOND",
    name: "9",
  },
  {
    id: 23,
    value: 10,
    suit: "DIAMOND",
    name: "10",
  },
  {
    id: 24,
    value: 11,
    suit: "DIAMOND",
    name: "J",
  },
  {
    id: 25,
    value: 12,
    suit: "DIAMOND",
    name: "Q",
  },
  {
    id: 26,
    value: 13,
    suit: "DIAMOND",
    name: "K",
  },
  // SPADES
  {
    id: 27,
    value: 1,
    suit: "SPADE",
    name: "A",
  },
  {
    id: 28,
    value: 2,
    suit: "SPADE",
    name: "2",
  },
  {
    id: 29,
    value: 3,
    suit: "SPADE",
    name: "3",
  },
  {
    id: 30,
    value: 4,
    suit: "SPADE",
    name: "4",
  },
  {
    id: 31,
    value: 5,
    suit: "SPADE",
    name: "5",
  },
  {
    id: 32,
    value: 6,
    suit: "SPADE",
    name: "6",
  },
  {
    id: 33,
    value: 7,
    suit: "SPADE",
    name: "7",
  },
  {
    id: 34,
    value: 8,
    suit: "SPADE",
    name: "8",
  },
  {
    id: 35,
    value: 9,
    suit: "SPADE",
    name: "9",
  },
  {
    id: 36,
    value: 10,
    suit: "SPADE",
    name: "10",
  },
  {
    id: 37,
    value: 11,
    suit: "SPADE",
    name: "J",
  },
  {
    id: 38,
    value: 12,
    suit: "SPADE",
    name: "Q",
  },
  {
    id: 39,
    value: 13,
    suit: "SPADE",
    name: "K",
  },
  // CLUBS
  {
    id: 40,
    value: 1,
    suit: "CLUB",
    name: "A",
  },
  {
    id: 41,
    value: 2,
    suit: "CLUB",
    name: "2",
  },
  {
    id: 42,
    value: 3,
    suit: "CLUB",
    name: "3",
  },
  {
    id: 43,
    value: 4,
    suit: "CLUB",
    name: "4",
  },
  {
    id: 44,
    value: 5,
    suit: "CLUB",
    name: "5",
  },
  {
    id: 45,
    value: 6,
    suit: "CLUB",
    name: "6",
  },
  {
    id: 46,
    value: 7,
    suit: "CLUB",
    name: "7",
  },
  {
    id: 47,
    value: 8,
    suit: "CLUB",
    name: "8",
  },
  {
    id: 48,
    value: 9,
    suit: "CLUB",
    name: "9",
  },
  {
    id: 49,
    value: 10,
    suit: "CLUB",
    name: "10",
  },
  {
    id: 50,
    value: 11,
    suit: "CLUB",
    name: "J",
  },
  {
    id: 51,
    value: 12,
    suit: "CLUB",
    name: "Q",
  },
  {
    id: 52,
    value: 13,
    suit: "CLUB",
    name: "K",
  },
];

let root = document.getElementById("root");

function createHTML(hand) {
  let gameNumber = document.createElement("p");
  gameNumber.innerHTML = game;
  gameNumber.classList.add("game-number");

  root.appendChild(gameNumber);

  for (var card in hand) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    if (hand[card].suit == "CLUB" || hand[card].suit == "SPADE") {
      newCard.classList.add("black");
    } else {
      newCard.classList.add("red");
    }

    let cardValue = document.createElement("p");
    cardValue.innerHTML = hand[card].name;
    cardValue.classList.add("card-value");
    newCard.appendChild(cardValue);

    let cardSuit = document.createElement("p");
    cardSuit.innerHTML = hand[card].suit;
    cardSuit.classList.add("card-suit");
    newCard.appendChild(cardSuit);
    root.appendChild(newCard);
  }
}

function testPair(hand) {
  let values = [];
  let handPairs = 0;
  hand.map((card) => {
    values.push(card.value);
  });

  values.map((card) => {
    values.splice(values.indexOf(card), 1);

    if (values.includes(card)) {
      pairs++;
      handPairs++;

      values.splice(values.indexOf(card), 1);
      if (values.includes(card)) {
        pairs--;
        toak++;

        values.splice(values.indexOf(card), 1);
        if (values.includes(card)) {
          twopairs--;
          foak++;
        }
      }
    }
  });

  if (handPairs > 1) {
    twopairs++;
    pairs--;
  }
}

function testStraight(hand) {
  let values = [];
  hand.map((card) => {
    values.push(card.value);
  });

  let min = Math.min(...values);

  if (values.indexOf(min + 1) > -1) {
    if (values.indexOf(min + 2) > -1) {
      if (values.indexOf(min + 3) > -1) {
        if (values.indexOf(min + 4) > -1) {
          straights++;
        }
      }
    }
  }
}

function testFlush(hand) {
  let suits = [];
  hand.map((card) => {
    suits.push(card.suit);
  });

  testSuit = suits[0];
  let result = true;

  hand.map((card) => {
    if (card.suit != testSuit) {
      result = false;
    }
  });

  if (result) {
    flushes++;
  }
}

function testFullHouse(hand) {
  let values = [];
  hand.map((card) => {
    values.push(card.value);
  });

  values.map((card) => {
    values.splice(values.indexOf(card), 1);
    if (values.includes(card)) {
      values.splice(values.indexOf(card), 1);
      test = values[0];

      if (test == values[1]) {
        if (test == values[2]) {
          fullhouse++;
        }
      }
    }
  });
}

function testRF(hand) {
  let suits = [];
  hand.map((card) => {
    suits.push(card.suit);
  });

  testSuit = suits[0];
  let result = true;

  hand.map((card) => {
    if (card.suit != testSuit) {
      result = false;
    }
  });

  if (result) {
    let values = [];
    hand.map((card) => {
      values.push(card.value);
    });

    let min = Math.min(...values);

    if (min == 1) {
      if (values.indexOf(min + 10) > -1) {
        if (values.indexOf(min + 11) > -1) {
          if (values.indexOf(min + 12) > -1) {
            royalflush++;
            console.log("ROYAL FLUSH AT GAME " + game);
          }
        }
      }
    }
  }
}

function testSF(hand) {
  let suits = [];
  hand.map((card) => {
    suits.push(card.suit);
  });

  testSuit = suits[0];
  let result = true;

  hand.map((card) => {
    if (card.suit != testSuit) {
      result = false;
    }
  });

  if (result) {
    let values = [];
    hand.map((card) => {
      values.push(card.value);
    });

    let min = Math.min(...values);

    if (values.indexOf(min + 1) > -1) {
      if (values.indexOf(min + 2) > -1) {
        if (values.indexOf(min + 3) > -1) {
          if (values.indexOf(min + 4) > -1) {
            straightflush++;
          }
        }
      }
    }
  }
}

function dealHand(deck, cards) {
  let hand = [];
  let tempDeck = deck.slice();
  for (var i = 0; i < cards; i++) {
    let randomCard = Math.floor(Math.random() * tempDeck.length);

    hand.push(tempDeck[randomCard]);
    tempDeck.splice(randomCard, 1);
  }
  testPair(hand);
  testStraight(hand);
  testFlush(hand);
  testFullHouse(hand);
  testSF(hand);
  testRF(hand);

  createHTML(hand);
}

function testHand(size) {
  document.getElementById("root").innerHTML = "";

  runs = document.getElementById("input").value;

  pairs = 0;
  twopairs = 0;
  toak = 0;
  foak = 0;
  straights = 0;
  flushes = 0;
  fullhouse = 0;
  straightflush = 0;
  royalflush = 0;

  for (var i = 0; i < runs; i++) {
    game = i + 1;
    dealHand(cards, size);
  }

  document.getElementById("games").innerHTML = runs;
  document.getElementById("pair").innerHTML =
    pairs + " (" + ((pairs / runs) * 100).toFixed(4) + "%)";
  document.getElementById("twopair").innerHTML =
    twopairs + " (" + ((twopairs / runs) * 100).toFixed(4) + "%)";
  document.getElementById("toak").innerHTML =
    toak + " (" + ((toak / runs) * 100).toFixed(4) + "%)";
  document.getElementById("straight").innerHTML =
    straights + " (" + ((straights / runs) * 100).toFixed(4) + "%)";
  document.getElementById("flush").innerHTML =
    flushes + " (" + ((flushes / runs) * 100).toFixed(4) + "%)";
  document.getElementById("house").innerHTML =
    fullhouse + " (" + ((fullhouse / runs) * 100).toFixed(4) + "%)";
  document.getElementById("foak").innerHTML =
    foak + " (" + ((foak / runs) * 100).toFixed(4) + "%)";
  document.getElementById("straightflush").innerHTML =
    straightflush + " (" + ((straightflush / runs) * 100).toFixed(4) + "%)";
  document.getElementById("royal").innerHTML =
    royalflush + " (" + ((royalflush / runs) * 100).toFixed(4) + "%)";
}
