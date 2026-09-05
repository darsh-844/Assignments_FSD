const {
  getFlight,
  getHotel,
  getCab,
  getInsurance,
} = require('./services.js');

async function buildTravelPackage() {
  console.log('Fetching complete travel package...\n');

  try {
    // Situation 1: Promise.all requires ALL promises to fulfill successfully
    const [flight, hotel, cab, insurance] = await Promise.all([
      getFlight(),
      getHotel(),
      getCab(),
      getInsurance(),
    ]);

    console.log('SUCCESS: All services retrieved successfully!\n');
    console.log('=== YOUR TRAVEL PACKAGE ===');
    console.log(`1. ${flight.service}: ${flight.details}`);
    console.log(`2. ${hotel.service}: ${hotel.details}`);
    console.log(`3. ${cab.service}: ${cab.details}`);
    console.log(`4. ${insurance.service}: ${insurance.details}`);
  } catch (error) {
    // Short-circuits here immediately if any single service fails
    console.error('PACKAGE GENERATION FAILED');
    console.error(`Reason: ${error.message}`);
    console.log('\nUser Display: "Unable to assemble complete package. Please try again later."');
  }
}

// Execute the function
buildTravelPackage();