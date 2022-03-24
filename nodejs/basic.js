//================================ set up server without any response ==============================
/*
const http = require('http');
const port = 8000;


const server = http.createServer();

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port : ",port);
});
*/

//=============================== set up server with a response ==================================
// here we are returning the same response to all the request
/*
const http = require('http');
const port = 8000;

function requestHandler(req, res){
    console.log(req.url);

    res.end('Gotcha!');
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port : ", port);
});
*/


//============================== return different responses for different requests ============
// here we rendered simple html

/*
const http = require('http');
const port = 8000;

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200,{'content-type' : 'text/html'} );
    res.end('<h1 style ="color:red;">Gotcha!</h1>');
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port : ", port);
});
*/

//========================================
// now we are going to render html file eg. index.html

/*
const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200,{'content-type' : 'text/html'} );
    fs.readFile('./index.html', function(err,data){
        if(err)
        {
            console.log('error',err);
            return res.end('<h1>Error!</h1>');
        }

        return res.end(data);
    }
    );
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running on port : ", port);
});

*/
//rendering 404 file

/*const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200,{'content-type' : 'text/html'} );
    fs.readFile('./404.html', function(err,data){
        if(err)
        {
            console.log('error',err);
            return res.end('<h1>Error!</h1>');
        }

        return res.end(data);
    }
    );
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running on port : ", port);
});
*/

// redering both index.html and 404.html

const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200,{'content-type' : 'text/html'} );
    
    let filepath;
    switch(req.url)
    {
        case '/':          //home path 
            filepath = "./index.html"
            break;
        case '/index' :
            filepath = './index.html'
            break;
        default:
            filepath = './404.html'
    }



    fs.readFile(filepath,function(err, data)
    {
        if(err){
            console.log("error", err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running on port : ", port);
});
