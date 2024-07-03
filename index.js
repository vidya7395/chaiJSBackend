const express = require('express');
require('dotenv').config()

const app = express();


const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('slash route is called')
})

app.get('/twitter', (req, res)=>{
    res.send('twitter route is called')
})

app.get('/login', (req, res)=>{
    res.send(`<h1>Please login </h1>`)
})
app.get('/users', (req, res)=>{
    res.json({ user: 'vidya' })

})

app.listen(port, ()=>{
    console.log(`Example app is listening to the port ${port}`);
})
