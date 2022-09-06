/*
 * @Author: chase shao4598@outlook.com
 * @Date: 2022-09-06
 * @LastEditors: chase shao4598@outlook.com
 * @LastEditTime: 2022-09-06
 * @FilePath: /atmosphere.js-node-fork/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var global = (function() { return this; })();

if (typeof global.window === 'undefined') {
    // create a custom window object to emulate the normal browser window
    var window = {navigator:{userAgent:"atmosphere-fork.js"},document:{},location:{},JSON:JSON};

    window.WebSocket = require("ws");
    window.EventSource = require("eventsource");
    window.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    global.window = window;

    global.WebSocket = window.WebSocket;
    global.EventSource = window.EventSource;
    global.navigator = window.navigator;
    global.document = window.document;
}

module.exports = require('./lib/atmosphere-fork');
