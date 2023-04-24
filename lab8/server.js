
var express = require('express');
var app = express();
var fs = require("fs");

let count = 0;
var student = {"id": 3, "first_name": "Amy", "last_name": "Ronan", "course": "CS", "year": 2023}

app.get('/:id', function (req, res) {
    fs.readFile("./students.json", "utf-8", (err, jsonString) => {
        if(err) {
            console.log("Error reading file from disk");
        } 
        let data = JSON.parse(jsonString);
        res.send(JSON.stringify(data[req.params.id]));
    })
});

app.put('/', function (req, res) {
    
    let data = fs.readFileSync('./students.json')
    data = JSON.parse(data)
    data.push(student);
    

    fs.writeFile('./students.json', JSON.stringify(data), err => {
        if(err)  throw err;
        res.send("new data added");
    })

})

app.get('/secondstudentlastname', function(req, res) {
    fs.readFile("./students.json", "utf8", (err, jsonString) => {
        const data = JSON.parse(jsonString);
        res.send(JSON.stringify(data[1].last_name));
    })
})

app.post('/', function (req, res){
    console.log("Got a post request for the homepage");
    res.send('Hello post') 
})

app.get('/list_user', function(req, res){
    console.log('Got a GET request for /List_user');
    res.send('Page Listing');
})

app.get('/', function(req, res) {
    res.send('hello world');
})

app.get('/count', function(req, res) {
    res.send('the page has been refreshed ' + (count + 1) + " times");
    console.log(`the page has been refreshed ${count = count + 1} times`);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})