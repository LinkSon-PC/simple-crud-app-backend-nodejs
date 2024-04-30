require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require("./routes/product.route.js");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    res.send("Hello from Node API")
});

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_KEY}@node-api.e6o1nku.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Node-Api`)
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        });
        
    })
    .catch(() => {
        console.log("Connection failed!");
    });