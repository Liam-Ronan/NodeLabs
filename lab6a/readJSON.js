const fs = require('fs');

fs.readFile("./JSONFiles/cities.json", "utf8", (err, jsonString) => {
    if(err) {
        console.log("Error reading the file:", err);
        return;
    }
    try {
        const read = JSON.parse(jsonString);
        console.log(read);
    }
    catch(err) {
        console.log("Error reading file")
    }
});