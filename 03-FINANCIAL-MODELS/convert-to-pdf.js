const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  const htmlPath = path.resolve('DLOOP_BUDGET_TECNICO_NORMAL_2026.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle2' });
  
  await page.pdf({
    path: 'DLOOP_BUDGET_TECNICO_NORMAL_2026.pdf',
    format: 'A4',
    margin: {
      top: '10mm',
      bottom: '10mm',
      left: '10mm',
      right: '10mm'
    },
    printBackground: true
  });
  
  console.log('PDF created: DLOOP_BUDGET_TECNICO_NORMAL_2026.pdf');
  await browser.close();
})();
