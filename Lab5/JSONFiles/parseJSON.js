const fs = require("fs");
fs.readFile("../JSONfiles/customer.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const customer = JSON.parse(jsonString);
        console.log("Customer name is:", customer.name);
        console.log("Customer address is:", customer.address);
    }    
    catch (err) { console.log("Error parsing JSON string:", err); 
    }
});