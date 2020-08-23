var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var serialPort = new SerialPort('/dev/tty.usbmodem1431101', {
    baudRate: 9600
});
const parser = serialPort.pipe(new Readline({delimiter: '\r\n'}))
parser.on('data', function (data) {
    console.log(data)
});