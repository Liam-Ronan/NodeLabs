const fs = require('fs');
let population = 10000000;

fs.readFile("./JSONFiles/cities.json", "utf-8", (err, jsonString) => {
    if(err) {
        console.log("Error reading from disk:", err);
        return;
    }
    try {
        const cities = JSON.parse(jsonString);
        const numCountries = [];
        cities.forEach(i => {
            if(i.population > population) {
                numCountries.push(i);
            }
        });
        console.log(`The number of countries with a population greater than 1000000 is ${numCountries.length+1}`);
    
    }
    catch(err) {
        console.log("error reading file");
    }
});