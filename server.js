let msg = {
    msg: "Hello world"
};

let list = [{id: "dog"}, {id: "cat"}]
const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    res.json(msg);
})

app.get("/echo/:id", (req, res) => {
    let id = req.params.id;
    let el = list.find(list => list.id === id);
    res.json(el);
})

app.post("/sum", function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
});


app.listen(port, () => console.log("Server listen"))