
import path from 'path'
import { Device } from './types';
import fs from 'fs'

const config = fs.readFileSync(path.join(__dirname, '../config.json'), 'utf-8')
const configObject: Record<string, any> = JSON.parse(config)

export const baseUrl = configObject.baseUrl || `https://dev-stuttgart-mp-v2.vercel.app`
export const screenshotPath = configObject.outputPath || path.join(__dirname, '/../screenshots');

export const pageLinks = configObject.pages || ['/'];
export const devices: Device[] = configObject.devices || [
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
];