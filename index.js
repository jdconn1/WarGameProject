const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const ValueMap = {
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '10': 10,
    'Jack' : 11,
    'Queen' : 12,
    'King' : 13,
    'Ace' : 14
}


class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.playerDeck = [];
    }
    addPlayerDeck(deck) {
        this.playerDeck = deck;
    }
}

class Deck {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        this.deck = [];
    }
    creatNewDeck() {
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.value.length; j++) {
                let cards = {suit: this.suit[i], value: this.value[j]};
                this.deck.push(cards);
            }
        }
        return this.deck;
    }
    shuffle() {
        for (let i = 0; i < this.deck.length - 1; i++) {
            const newIndex = Math.floor(Math.random() * 52);
            const oldvalue = this.deck[newIndex];
            this.deck[newIndex] = this.deck[i];
            this.deck[i] = oldvalue;
        }
    }
    deal() {
         player1Hand = (this.deck.slice(0, 26));
         player2Hand = (this.deck.slice(26, this.deck.length));
        
    }
    start() {
        this.creatNewDeck();
        this.shuffle();
        this.deal();
    }
}

function game(player1, player2) {
    for (let i = 0; i < player1Hand.length; i++) {
        if (player1.playerDeck[i].value > player2.playerDeck[i].value) {
            console.log(`${player1.name}'s hand is 
${player1.playerDeck[i].value} of ${player1.playerDeck[i].suit}
${player2.name}'s hand is
${player2.playerDeck[i].value} of ${player2.playerDeck[i].suit}
${player1.name} is rewarded a point.`);
            player1.score++;
            console.log(`${player1.name}'s score is currently ${player1.score}`);
        } else if (player1.playerDeck[i].value < player2.playerDeck[i].value) {
            console.log(`${player2.name}'s hand is 
${player2.playerDeck[i].value} of ${player2.playerDeck[i].suit}
${player1.name}'s hand is
${player1.playerDeck[i].value} of ${player1.playerDeck[i].suit}
${player2.name} is rewarded a point.`);
            player2.score++;
            console.log(`${player2.name}'s score is currently ${player2.score}`);
        } else if (player1.playerDeck[i].value === player2.playerDeck[i].value) {
            console.log(`${player1.name} has tied with ${player2.name}.`);
        }
    }
    if (player1.score > player2.score) {
        console.log(`${player1.name} wins with a total score of ${player1.score}!!!`);
    } else if (player1.score < player2.score) {
        console.log(`${player2.name} wins with a total score of ${player2.score}!!!`);
    }else {
        console.log(`${player1.name} and ${player2.name} have tied!`); 
    }

}

let player1Hand = [];
let player2Hand = [];

let deck = new Deck(suits, values);
deck.start();

let player1 = new Player('John');
let player2 = new Player('James');

player1.addPlayerDeck(player1Hand);
player2.addPlayerDeck(player2Hand);


console.log(player1);
console.log(player2);

game(player1, player2);

console.log(player1);
console.log(player2);
