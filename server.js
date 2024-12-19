// server.js

const { serve } = Bun;
const path = require('path');
const { readFileSync } = require('fs');
const ejs = require('ejs');

// Import Route Handlers
const homeHandler = require('./routes/home');
const aboutHandler = require('./routes/about');
const apiDataHandler = require('./routes/apiData');

// Define the port
const PORT = process.env.PORT || 3000;

// Middleware: Logger using Bun.write
async function logger(req) {
  const now = new Date().toISOString();
  const log = `[${now}] ${req.method} ${req.url}\n`;
  try {
    await Bun.write('access.log', log, { append: true });
  } catch (error) {
    console.error('Logging Error:', error);
  }
}

// Serve static files
function serveStatic(urlPath) {
  const relativePath = urlPath.startsWith('/') ? urlPath.slice(1) : urlPath;
  const filePath = path.join(__dirname, 'public', relativePath);

  try {
    const fileRef = Bun.file(filePath);
    
    // If favicon is not found, return a default response
    if (relativePath === 'favicon.ico') {
      return new Response(null, { status: 204 }); // No content
    }
    
    return new Response(fileRef);
  } catch (error) {
    // Handle other static file errors
    const html = renderTemplate('error', { status: 404, message: 'File Not Found' });
    return new Response(html, {
      status: 404,
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

// Function to render EJS templates
function renderTemplate(templateName, data = {}) {
  const templatePath = path.join(__dirname, 'views', `${templateName}.ejs`);
  const template = readFileSync(templatePath, 'utf-8');
  return ejs.render(template, data);
}

// Define routes
async function router(req) {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // Logging middleware
  await logger(req);

  // Static files and favicon
  if (
    pathname.startsWith('/css/') ||
    pathname.startsWith('/js/') ||
    pathname.startsWith('/images/') ||
    pathname === '/favicon.ico'
  ) {
    return serveStatic(pathname);
  }

  // Routes
  switch (pathname) {
    case '/':
      return homeHandler(req);
    case '/about':
      return aboutHandler(req);
    case '/api/data':
      return apiDataHandler(req);
    default:
      const html = renderTemplate('error', { status: 404, message: 'Not Found' });
      return new Response(html, {
        status: 404,
        headers: { 'Content-Type': 'text/html' },
      });
  }
}

// Create and start the server
serve({
  port: PORT,
  fetch: router,
  onError: (err) => {
    console.error('Server Error:', err);
  },
});

console.log(`Server is running at http://localhost:${PORT}`);
