const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

const db = require("./db");


const data = [
    { id: 1, name: "Hans", age: 17 },
    { id: 2, name: "Luca", age: 18 },
    { id: 3, name: "Peter", age: 32 },
    { id: 4, name: "Noel", age: 3 }
]


app.get('/', async (req, res) => {
    //res.send('Hello');
    let result = await db.query("Select* from people");
    res.send(result)
});


app.get('/people', (req, res) => {
    res.send(data);
});
app.get('/people/:id', (req, res) => {
    res.send(data[req.params.id - 1])
});

app.post('/people', (req, res) => {
    let person = req.body;

    let length = data.length + 1
    person.id = length
    console.log(length)

    data.push(person);
    res.send(person);
});

app.put('/people/:id', (req, res) => {
    console.log(req.params.id);

    let indexFromData = data.findIndex(person => person.id == req.params.id);
    data[indexFromData].name = req.body.name
    //data[indexFromData].age = req.body.age

    console.log(indexFromData)
    res.send(data[indexFromData]);
})


app.listen(port, () => {
    //console.log(`Hello world app listening on port ${port}!`)
})


