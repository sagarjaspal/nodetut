const http = require('http')
const path = require('path')
const fs = require('fs')

const port = 3000
const host = 'localhost'

const server = http.createServer((req, res) => {
    console.log('something');
    console.log(req.headers);

    if(req.method == 'GET'){
        var fileUrl;
        if(req.url == '/')
            fileUrl = '/index.html';
        else
            fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        fs.exists(filePath, (exists) => {
            if(!exists){
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<html><body>Error 404: file not found</body></html>');
            }

            else{
                res.statusCode = 200;
                fs.createReadStream(filePath).pipe(res);
            }
        })
    }
});



server.listen(port, host, () => {
    console.log(`Listening to ${host}:${port}`);
});