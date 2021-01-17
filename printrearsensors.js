var SerialPort = require('serialport');
const ReadlineRear = require('@serialport/parser-readline');
var serialPortRear = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
});

// 28CEA33411190148 = mira
// 2861652F211901FC = tba
// 281E6D5427190193 = ven

let temprearsensor1 = '28CEA33411190148';
let temprearsensor2 = '2861652F211901FC';
let temprearsensor3 = '281E6D5427190193';

const parserRear = serialPortRear.pipe(new ReadlineRear({delimiter: '\r\n'}))
parserRear.on('data', function (data) {
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
});