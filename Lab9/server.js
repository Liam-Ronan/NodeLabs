const { json } = require('express');
var express = require('express');
var app = express();
var fs = require('fs');

var student = {
    "id": 3,
    "firstName": "Jamie",
    "lastName": "Keogh",
    "course": "Irish",
    "year": 2023
}

app.get('/', function (req, res) {
    fs.readFile("./students.json", "utf-8", (err, data) => {
        if(err) {
            console.log("Error reading file", err)
        }
        res.send(data);
        // console.log(data);
    })
})

app.put('/addStudent', function(req, res) {
    let data = fs.readFileSync('./students.json')
    data = JSON.parse(data);
    data.push(student);

    fs.writeFile('./students.json', JSON.stringify(data), err => {
        if(err) throw err;
        res.send("new student added");
    })
})

app.delete('/deleteStudent', function(req, res) {
    fs.readFile("./students.json", "utf-8", (err, jsonString) => {
        if(err) {
            console.log("Error reading file");
        }
        let data = JSON.parse(jsonString);
        delete data[3];

        fs.writeFile('./students.json', JSON.stringify(data), err => {
            if(err) {
                console.log("Error writing file")
            }
        })
        res.send(data);
    })
})

app.get('/:id', function(req, res) {
    fs.readFile("./students.json", "utf-8", function(err, data) {
        if(err) {
            console.log("Error reading file", err)
        }
        const studentId = JSON.parse(data);
        res.send(JSON.stringify(studentId[req.params.id]));
    })
})

app.get('/lastname', function (req, res) {
    fs.readFile("./students.json", "utf-8", function(err, data) {
        if(err) {
            console.log("Error reading file")
        }
        const studentArray = JSON.parse(data);
        res.send(JSON.stringify(studentArray[1].lastName));
    })
}) 

app.get('/allLastNames', function (req, res) {
    fs.readFile("./students.json", "utf-8", function(err, data) {
        if(err) {
            console.log("Error reading all last names", err)
        }
        let studentsArray = JSON.parse(data);
        let lastNames = [];

        studentsArray.forEach(i => {
            let lastName = i.lastName;
            lastNames.push(lastName);
        });
        res.send(`Last names of the students are ${lastNames.join(', ')}`);
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})