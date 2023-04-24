const fs = require('fs');

let game = ["GTA", "Pacman", "Candy Crush"]
let topScore = ["12,674", "12,500", "15,999"]
let names = ["Sheila", "Julie", "Aoife"]
let highScores = [];

for(let i=0; i < game.length; i++) {
    let highScore = {
        "game": game[i],
        "topScore": topScore[i],
        "highScore": names[i]
    }
    highScores.push(highScore);
}

let data = JSON.stringify(highScores, null, 2);

fs.writeFile('./JSONFiles/leaderboard.json', data, (err) => {
    if(err) throw err; 
        console.log('Data written to file');
    
});