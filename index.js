const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1800,
    height: 900,
    deviceScaleFactor: 1,
  });
  await page.goto('https://www.google.com');
  const elementHandle = await page.$('input');
await elementHandle.type('qa engineering');
await elementHandle.press('Enter');
await page.waitForTimeout(4000)
  await page.screenshot({path: 'screenshot.png'});
  
  await browser.close();
})();