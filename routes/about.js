// routes/about.js
const ejs = require('ejs');
const path = require('path');
const { readFileSync } = require('fs');

function renderTemplate(templateName, data = {}) {
  const templatePath = path.join(__dirname, '..', 'views', `${templateName}.ejs`);
  const template = readFileSync(templatePath, 'utf-8');
  return ejs.render(template, data);
}

async function aboutHandler(req) {
  const html = renderTemplate('about');
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}

module.exports = aboutHandler;
