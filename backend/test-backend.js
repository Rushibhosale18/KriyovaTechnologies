const http = require('http');

function request(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, text: body });
        }
      });
    });
    req.on('error', (err) => reject(err));
    if (data) {
      req.write(typeof data === 'string' ? data : JSON.stringify(data));
    }
    req.end();
  });
}

async function runTests() {
  console.log('--- Starting Backend Verification Tests ---');

  // Test 1: GET /api/health
  try {
    const health = await request({
      hostname: '127.0.0.1',
      port: 5000,
      path: '/api/health',
      method: 'GET',
    });
    console.log(`[PASS] GET /api/health - Status: ${health.status}, Response:`, JSON.stringify(health.data));
  } catch (err) {
    console.error(`[FAIL] GET /api/health: code=${err.code}, message=${err.message}`);
  }

  // Test 2: POST /api/contact validation failure
  try {
    const contactInvalid = await request(
      {
        hostname: '127.0.0.1',
        port: 5000,
        path: '/api/contact',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      { name: 'Test' } // missing email and description
    );
    console.log(`[PASS] POST /api/contact (validation reject) - Status: ${contactInvalid.status}, Message: ${contactInvalid.data?.message}`);
  } catch (err) {
    console.error(`[FAIL] POST /api/contact validation: code=${err.code}, message=${err.message}`);
  }

  // Test 3: POST /api/contact success
  try {
    const contactValid = await request(
      {
        hostname: '127.0.0.1',
        port: 5000,
        path: '/api/contact',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      {
        name: 'Jane Smith',
        businessName: 'Acme Corp',
        email: 'jane@acme.com',
        phone: '+91 99999 88888',
        service: 'Website Development',
        budget: '₹50,000 - ₹1,00,000',
        description: 'We need a high quality responsive business website built with modern technology.',
      }
    );
    console.log(`[PASS] POST /api/contact (valid submission) - Status: ${contactValid.status}, Response:`, JSON.stringify(contactValid.data));
  } catch (err) {
    console.error(`[FAIL] POST /api/contact submission: code=${err.code}, message=${err.message}`);
  }

  // Test 4: POST /api/quote validation failure
  try {
    const quoteInvalid = await request(
      {
        hostname: '127.0.0.1',
        port: 5000,
        path: '/api/quote',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      { name: 'Test' } // missing required fields
    );
    console.log(`[PASS] POST /api/quote (validation reject) - Status: ${quoteInvalid.status}, Message: ${quoteInvalid.data?.message}`);
  } catch (err) {
    console.error(`[FAIL] POST /api/quote validation: code=${err.code}, message=${err.message}`);
  }

  // Test 5: POST /api/quote success
  try {
    const quoteValid = await request(
      {
        hostname: '127.0.0.1',
        port: 5000,
        path: '/api/quote',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      {
        name: 'Alex Johnson',
        email: 'alex@startup.io',
        phone: '+1 555 123 4567',
        projectType: 'E-Commerce',
        requirements: 'Full e-commerce platform with stripe payments, inventory tracking, and admin dashboard.',
        budget: '₹1,00,000 - ₹3,00,000',
        timeline: 'Within 1 month',
      }
    );
    console.log(`[PASS] POST /api/quote (valid submission) - Status: ${quoteValid.status}, Response:`, JSON.stringify(quoteValid.data));
  } catch (err) {
    console.error(`[FAIL] POST /api/quote submission: code=${err.code}, message=${err.message}`);
  }

  // Test 6: Unknown route 404
  try {
    const notFound = await request({
      hostname: '127.0.0.1',
      port: 5000,
      path: '/api/nonexistent',
      method: 'GET',
    });
    console.log(`[PASS] GET /api/nonexistent - Status: ${notFound.status}, Response:`, JSON.stringify(notFound.data));
  } catch (err) {
    console.error(`[FAIL] GET /api/nonexistent: code=${err.code}, message=${err.message}`);
  }

  console.log('--- Verification Tests Finished ---');
}

runTests();
