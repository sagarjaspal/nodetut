creating server in express

- less code than making server using http module
- var app = express() is crucial to build express app
- app.listen(port) makes server
- used res.sendFile(__dirname + req.url) to open a file instead of fs module
- simplified routing