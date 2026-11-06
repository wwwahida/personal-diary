const express = require('express')

const app = express()

app.use(express.json())
app.use(express.static('public'))
const router = require('./routers/diary');

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Personal Diary !' });
})

app.use('/diary', router);

module.exports = app;