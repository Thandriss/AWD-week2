let msg = {
    msg: "Hello world"
};

let list = [{id: "dog"}, {id: "cat"}]
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const send = require("send");
let listValue = [];

app.get("/hello", (req, res) => {
    res.json(msg);
})

app.get("/echo/:id", (req, res) => {
    let id = req.params.id;
    let el = list.find(list => list.id === id);
    res.json(el);
})

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true })) ;

app.post("/sum", function(req, res) {
    const { numbers } = req.body  
    let MySum = 0;
    for(el in numbers){
        MySum += numbers[el];
        console.log(numbers[el])
    }
    let sumRes = {
        sum: MySum
    };
    res.send(sumRes);
});


app.post("/list", (req, res) => {
    const { text } = req.body; 
    console.log(text);
    listValue.push(text);
    let result = {
        list: listValue
    };
    res.send(result);
})


app.listen(port, () => console.log("Server listen"))