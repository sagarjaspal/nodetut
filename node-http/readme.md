learnt to create server in node using http module

Learnings
- we pass a function to http.createServer() which takes req, res as arguments
- used path module, path.resolve() method
- important to use './' if we want to open a folder in same directory
- '/' always preceeds path
- fs.createReadStream(filePath).pipe(res) to output a file
- more code needed to be written than express, to set routes, fetch files etc. 