const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 3001 });
 
wss.on('connection', function connection(ws) {

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('response');

  ws.on('close', function close(data) {
    console.log('disconnected');
  });
});