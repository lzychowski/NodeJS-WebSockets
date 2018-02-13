# Node.js WebSocket Demo

This repo contains a tech demo of WebSckets based on http://codular.com/node-web-sockets tutorial using two different WebSocket npm packages.

https://www.npmjs.com/package/ws
https://www.npmjs.com/package/websocket

In addition, `ws` version is compatible out of the box with Java WebSocket client outlined in https://www.eclipse.org/jetty/documentation/9.3.x/jetty-websocket-client-api.html tutorial.  Files from the tutorial are also present in this repository.

## Setup

1. Run `npm install`
2. Run `node websockets.js` or 'node `ws.js`
3. Instantiate WebSocket in your browser console

### JavaScript client
``` javascript
var ws = new WebSocket('ws://localhost:3001', 'echo-protocol');
```

### Java Client
See java folder

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

# LAN or WAN setup

You can easily make this WebSocket server accessible over LAN or WAN by routing port traffic to the host machine (3000 in my case).  I was able run steps 3-5 on multiple comuputers connecting to a single LAN node.
