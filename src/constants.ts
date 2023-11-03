
import path from 'path'
import { Device } from './types';

export const baseUrl = `https://dev-stuttgart-mp-v2.vercel.app`

export const screenshotPath = path.join(__dirname, '/../screenshots');

export const pageLinks = [
    '/',
    '/collectibles',
    '/perks',
    '/legal/privacy-policy',
    '/legal/terms-conditions'
];

export const devices: Device[] = [
    {
      name: 'iPad Pro',
      width: 1024,
      height: 1366,
      deviceScaleFactor: 2,
    },
    {
      name: 'iPhone SE',
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
    },
    {
      name: 'MacBook Pro',
      width: 1280,
      height: 800,
      deviceScaleFactor: 2,
    },
    // Add more devices as needed
];