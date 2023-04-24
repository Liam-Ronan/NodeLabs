const fs = require("fs");

let peopleArray = [];
let dublinPeople = 0;

fs.readFile("./JSONFiles/people.json", "utf8", (err, jsonString) => {
    if(err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        peopleArray = JSON.parse(jsonString);

        for(let i=0; i < peopleArray.length; i++) {
            if(peopleArray[i].county == "Dublin") {
                dublinPeople++;
            }
        }
        console.log("the total number of people from dublin are " + dublinPeople);
    } catch (err) {
        console.log("Error parsing JSON String:", err);
    }
});