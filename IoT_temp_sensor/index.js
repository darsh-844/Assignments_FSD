const { TemperatureSensor } = require('./TemperatureSensor.js');
const { registerListeners } = require('./listeners.js');

const sensor = new TemperatureSensor();
registerListeners(sensor);

[22, 35, 45].forEach(temp => sensor.sendReading(temp));