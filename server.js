let msg = {
    msg: "Hello world"
};

let list = [{id: "dog"}, {id: "cat"}]
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

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
    console.log('receiving data ...');
    const { numbers } = req.body  
    console.log(numbers[2])
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


app.listen(port, () => console.log("Server listen"))