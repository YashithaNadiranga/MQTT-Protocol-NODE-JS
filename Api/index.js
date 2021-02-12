const mqtt = require('mqtt');
var express = require("express");
var cors = require('cors')
var bodyParser = require("body-parser");
var app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var server = app.listen(8080, '192.168.1.101',function () {
    console.log("app running on port.", server.address().port);
});// create a server

// app.get("/", function(req, res) { // listens for requests to localhost:8080
//     res.send(data);
// });

// declare client
const client = mqtt.connect('https://test.mosquitto.org', {
    clientId: 'javascript:yashitha'
});

// register "connect" callback
client.on('connect', function () {
    console.log('connected!');

    // subscribe to topic
    client.subscribe('ResponceLED');

    //publish message every second
    // setInterval(function () {
    //     client.publish('RADIO', '1');
    // }, 3000);
});

app.get("/on" , function(req,res){
    client.publish('LED', 'ON');
    res.json("LEDON");
});

app.get("/off" , function(req,res){
    client.publish('LED', 'OFF');
    res.json("LEDOFF");
});
// register "message" callback
client.on('message', function (topic, message) {
    // console.log(topic + ': ' + message.toString());
});
