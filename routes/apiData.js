// routes/apiData.js
async function apiDataHandler(req) {
    const data = {
      message: 'Hello from the API!',
      timestamp: new Date().toISOString(),
    };
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  module.exports = apiDataHandler;
  