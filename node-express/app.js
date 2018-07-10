const express = require('express')

const app = express()
const port = 3000
const host = 'localhost'

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + req.url);
    console.log(req.headers);
});

app.get('/*', (req, res) => {
    res.send('<html><body><h1>Error 404: file not found</h1></body></html>')
})

app.listen(port, host, ()=>{
    console.log(`Listening on ${host}:${port}`);
});