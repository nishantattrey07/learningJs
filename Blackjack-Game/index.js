// Using this array to randomly select the cards for Player and Dealer
const suits = ["Heart", "Diamond", "Club", "Spade"];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const checkRank = ["Jack", "Queen", "King",];
let playerCards = [];
let dealerCards = [];

// variable declaration
let playerhand = document.getElementById("player-hand");
let dealerhand = document.getElementById("dealer-hand");
let dealbtn = document.getElementById("deal-btn");
let hitbtn = document.getElementById("hit-btn");
let standbtn = document.getElementById("stand-btn");
let splitbtn = document.getElementById("split-btn");
let resetbtn = document.getElementById("reset-btn");
let hiddiv = document.getElementById("game-container");
let hiddiv1 = document.getElementById("resetdiv");
let usrScore = document.getElementById("player-score");
let dlrScore = document.getElementById("dealer-score");

// assigning variables
let userScore = 0;
let dealerScore = 0;


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


// This function creates the card
function createCard(suits, rank) { 
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.textContent = `${rank} of ${suits}`;
    return cardElement;
}

function updatePlayerCard(cards) { 
    playerhand.textContent = "";
    cards.forEach( card => {
        const cardElement = createCard(card.suit, card.rank);
        playerhand.appendChild(cardElement);
        // updating scores
        if (parseInt(card.rank) >= 2 && parseInt(card.rank) < 10) {
            userScore += parseInt(card.rank);
            usrScore.textContent = userScore;
        }
        else if (checkRank.includes(card.rank)) {
            userScore += 10;
            usrScore.textContent = userScore;
        }
        else if (card.rank === "Ace") { 
            userScore += 11;
            usrScore.textContent = userScore;
        }
    });
}

function updateDealerCard(cards) { 
    dealerhand.textContent = "";
    cards.forEach(card => { 
        const cardElement = createCard(card.suit, card.rank);
        dealerhand.appendChild(cardElement);
        if (parseInt(card.rank) >= 2 && parseInt(card.rank) <= 10) {
            dealerScore += parseInt(card.rank);
            dlrScore.textContent = dealerScore;
        }
        else if (checkRank.includes(card.rank)) {
            dealerScore += 10;
            dlrScore.textContent = dealerScore;
        }
        else if (card.rank === "Ace") { 
            dealerScore += 11;
            dlrScore.textContent = dealerScore;
        }
    });
}

function stand() { 
    dealerCards.push({ suit: getRandomSuit(suits), rank: getRandomRank(rank) });
    // dealerScore is equals to zero so that the previous numbers that are beig added don't add again
    dealerScore = 0;
    updateDealerCard(dealerCards);
    check();
};

function check() { 
    if (dealerScore > userScore && dealerScore <= 21) {

        setTimeout(() => { 
            alert("You Lost!");
            reset();
        }, 100);
        
    }
    else if (dealerScore === 21 && userScore !== 21) { 
        setTimeout(() => { 
            alert("You Lost!");
            reset();
        }, 100);
    }
    else if ((dealerScore < userScore && userScore <= 21) || dealerScore > 21) {
        setTimeout(() => { 
            alert("You Won!");
            reset();
        }, 100);
        
    }
    else if (dealerScore < 17 || dealerScore < userScore) {
        dealerCards.push({ suit: getRandomSuit(suits), rank: getRandomRank(rank) });
        dealerScore = 0;
        updateDealerCard(dealerCards);
        check();
    }
    else if (dealerScore === userScore) { 

        setTimeout(() => {
            alert("Draw");
            reset();
        },100);
        
    }
};

function reset() { 
      // Reset the player and dealer hands
  playerCards.length = 0;
  dealerCards.length = 0;

  // Reset the player and dealer scores
  userScore = 0;
  dealerScore = 0;
  usrScore.textContent = userScore;
  dlrScore.textContent = dealerScore;

  // Clear the player and dealer hands on the screen
  playerhand.textContent = "";
  dealerhand.textContent = "";

  // Hide the game elements and show the deal button
  hiddiv.style.display = "none";
  hiddiv1.style.display = "none";
  dealbtn.style.visibility = "visible";
};


// This function will be called when the deal button is clicked
dealbtn.onclick = () => {
      // Update the player and dealer hands with new cards
playerCards = [
    { suit: getRandomSuit(suits), rank: getRandomRank(rank)},
    { suit: getRandomSuit(suits), rank: getRandomRank(rank)}
];

dealerCards = [
    { suit: getRandomSuit(suits), rank: getRandomRank(rank) }
];
    hiddiv.style.display = "block";
    hiddiv1.style.display = "block";
    dealbtn.style.visibility = "hidden";
    updatePlayerCard(playerCards);
    updateDealerCard(dealerCards);
};


// This function will be called when the hit button is clicked
hitbtn.onclick = () => { 
    playerCards.push({ suit: getRandomSuit(suits), rank: getRandomRank(rank) });
    // UserScore is equals to zero so that the previous numbers that are beig added don't add again
    userScore = 0;
    updatePlayerCard(playerCards);
    if (userScore > 21) {
        
        setTimeout(() => {
            alert("You Lost!");
            reset();
        }, 100); 
    }
    else if (userScore === 21) { 
        
         setTimeout(() => {
            alert("You Won!");
            reset();
        }, 100); 
       
    }
};

// This function will be called when the stand button is clicked
standbtn.onclick = () => { 
    stand();    
};



resetbtn.onclick = () => { 
    reset();
};

