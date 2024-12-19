// routes/home.js
const ejs = require('ejs');
const path = require('path');
const { readFileSync } = require('fs');

function renderTemplate(templateName, data = {}) {
  const templatePath = path.join(__dirname, '..', 'views', `${templateName}.ejs`);
  const template = readFileSync(templatePath, 'utf-8');
  return ejs.render(template, data);
}

async function homeHandler(req) {
  const html = renderTemplate('index');
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}

module.exports = homeHandler;
