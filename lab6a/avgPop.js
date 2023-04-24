const fs = require('fs');

fs.readFile("./JSONFiles/cities.json", "utf-8", (err, jsonString) => {
    if(err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const cities = JSON.parse(jsonString);
        let avgNum = 0;

        cities.forEach(i => {
            avgNum += i.population;
        });
        averageRound = Math.round(avgNum/(cities.length+1))
        console.log(`The average population is ${averageRound}`);
        
    }
    catch(err) {
        console.log("Error reading file");
    }
});