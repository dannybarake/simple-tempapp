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
        var table = document.getElementById("portlist");

        ports.forEach(function (port) {
            var row = table.insertRow('path');
            var cellPathKey = row.insertCell(0);
            var cellPathValue = row.insertCell(1);
            cellPathKey.innerText = 'Path';
            cellPathValue.innerHTML = port.path;

            var row = table.insertRow('manufacturer');
            var cellManuKey = row.insertCell(0);
            var cellManuValue = row.insertCell(1);
            cellManuKey.innerText = 'Manufacturer';
            cellManuValue.innerHTML = port.manufacturer;
        });
    }
});
