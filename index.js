
var http = require('http');
var fs = require("fs");
var server;

fs.readFile('./index.html', function(err, html){

    if (err){
        throw err;
    }

    server = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    });

    var WebSocketServer = require('websocket').server;

    server.listen(3001, function() {
        console.log((new Date()) + ' Server is listening on port 3001');
    });

    wsServer = new WebSocketServer({
        httpServer: server
    });

    var count = 0;
    var clients = {};
    var map = {};

    wsServer.on('request', function(r){

        var connection = r.accept('echo-protocol', r.origin);
        var id = count++;
        clients[id] = connection;

        console.log((new Date()) + ' Connection accepted [' + id + ']');

        connection.on('message', function(message) {
            console.log(message);

            // The string message that was sent to us
            var msgString = message.utf8Data;

            // Loop through all clients
            for(var i in clients){
                // Send a message to the client with the message
                clients[i].sendUTF("Server's response");

                if (clients[i] == this){
                    map[i] = {
                        client: clients[i],
                        message: message
                    }
                }
            }

        });

        connection.on('close', function(reasonCode, description) {
            delete clients[id];
            console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        });

    });
});


