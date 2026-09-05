// Simulates individual service calls returning Promises
function getFlight() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ service: 'Flight', details: 'Flight 101 (NYC to LON)' });
    }, 1000); // Responds in 1 sec
  });
}

function getHotel() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ service: 'Hotel', details: 'Grand Plaza Hotel (3 Nights)' });
    }, 1500); // Responds in 1.5 secs
  });
}

function getCab() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Toggle to true if you want to test failure condition
      const simulateFailure = false;

      if (simulateFailure) {
        reject(new Error('Cab Service Unavailable: No drivers nearby.'));
      } else {
        resolve({ service: 'Cab', details: 'Airport Pickup Taxi' });
      }
    }, 800); // Responds in 0.8 sec
  });
}

function getInsurance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ service: 'Insurance', details: 'Full Travel Coverage' });
    }, 500); // Responds in 0.5 sec
  });
}

module.exports = {
  getFlight,
  getHotel,
  getCab,
  getInsurance,
};