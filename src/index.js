import fs from 'fs';
import { generateHtml } from './components/generateHtml.js';
import { generatePdf } from './components/generatePdf.js';

const jsonFilePath = './src/templates/cv_data.json';
const templateFilePath = './src/templates/cv_template.html';
const downloadPath = './src/downloads/';

fs.readFile(jsonFilePath, 'utf-8', async (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  const cvData = JSON.parse(data);
  const { firstName, lastName } = cvData;
  const currentDate = new Date().toISOString().split('T')[0];
  const filename = `${firstName} ${lastName} CV ${currentDate}`;

  try {
    const html = await generateHtml(jsonFilePath, templateFilePath);

    await generatePdf(html, downloadPath, filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
});
