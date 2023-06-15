// Using this array to randomly select the cards for Player and Dealer
const suits = ["Heart", "Diamond", "Club", "Spade"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

// variable declaration
let playerhand = document.getElementById("player-hand");
let dealerhand = document.getElementById("dealer-hand");
let dealbtn = document.getElementById("deal-btn");
let hitbtn = document.getElementById("hit-btn");
let standbtn = document.getElementById("stand-btn");
let splitbtn = document.getElementById("split-btn");
let hiddiv = document.getElementById("game-container");
let hiddiv1 = document.getElementById("resetdiv");


// starting service
hiddiv.style.display = "none";
hiddiv1.style.display = "none";
splitbtn.style.display = "none";


// This function will be called to select the suit from suits array
function getRandomSuit(suits) { 
    const randomIndex = Math.floor(Math.random() * suits.length);
    return suits[randomIndex];
}

// This function will be called to select the card from cards array
function getRandomRank(rank) { 
    const randomIndex = Math.floor(Math.random() * rank.length);
    return rank[randomIndex];
}



function updatePlayerCard(cards) { 
    playerhand.textContent = "";
    cards.forEach( card => {
        const cardElement = createCard(card.suit, card.rank);
        playerhand.appendChild(cardElement);
    });
}

function updateDealerCard(cards) { 
    dealerhand.textContent = "";
    cards.forEach(card => { 
        const cardElement = createCard(card.suit, card.rank);
        dealerhand.appendChild(cardElement);
    });
}

function createCard(suits, rank) { 
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.textContent = `${rank} of ${suits}`;
    return cardElement;
}
const playerCards = [
  { suit: getRandomSuit(suits), rank: getRandomRank(rank)},
  { suit: getRandomSuit(suits), rank: getRandomRank(rank)}
];

const dealerCards = [
    { suit: getRandomSuit(suits), rank: getRandomRank(rank) },
    { suit: getRandomSuit(suits), rank: getRandomRank(rank) }
];

dealbtn.onclick = () => {
    hiddiv.style.display = "block";
    hiddiv1.style.display = "block";
    dealbtn.style.display = "none";
    updatePlayerCard(playerCards);
    updateDealerCard(dealerCards);
}