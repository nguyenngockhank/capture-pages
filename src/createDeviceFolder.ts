import path from "path"
import { screenshotPath } from "./config"
import { Device } from "./types"
import fs from 'fs'


export function createDeviceFolder(device: Device) {
    const destPath = path.join(screenshotPath, device.name) 
    if (!fs.existsSync(destPath)){
        fs.mkdirSync(destPath)
    }
    return destPath
}