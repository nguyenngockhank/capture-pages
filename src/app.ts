import puppeteer from 'puppeteer'
import { devices, pageLinks } from './constants';
import { visitAndCapture } from './visitAndCapture';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const device of devices) {
    console.log(`Testing viewport for ${device.name}`);
    await page.setViewport({
      width: device.width,
      height: device.height,
      deviceScaleFactor: device.deviceScaleFactor,
    });
    for(const link of pageLinks) {
        await visitAndCapture(page,device,  link)
      }
  }
  
  await browser.close();
})();


