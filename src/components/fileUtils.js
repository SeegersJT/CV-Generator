import fs from 'fs';
import path from 'path';

/**
 * Checks if the file already exists and appends a number to avoid overriding.
 * @param {string} fileName - The desired file name.
 * @returns {Promise<string>} - The unique file path.
 */
export async function checkAndCreateFile(fileName) {
  const dirPath = './src/downloads/';

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log('Downloads folder created at:', dirPath);
  }

  let filePath = path.join(dirPath, fileName);

  let fileIndex = 1;
  while (fs.existsSync(filePath)) {
    const extension = path.extname(fileName);
    const baseName = path.basename(fileName, extension);
    filePath = path.join(dirPath, `${baseName} (${fileIndex})${extension}`);
    fileIndex++;
  }

  return filePath;
}
