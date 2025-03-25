import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

/**
 * Converts HTML to PDF and saves it in the downloads folder with a unique name.
 * @param {string} html - The HTML string to be converted.
 * @param {string} downloadPath - The folder path to save the PDF file.
 * @param {string} filename - The base name of the file (without extension).
 */
export const generatePdf = async (html, downloadPath, filename) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html);

  const filePath = await generateUniqueFilePath(downloadPath, filename);
  await page.pdf({ path: filePath, format: 'A4' });

  await browser.close();
  console.log(`PDF saved to ${filePath}`);
};

/**
 * Generates a unique file path by checking if a file with the same name exists.
 * @param {string} dir - The directory where the PDF will be saved.
 * @param {string} baseName - The base name of the PDF file.
 * @returns {Promise<string>} - The unique file path.
 */
const generateUniqueFilePath = async (dir, baseName) => {
  let count = 0;
  let filePath = path.join(dir, `${baseName}.pdf`);

  while (fs.existsSync(filePath)) {
    count++;
    filePath = path.join(dir, `${baseName}(${count}).pdf`);
  }

  return filePath;
};
