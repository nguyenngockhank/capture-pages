import { Device } from './types';

export function nameByLink(link: string, device: Device) {
    const prefix = (() => {
        if (link === '/') {
            return 'home';
        }
        const segments = link.split('/');
        return segments[segments.length - 1];
    })();
   
    return appendExt(appendDeviceSize(prefix, device))
}

function appendDeviceSize(name: string, {width, height}: Device) {
    return `${name}-${width}x${height}`;
}

function appendExt(name: string) {
    return `${name}.png`;
}
