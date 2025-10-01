const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const IV_LENGTH = 16;

/**
 * Encrypts a text using AES-256-CTR
 * @param {string} text Text to encrypt
 * @param {string} secret Secret key for encryption
 * @returns {string} Encrypted text
 */
function encrypt(text, secret) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const key = crypto.createHash('sha256').update(String(secret)).digest('base64').slice(0, 32);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

/**
 * Decrypts a text using AES-256-CTR
 * @param {string} hash Encrypted text to decrypt
 * @param {string} secret Secret key for decryption
 * @returns {string} Decrypted text
 */
function decrypt(hash, secret) {
    const [iv, encrypted] = hash.split(':');
    const key = crypto.createHash('sha256').update(String(secret)).digest('base64').slice(0, 32);
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(encrypted, 'hex')), decipher.final()]);
    return decrypted.toString();
}

module.exports = { encrypt, decrypt };