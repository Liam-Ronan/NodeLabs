const fs = require("fs");

fs.readFile("./JSONFiles/store.json", "utf8", (err, jsonString) => {
    if(err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const store = JSON.parse(jsonString);

        console.log("the store name is:", store.name);
        console.log("The location of the store is:", store.address);
        console.log("store order count is:", store.order_count);
        store.order_count --;
        console.log("updated store order count is:", store.order_count);
        fs.writeFile("./JSONFiles/store.json", JSON.stringify(store), err => {
            if(err) {
                console.log("Error writing file:", err);
            }
        })
    }
    catch(err) {
        console.log("error parsing JSON string", err);
    }
});