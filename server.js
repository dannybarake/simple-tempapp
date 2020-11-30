var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var serialPort = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
});

let tempsensor1 = '286C08F80900007D';
let tempsensor2 = '282099F80900000F';

const parser = serialPort.pipe(new Readline({delimiter: '\r\n'}))
parser.on('data', function (data) {
    console.log(data)
    if (data.includes(tempsensor1)) {
        console.log('tempsensor1: '. data.replace(tempsensor1, ''));
    }
    // console.log('tempsensor1: '.data.replace(tempsensor1, ''));
    // console.log('tempsensor2: '.data.replace(tempsensor2, ''));
});