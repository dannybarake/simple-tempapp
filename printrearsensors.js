var SerialPort = require('serialport');
const ReadlineRear = require('@serialport/parser-readline');
var serialPortRear = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
});

let temprearsensor1 = '286C08F80900007D';
let temprearsensor2 = '282099F80900000F';
let temprearsensor3 = '282099F80900000F';

const parserRear = serialPortRear.pipe(new ReadlineRear({delimiter: '\r\n'}))
parserRear.on('data', function (data) {
    console.log(data)
    if (data.includes(temprearsensor1)) {
        let value = data.trim().slice(-5);
        if (parseInt(value) >= 35) {
            document.getElementById('rearsensor1').className = 'text-danger';
        } else if (parseInt(value) >= 30) {
            document.getElementById('rearsensor1').className = 'text-secondary';
        } else {
            document.getElementById('rearsensor1').className = '';
        }
        document.getElementById('rearsensor1').innerText = value;
    }

    if (data.includes(temprearsensor2)) {
        let value = data.trim().slice(-5);
        if (parseInt(value) >= 35) {
            document.getElementById('rearsensor2').className = 'text-danger';
        } else if (parseInt(value) >= 30) {
            document.getElementById('rearsensor2').className = 'text-secondary';
        } else {
            document.getElementById('rearsensor2').className = '';
        }
        document.getElementById('rearsensor2').innerText = value;
    }

    if (data.includes(temprearsensor3)) {
        let value = data.trim().slice(-5);
        if (parseInt(value) >= 35) {
            document.getElementById('rearsensor3').className = 'text-danger';
        } else if (parseInt(value) >= 30) {
            document.getElementById('rearsensor3').className = 'text-secondary';
        } else {
            document.getElementById('rearsensor3').className = '';
        }
        document.getElementById('rearsensor3').innerText = value;
    }
    // data.trim().slice(-5)
});