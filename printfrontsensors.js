var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var serialPort = new SerialPort('/dev/tty.usbmodem1431101', {
    baudRate: 9600
});

let tempsensor1 = '286C08F80900007D';
let tempsensor2 = '282099F80900000F';

const parser = serialPort.pipe(new Readline({delimiter: '\r\n'}))
parser.on('data', function (data) {
    // console.log(data)
    if (data.includes(tempsensor1)) {
        console.log('tempsensor1: ');
        console.log(data)
        document.getElementById('frontsensor1').innerText = data.trim().slice(-5);
    }
    if (data.includes(tempsensor2)) {
        console.log('tempsensor2: ');
        console.log(data)
        document.getElementById('frontsensor2').innerText = data.trim().slice(-5);
    }
    // data.trim().slice(-5)
});