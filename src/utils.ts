import * as crypto from 'crypto';

/**
 * Generate MD5 hash of a string
 * @param str
 * @returns MD5 hash as a hexadecimal string
 */
export function md5(str: string): string {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}
