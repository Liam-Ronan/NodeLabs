const fs = require('fs');
let Liam = {
    fname: 'Liam',
    lname: 'Ronan',
    age: 22,
    address: 'rathnew',
    college: 'iadt'
}
let data = JSON.stringify(Liam,null,2);
let file = '../JSONfiles/liam.json'
fs.writeFile(file, data,(err)=>{
    if (err) throw err 
    console.log('Data Written to File');
});
fs.readFile(file, "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const me = JSON.parse(jsonString);
        console.log("My name is:", me.fname , me.lname);
        console.log("I live in:", me.address);
        console.log('i go to ', me.college, ' college.')
    } 
    catch (err) { console.log("Error parsing JSON string:", err); }
});