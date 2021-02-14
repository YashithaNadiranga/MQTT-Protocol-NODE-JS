const mqtt = require('mqtt');
var express = require("express");
var cors = require('cors')
var bodyParser = require("body-parser");
var app = express();
app.use(cors());
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'led'
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var server = app.listen(8080, '192.168.1.101',function () {
    console.log("app running on port.", server.address().port);
});// create a server


// declare client
const client = mqtt.connect('https://test.mosquitto.org', {
    clientId: 'yashitha'
});

// register "connect" callback
client.on('connect', function () {
    console.log('connected!');

    // subscribe to topic
    // client.subscribe('ResponceLED');

    //publish message every second
    setInterval(function () {
        connection.query(
            'SELECT * FROM `led_state`',
            function(err, results, fields) {
                var msgs = (results[0].states);
                client.publish('RADIO26574', msgs.toString());
            }
        );
    }, 1000);
});
app.get("/" , function(req,res){
    connection.query(
        'SELECT * FROM `led_state`',
        function(err, results) {
            res.json(results[0].states);
        }
    );

});

app.get("/on" , function(req,res){
    client.publish('LED26574', 'ON');
    res.json(1);
    connection.query(
        'UPDATE `led_state` SET states = 1 where led=1',
    );
});

app.get("/off" , function(req,res){
    client.publish('LED26574', 'OFF');
    res.json(0);
    connection.query(
        'UPDATE `led_state` SET states = 0 where led=1',
    );
});
// register "message" callback
client.on('message', function (topic, message) {
    // console.log(topic + ': ' + message.toString());
});
