import fs from 'fs';
import { JSONC } from './jsonc.js';

/**
 * Parses the CV data from the given JSON file.
 * @param {string} filePath - The path to the cv_data.json file.
 * @returns {Promise<Object>} - Returns a Promise that resolves to the parsed JSON object.
 */
export async function parseCVData(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject('Error reading CV data file.');

      resolve(JSONC.parse(data));
    });
  });
}
