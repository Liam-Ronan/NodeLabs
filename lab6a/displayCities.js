const fs = require('fs');

fs.readFile("./JSONFiles/cities.json", "utf8", (err, jsonString) => {
    if(err) {
        console.log("error reading file from disk:", err)
        return;
    }
    try {
        const cities = JSON.parse(jsonString);
        cities.forEach(i => {
            console.log(`The cities name is ${i.name}. and it's population is ${i.population}, the country is ${i.country}, and the continent is ${i.continent}`);
        });
    }
    catch(err) {
        console.log("error reading file")
    }
});