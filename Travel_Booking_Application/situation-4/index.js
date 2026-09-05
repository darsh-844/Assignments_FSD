function fetchBackupServer1() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Server 1: 500 Internal Error')), 300);
  });
}

function fetchBackupServer2() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Server 2: Connection Timeout')), 600);
  });
}

function fetchBackupServer3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ server: 'Backup Server 3', flight: 'FL-999' });
    }, 1000);
  });
}

async function getFirstSuccessfulBackup() {
  console.log('Querying backup flight servers...\n');

  try {
    // Promise.any ignores all rejections until at least ONE promise fulfills successfully
    const successResult = await Promise.any([
      fetchBackupServer1(),
      fetchBackupServer2(),
      fetchBackupServer3()
    ]);

    console.log('SUCCESS: Retrieved flight data from backup system!');
    console.log(`Source: ${successResult.server}`);
    console.log(`Flight Info: ${successResult.flight}`);
  } catch (error) {
    // Rejects ONLY if ALL input promises fail (throws AggregateError)
    console.error('ALL BACKUP SERVERS FAILED');
    console.error(error.errors);
  }
}

getFirstSuccessfulBackup();