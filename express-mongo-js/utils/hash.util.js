import { createHash } from 'node:crypto';

/**
 * Hashes a string using SHA256
 * @param {string} input - The string to hash
 * @returns {string} - The hashed string
 */
export function hashString(input) {
  try {
    if (typeof input !== 'string') throw new TypeError('Input must be a string');

    const hash = createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
  } catch (e) {
    throw new Error(`Hashing error: ${e.message}`);
  }
}

/**
 * Compare a string with a hash using SHA256
 * @param {string} input - The string to compare
 * @param {string} hash - The hash to compare
 * @returns {boolean} - True if the string matches the hash
 */
export function compareHash(input, hash) {
  try {
    if (typeof input !== 'string') throw new TypeError('Input must be a string');
    if (typeof hash !== 'string') throw new TypeError('Hash must be a string');
    if (hash.length !== 64) return false;

    const inputHash = hashString(input);
    return inputHash === hash;
  } catch (e) {
    throw new Error(`Hash comparison error: ${e.message}`);
  }
}
