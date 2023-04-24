var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/', function(req, res) {
    console.log("Got a GET request")
    res.sendFile('C:/Users/Liam/Labs/Lab9a/index.html');
})

app.post('/submit-student-data', function(req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    console.log(name + ' Submitted successfully!');
    fs.readFile("./", "utf8", function(err, data) {
        if(err) {
            console.log("error reading file:", err)
        }
        var student = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "course": req.body.course,
            "year": req.body.year,
        }
        res.send(JSON.stringify(student));
        fs.writeFile("./newStudent.json", JSON.stringify(student), err => {
            if(err) {
                console.log("Error writing file: ", err);
            }
        })
    });
})