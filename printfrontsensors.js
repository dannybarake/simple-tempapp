var SerialPort = require('serialport');
const ReadlineFront = require('@serialport/parser-readline');
var serialPort = new SerialPort('/dev/ttyACM1', {
    baudRate: 9600
});

let tempfrontsensor1 = '286C08F80900007D';
let tempfrontsensor2 = '282099F80900000F';

const parserFront = serialPort.pipe(new ReadlineFront({delimiter: '\r\n'}))
parserFront.on('data', function (data) {
    if (data.includes(tempfrontsensor1)) {
        let value = data.trim().slice(-5);
        if (parseInt(value) >= 35) {
            document.getElementById('frontsensor1').className = 'text-danger';
        } else if (parseInt(value) >= 30) {
            document.getElementById('frontsensor1').className = 'text-secondary';
        } else {
            document.getElementById('frontsensor1').className = '';
        }
        document.getElementById('frontsensor1').innerText = value;
    }

    if (data.includes(tempfrontsensor2)) {
        let value = data.trim().slice(-5);
        if (parseInt(value) >= 35) {
            document.getElementById('frontsensor2').className = 'text-danger';
        } else if (parseInt(value) >= 30) {
            document.getElementById('frontsensor2').className = 'text-secondary';
        } else {
            document.getElementById('frontsensor2').className = '';
        }
        document.getElementById('frontsensor2').innerText = value;
    }
});
