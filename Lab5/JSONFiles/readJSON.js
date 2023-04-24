const fs = require("fs");

fs.readFile("../JSONFiles/customer.json", "utf8", (err, jsonString) => {
    if(err) {
        console.log("File read failed: ", err);
        return;
    }
    console.log("File data: ", jsonString);
});

console.log("On the last line of code now");
