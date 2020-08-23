// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var SerialPort = require('serialport');
SerialPort.list().then((ports, err) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        console.log("ports found were ", ports);
        ports.forEach(function (port) {
            console.log(port.path);
            console.log(port.pnpId);
            console.log(port.manufacturer);
            document.getElementById('ports').innerHTML = port.path;
        });
    }
})
