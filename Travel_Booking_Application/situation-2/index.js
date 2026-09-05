function fetchFlightServerA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ server: 'Server A', flight: 'FL-101 (Slow response)' });
    }, 1500);
  });
}

function fetchFlightServerB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ server: 'Server B', flight: 'FL-101 (Fast response)' });
    }, 500);
  });
}

async function getFastestFlight() {
  console.log('Fetching flights from Server A and Server B...\n');

  try {
    // Promise.race settles as soon as the FASTEST promise settles (fulfilled OR rejected)
    const fastestResult = await Promise.race([
      fetchFlightServerA(),
      fetchFlightServerB()
    ]);

    console.log('SUCCESS: First server responded!');
    console.log(`Source: ${fastestResult.server}`);
    console.log(`Flight Info: ${fastestResult.flight}`);
  } catch (error) {
    console.error('FASTEST SERVER FAILED');
    console.error(`Reason: ${error.message}`);
  }
}

getFastestFlight();