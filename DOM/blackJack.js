//
// Blackjack 
// Osa Julian
//

// Card variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

// Ten, Jack, King or Queen are all worth 10 points

// DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let stayButton = document.getElementById('stay-button');
let hitButton = document.getElementById('hit-button');

// Game variables
let gameStarted = false,
gameOver = false,
playerWon = false,
dealerCards = [],
playerCards = [],
dealerScore = 0,
playerScore = 0,
deck = [];

stayButton.style.display = 'none';
hitButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    stayButton.style.display = 'inline';
    hitButton.style.display = 'inline';
    showStatus();
})

stayButton.addEventListener('click', function() {
    gameOver = true;
    checkForEndOfGame();
    showStatus();
})

hitButton.addEventListener('click', function () {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
})


function createDeck() {
let deck = []
    for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++) {
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
            let cards = {
                suit: suits[suitsIdx],
                value: values[valuesIdx]
            };
            deck.push(cards);
        }
        
    }
    return deck;
}



function getCardString(card) {
    return card.suit + ' of ' + card.value;
}

function getNextCard() {
    return deck.shift();
}

function getCardNumericValue(card) {
    switch(card.value) {
        case 'Ace':
        return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i =0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue (card);
        if (card.value === 'Ace') {
            hasAce = true;
        }
    }

    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }

    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
    updateScores();
     if (gameOver) {
         // let dealer take cards
         while(dealerScore < playerScore 
            && playerScore <= 21
            && dealerScore <= 21) {
                dealerCards.push(getNextCard());
                updateScores();
            }
     }

     if (playerCards > 21) {
         playerWon = false;
         ganeOver = true;
     }

     else if (dealerScore > 21) {
         playerWon = true;
         gameOver = true;
     }

     else if (gameOver) {
         if (playerScore > dealerScore) {
             playerWon = true;
         }

         else {
             playerWon = false;
         }
     }
}

function showStatus() {
    if(!gameStarted) {
        textArea.innerHTML = 'Welcome to Blackjack!';
        return;
    }

    for (let i = 0; i < deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
    }

    let dealerCardString = '';
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
    }

    let playerCardString = '';
    for (let i = 0; i< playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText = 
    'Dealer has: \n' + 
    dealerCardString + 
    '(score: ' + dealerScore + ')\n\n' +

    'Player has: \n' +
    playerCardString +
    '(score: ' + playerScore + ')\n\n';

    if(gameOver) {
        if(playerWon) {
            textArea.innerText = "YOU WIN!";
        }

        else {
            textArea.innerText = "DEALER WINS";
        }

        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }

}

// for (let i = 0; i < deck.length; i++) {
//     console.log(deck[i]);
// }



// console.log(getCardString(playerCards[0]))
// console.log(getCardString(playerCards[1]));