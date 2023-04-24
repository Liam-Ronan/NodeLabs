
var fs = require('fs');


fs.readFile("./data/ManUnited.json", "utf-8", (err, data) => {
    if(err) {
        console.log("Error reading file: ", err)
        return;
    }
    const ageAverages = JSON.parse(data);
    let avgNum = 0;

    ageAverages.forEach(ageAverage => {
        avgNum += ageAverage.age;
    });

    var ageRounded = Math.round(avgNum/(ageAverages.length+1))
    console.log(`The average age of the players is: ${ageRounded}`);
});


