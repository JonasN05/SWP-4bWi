const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

const db = require("./db");

app.get('/', async (req, res) => {
    res.send('Working');
});

