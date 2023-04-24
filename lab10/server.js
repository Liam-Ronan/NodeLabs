var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require("body-parser");
const { json } = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    let name = "Liam Ronan";
    res.send(`Hi ${name}`);
})

app.get('/send', function(req, res) {
    res.sendFile('C:/Users/Liam/Labs/lab10/index.html');
})

app.post('/submit-player-data', function(req, res) {
    let playerName = req.body.name;
    console.log(playerName + " added successfully!");

    fs.readFile("./", "utf-8", function(err) {
        if(err) {
            console.log("Error reading file: ", err)
        }

        var player = {
            "name": req.body.name,
            "age": req.body.age,
            "nationality": req.body.nationality,
            "goals": req.body.goals,
            "assists": req.body.assists,
            "DOB": req.body.DOB,
            "height": req.body.height,
        }

        res.send(JSON.stringify(player));
    })
})

app.get('/send-data-file', function(req, res) {
    res.sendFile('C:/Users/Liam/Labs/lab10/sendData.html');
});

app.get('/averageGoals', function(req, res) {
    fs.readFile("./data/ManUnited.json", "utf8", (err, data) => {
        if(err) {
            console.log("error reading file:", err);
        }
        let avgGoals = JSON.parse(data);
        let avgNum = 0;

        avgGoals.forEach(avgGoal => {
            avgNum += avgGoal.goals;
        });

        var goalsRounded = Math.round(avgNum/(avgGoals.length))

        res.send(`The average goals scored by the players is: ${goalsRounded}`);
    })
});

app.post('/send-player-file', function(req, res) {
    let playerName = req.body.name;
    console.log(playerName + " added successfully!");

    fs.readFile("./", "utf-8", function(err) {
        if(err) {
            console.log("Error reading file: ", err)
        }

        var player = {
            "name": req.body.name,
            "age": req.body.age,
            "nationality": req.body.nationality,
            "goals": req.body.goals,
            "assists": req.body.assists,
            "DOB": req.body.DOB,
            "height": req.body.height,
        }

        res.send(JSON.stringify(player));
        fs.writeFile("./newPlayer.json", JSON.stringify(player), err => {
            if(err) {
                console.log("Error writing file: ", err);
            }
            else {
                console.log(player + " added to file")
            }
        })
    })
})

app.get('/json', function (req, res) {
    fs.readFile("./data/ManUnited.json", "utf-8", (err, data) => {
        if(err) {
            console.log("Error reading file: ", err)
        }
        res.send(data);
    })
})

app.get('/playerNames', function(req, res) {
    fs.readFile("./data/ManUnited.json", "utf-8", function(err, data) {
        if(err) {
            console.log("Error reading data", err)
        }
        let playerNames = JSON.parse(data);
        let firstNames = [];

        for(let i=0; i < playerNames.length; i++) {
            firstNames.push(playerNames[i].name);
        }
        res.send(`The first names of the players are: ${firstNames.join(', ')}`);
    })
})

app.get('/:id', function (req, res) {
    fs.readFile("./data/ManUnited.json", "utf-8", (err, data) => {
        // if(err) {
        //     console.log("Error reading file from disk:", err);
        // } 
        let player = JSON.parse(data);
        res.send(JSON.stringify(player[req.params.id]));
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)

})