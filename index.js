const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Word!! This is My coding website!!');
});


const users = [
    { id: 1, name: 'Sruti Hasan', email: 'srutihasan@gmail.com', number: '017222222' },
    { id: 2, name: 'Puja Hegu', email: 'pujahegu123@gmail.com', number: '017333333' },
    { id: 3, name: 'Kjol Awarel', email: 'kajolawarel235@gmail.com', number: '017444444' },
    { id: 4, name: 'Tammana Vatiya', email: 'tamannavatiya@gmail.com', number: '017555555' },
    { id: 5, name: 'Rasmika Mandalal', email: 'rasmikamandalal@gmail.com', number: '017666666' }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);

    } else {
        res.send(users);
    }
})


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})


app.post('/users', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port)
})