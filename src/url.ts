import { baseUrl } from './constants';

export function url(link: string) {
  return `${baseUrl}${link}`;
}
