const fs = require('fs');

fs.readFile("./data/ManUnited.json", "utf8", (err, data) => {
    if(err) {
        console.log("error reading file from disk:", err)
        return;
    }
    try {
        const players = JSON.parse(data);
        players.forEach(player => {
            console.log(`The player name is: ${player.name}`);
            console.log(`The player age is: ${player.age}`);
            console.log(`The players nation is: ${player.nationality}`);
            console.log(`The player goals are: ${player.goals}`);
            console.log(`The player assists are: ${player.assists}`);
            console.log(`The player DOBs are: ${player.DOB}`);
            console.log(`The player heights are: ${player.height}`);
            console.log("------------------------------------------")
        });
    }
    catch(err) {
        console.log("error reading file")
    }
});