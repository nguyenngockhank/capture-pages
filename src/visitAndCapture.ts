import { Page } from 'puppeteer';
import { screenshotPath } from './constants';
import { Device } from './types';
import { nameByLink } from './nameByLink';
import { url } from './url';

export async function visitAndCapture(page: Page, device: Device, link: string) {
  await page.goto(url(link));
  await page.screenshot({
    path: screenshotPath + '/' + nameByLink(link, device),
    fullPage: true
  });
}
