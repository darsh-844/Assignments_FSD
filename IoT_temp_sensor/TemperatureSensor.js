const { EventEmitter } = require('events');

class TemperatureSensor extends EventEmitter {
  sendReading(temp) {
    console.log(`\n[Sensor Reading Received]: ${temp}°C`);
    if (temp < 30) this.emit('normalTemperature', temp);
    else if (temp <= 40) this.emit('highTemperature', temp);
    else this.emit('extremeTemperature', temp);
  }
}

module.exports = { TemperatureSensor };