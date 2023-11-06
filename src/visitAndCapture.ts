import { Page } from 'puppeteer';
import { screenshotPath } from './config';
import { Device } from './types';
import { nameByLink } from './nameByLink';
import { url } from './url';
import { createDeviceFolder } from './createDeviceFolder';

export async function visitAndCapture(page: Page, device: Device, link: string) {
  await page.goto(url(link));

  /**
  // Scroll to the bottom of the page
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  // Wait for 2 seconds
  await page.waitForTimeout(2000);
  */
  const destPath = createDeviceFolder(device)


  await page.screenshot({
    path: destPath + '/' + nameByLink(link, device),
    fullPage: true
  });
}
