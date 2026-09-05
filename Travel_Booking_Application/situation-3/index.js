function getFlight() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ service: 'Flight', details: 'Flight 101' }), 1000);
  });
}

function getHotel() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ service: 'Hotel', details: 'Grand Plaza' }), 1500);
  });
}

function getCab() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Cab Service: Driver unavailable')), 800);
  });
}

function getInsurance() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ service: 'Insurance', details: 'Full Coverage' }), 500);
  });
}

async function getDashboardData() {
  console.log('Fetching all services...\n');

  // Promise.allSettled ALWAYS resolves after ALL promises are complete
  const results = await Promise.allSettled([
    getFlight(),
    getHotel(),
    getCab(),
    getInsurance()
  ]);

  console.log('=== SERVICE STATUS DASHBOARD ===');
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`[AVAILABLE] ${result.value.service}: ${result.value.details}`);
    } else {
      console.log(`[UNAVAILABLE] Service #${index + 1}: ${result.reason.message}`);
    }
  });
}

getDashboardData();