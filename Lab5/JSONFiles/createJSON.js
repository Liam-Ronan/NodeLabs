const fs = require('fs');

let customer = {
    name: "Josh",
    age: 20,
    address: "Dublin"
};

let customerTwo = {
    name: "Julie",
    age: 19,
    address: "Glasgow"
};  

let data = JSON.stringify([customer, customerTwo], null, 2);

fs.writeFile('../JSONFiles/newCustomer.json', data, (err) => {
    if(err) throw err; 
        console.log('Data written to file'); 
});

console.log("This is after the write call");