var express = require("express")
var app = express();
var Products = require("./product.json");
var PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple rest api');
});

//GET all list
app.get("/product/listall", (req, res) => {
    res.json(Products);
});

//GET detail by id
app.get("/product/:id", (req, res) => {
    res.json(Products.find((product) => {
        return req.params.id == product.id
    }))  
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});