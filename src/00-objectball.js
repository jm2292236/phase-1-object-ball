function gameObject() {
    const gameObj = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['White', 'Black'],
            players: {
                'Alan Anderson': {
                    number: 111,
                    shoe: 112, 
                    points: 113,
                    rebounds: 114,
                    assists: 115,
                    steals: 116,
                    blocks: 117,
                    slamDunks: 118 
                },
                'Reggie Evans': {
                    number: 121,
                    shoe: 122, 
                    points: 123,
                    rebounds: 124,
                    assists: 125,
                    steals: 126,
                    blocks: 127,
                    slamDunks: 128 
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 211,
                    shoe: 212, 
                    points: 2131,
                    rebounds: 214,
                    assists: 215,
                    steals: 216,
                    blocks: 217,
                    slamDunks: 218 
                },
                'Bismack Biyombo': {
                    number: 221,
                    shoe: 222, 
                    points: 223,
                    rebounds: 224,
                    assists: 225,
                    steals: 226,
                    blocks: 227,
                    slamDunks: 228 
                }
            }
        }
    };
    return gameObj;
}


// ===========================
// Functions
// ===========================

// Receives a player name and returns points scored
// Returns -1 if the player is not found
function numPointsScored(playerToLookFor) {
    let game = gameObject();

    // look for the player in both teams
    for (team in game) {
        for (playerInObj in game[team].players) {
            if (playerInObj === playerToLookFor) {
                return game[team].players[playerInObj].points;
            }
        }
    }

    // Player not found
    return -1;
}

console.log('\n--- Function Points ---');
console.log('Points for Alan Anderson: ' + numPointsScored('Alan Anderson'));
console.log('Points for Bismack Biyombo: ' + numPointsScored('Bismack Biyombo'));
console.log('Points for Unseen Player: ' + numPointsScored('Unseen Player'));

// Receives a player name and returns his shoe size
// Returns -1 if the player is not found
function shoeSize(playerToLookFor) {
    let game = gameObject();

    // look for the player in both teams
    for (team in game) {
        for (playerInObj in game[team].players) {
            if (playerInObj === playerToLookFor) {
                return game[team].players[playerInObj].shoe;
            }
        }
    }

    // Player not found
    return -1;
}

console.log('\n--- Function shoeSize ---');
console.log('Shoe size for Alan Anderson: ' + shoeSize('Alan Anderson'));
console.log('Shoe size for Bismack Biyombo: ' + shoeSize('Bismack Biyombo'));
console.log('Shoe size for Unseen Player: ' + shoeSize('Unseen Player'));

// Receives a team name and returns an array of its colors
// Returns an empty array if the team name is not found
function teamColors(teamToLookFor) {
    let game = gameObject();

    // look for the team name
    for (team in game) {
        if (game[team].teamName === teamToLookFor) {
            return game[team].colors;
        }
    }

    return [];
}

console.log('\n--- Function teamColors ---');
console.log('Colors for team Brooklyn Nets: ', teamColors('Brooklyn Nets'));
console.log('Colors for team Charlotte Hornets: ', teamColors('Charlotte Hornets'));
console.log('Colors for Unseen Team: ', teamColors('Unseen Team'));

// Returns the team names for the game
function teamNames() {
    let game = gameObject();
    let namesArray = [];

    // Iterate through the object to look for the team names
    for (team in game) {
        namesArray.push(game[team].teamName);
    }

    return namesArray;
}

console.log('\n--- Function teamNames ---');
console.log('Team names for tonight game: ', teamNames());

function playerNumbers(teamToLookFor) {
    let game = gameObject();
    let playerNumbersArray = [];

    // look for the team name
    for (team in game) {
        if (game[team].teamName === teamToLookFor) {
            for (player in game[team].players) {
                for (playerName in game[team].players[player]) {
                    playerNumbersArray.push(game[team].players[player].number);
                }
            }
        }
    }

    return [];
}

console.log('\n--- Function playerNumbers ---');
console.log('Player numbers for team Brooklyn Nets: ', playerNumbers('Brooklyn Nets'));
console.log('Player numbers for team Charlotte Hornets: ', playerNumbers('Charlotte Hornets'));
console.log('Player numbers for team Unseen Team: ', playerNumbers('Unseen Team'));

function playerStats(playerToLookFor) {
    let game = gameObject();

    // look for the player in both teams
    for (team in game) {
        for (playerInObj in game[team].players) {
            if (playerInObj === playerToLookFor) {
                return game[team].players[playerInObj];
            }
        }
    }
}

console.log('\n--- Function playerStats ---');
console.log('-Alan Anderson');
console.log(playerStats('Alan Anderson'));

// Return the number of rebounds associated witn the player with the largest shoe size
function bigShoeRebounds() {
    let game = gameObject();
    let playerName;
    let bigShoe = 0
    let rebounds = 0;

    // Look for the players in both teams
    for (team in game) {
        for (playerInObj in game[team].players) {
            if (game[team].players[playerInObj].shoe > bigShoe) {
                playerName = playerInObj;
                bigShoe = game[team].players[playerInObj].shoe;
                rebounds = game[team].players[playerInObj].rebounds;
            }
        }
    }

    return `${playerName} has the largest shoe (${bigShoe} and ${rebounds} rebounds)`;
}

console.log('\n--- Function bigShoeRebounds ---');
console.log(bigShoeRebounds());

function mostPointsScored() {
    let game = gameObject();
    let playerName;
    let mostPoints = 0;

    // Look for the players in both teams
    for (team in game) {
        for (playerInObj in game[team].players) {
            if (game[team].players[playerInObj].points > mostPoints) {
                playerName = playerInObj;
                mostPoints = game[team].players[playerInObj].points;
            }
        }
    }

    return `${playerName} has the most points scored with ${mostPoints})`;
}

console.log('\n--- Function mostPointsScored ---');
console.log(mostPointsScored());

function winningTeam() {

}

function playerWithLongestName() {
    let game = gameObject();
    let playerName = '';

    // Look for players in both teams
    for (team in game) {
        for (playerInObj in game[team].players) {
            if (playerInObj.length > playerName.length) {
                playerName = playerInObj;
            }
        }
    }

    return `${playerName} has the longes name!)`;
}

console.log('\n--- Function playerWithLongestName ---');
console.log(playerWithLongestName());


function doesLongNameStealATon() {
    let game = gameObject();
    let playerName = '';
    let playerWithMostSteals;
    let mostSteals = 0;

    // Look for players in both teams
    for (team in game) {
        for (playerInObj in game[team].players) {
            if (playerInObj.length > playerName.length) {
                playerName = playerInObj;
            }

            if (game[team].players[playerInObj].steals > mostSteals) {
                playerWithMostSteals = playerInObj;
                mostSteals = game[team].players[playerInObj].steals;
            }
        }
    }

    if (playerName === playerWithMostSteals) {
        return `Player with longest name (${playerName}) has also the most steals!`;
    } else {
        return `Player with longest name (${playerName}) is not who steals the most (${playerWithMostSteals})!`;
    }
}

console.log('\n--- Function doesLongNameStealATon ---');
console.log(doesLongNameStealATon());


// test
function homeTeamPlayers() {
    const homeTeam = gameObject();
    console.log('All players assists');
    Object.keys(homeTeam.home.players).forEach(player => {console.log(homeTeam.home.players[player].assists)});

    console.log('Sum of players assists');
    totalAssists = Object.keys(homeTeam.home.players).reduce(function(accum, player) {return homeTeam.home.players[player].assists + accum}, 0);
    console.log(totalAssists);

    console.log("   Object.keys(oo) =>", Object.keys(homeTeam));
    console.log(" Object.values(oo) =>", Object.values(homeTeam));
    console.log("Object.entries(oo) =>", Object.entries(homeTeam));
    console.log("Object.entries(oo.away) =>", Object.entries(homeTeam.away));
    console.log("Object.entries(oo.away.players) =>", Object.entries(homeTeam.away.players));
    console.log("Object.entries(oo.away.players['Jeff Adrien']) =>", Object.entries(homeTeam.away.players['Jeff Adrien']));
    console.log("away.players['Jeff Adrien'].slamDunks) =>", homeTeam.away.players['Jeff Adrien'].slamDunks);
    console.log(" Object.values(oo.colors) =>", Object.values(homeTeam.home.colors));
}

//homeTeamPlayers();
