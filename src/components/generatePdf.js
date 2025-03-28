import puppeteer from 'puppeteer';

/**
 * Generates a PDF from the HTML content and saves it to the specified path.
 * @param {string} htmlContent - The HTML content to convert into a PDF.
 * @param {string} outputPath - The path where the PDF will be saved.
 * @returns {Promise<void>}
 */
export async function generatePdf(htmlContent, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);

  let full_height = await page.evaluate(() => {return window.innerHeight});
  full_height = Math.floor(full_height / 297) * 297;

  let sidebar = await page.$('.sidebar-container');
  await sidebar.evaluate((el, { full_height }) => {el.style.height = full_height + 'mm'}, { full_height });

  await page.pdf({ path: outputPath, format: 'A4', printBackground: true });
  await browser.close();
}
