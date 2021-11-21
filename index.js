require('dotenv').config();
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer((req,res) => {
    const readFile = path => {
        try{
            return fs.readFileSync(path, 'utf-8')
        }catch(err){
            console.log(err);
        }
    }

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    switch(req.url){
        case "/" : 
            res.end(readFile('index.html'));
            break;
        case "/about":
            res.end(readFile('about.html'));
            break;
        case "/contact":
            res.end(readFile('contact-me.html'));
            break;
        default:
            res.end(readFile('404.html'));
    }
});

server.listen(port, () => console.log(`The server is runing on port ${port}`))