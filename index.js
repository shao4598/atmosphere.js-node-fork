var global = (function() { return this; })();

if (typeof global.window === 'undefined') {
    var window = require("jsdom").jsdom().defaultView;
    window.WebSocket = require("ws");
    window.EventSource = require("eventsource");
    global.window = window;

    global.WebSocket = window.WebSocket;
    global.EventSource = window.EventSource;
    global.navigator = window.navigator;
    global.document = window.document;
}

module.exports = require('./lib/atmosphere');
