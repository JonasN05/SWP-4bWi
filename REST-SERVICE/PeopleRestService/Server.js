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
    res.send('Hello');
});


app.get('/people', (req, res) => {
    res.send(data);
});
app.get('/people/:id', (req, res) => {
    res.send(data[req.params.id - 1])
});
app.get('/db/people', async (req, res) => {
    try {
        let result = await db.query("select* from people");
        res.send(result);
    } catch (error) {
        res.status(404).send("An Error Occurred! " + error.message);
    }
});


app.post('/people', async (req, res) => {
    let person = req.body;

    let length = data.length + 1
    person.id = length
    console.log(person.name)

    data.push(person);
    res.send(person);
});
app.post('/db/people', async (req, res) => {
    let person = req.body;
    let sql = "insert into people(firstname, lastname) values(?,?)"
    try {
        let result = await db.query(sql, [person.firstname, person.lastname]);
        res.send(result);
    } catch (error) {
        res.status(404).send("An Error Occurred! " + error.message);
    }
});

app.delete('/db/people', async (req, res) => {
    let person = req.body;
    let sql = "DELETE FROM people WHERE id = ?;"
    try {
        let result = await db.query(sql, [person.id]);
        res.send(person);
    } catch (error) {
        res.status(404).send("An Error Occurred! " + error.message);
    }
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


