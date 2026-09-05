function registerListeners(sensor) {
  sensor.on('normalTemperature', (temp) => console.log(`[RECORD]: ${temp}°C logged.`));
  sensor.on('highTemperature', (temp) => console.log(`[WARNING]: ${temp}°C elevated.`));
  sensor.on('extremeTemperature', (temp) => console.log(`[EMERGENCY]: ${temp}°C critical!`));
}

module.exports = { registerListeners };