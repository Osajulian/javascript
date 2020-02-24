let card = {
    suit: 'Hearts',
    value: 'Ace'
};

function changeCard(card) {
    card.suit = 'Clubs';
}

console.log('suit before passing card object to function - ', card.suit);

changeCard(card);

console.log('suit after passing card object to function - ', card.suit);