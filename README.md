# Node.js WebSocket Demo

This repo contains a tech demo of WebSckets based on http://codular.com/node-web-sockets tutorial.

## Setup

1. Run `npm install`
2. Run `npm start`
3. Instantiate WebSocket in your browser console

``` javascript
var ws = new WebSocket('ws://localhost:3000', 'echo-protocol');
```

4. Bind server response message to console.log

``` javascript
ws.onmessage = function(event){ 
    console.log(JSON.stringify(event.data));
};
```

5. Send message to server

``` javascript
ws.send("message")
```
