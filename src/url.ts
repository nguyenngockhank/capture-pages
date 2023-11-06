import { baseUrl } from './config';

export function url(link: string) {
  return `${baseUrl}${link}`;
}
