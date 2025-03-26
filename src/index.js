import { embedAssets } from './components/embedAssets.js';
import { checkAndCreateFile } from './components/fileUtils.js';
import { generatePdf } from './components/generatePdf.js';
import { parseCVData } from './components/parseCVData.js';
import { parseHtml } from './components/parseHtml.js';

async function generateCV(cvDataFile, templateFile) {
  try {
    const cvData = await parseCVData(cvDataFile);
    let htmlContent = await parseHtml(templateFile, cvData);
    htmlContent = await embedAssets(htmlContent);

    const { firstName, lastName } = cvData;
    const fileName = `${firstName} ${lastName} CV ${new Date().toISOString().split('T')[0]}.pdf`;
    const filePath = await checkAndCreateFile(fileName);

    await generatePdf(htmlContent, filePath);
    console.log('PDF Generated at:', filePath);
  } catch (error) {
    console.error('Error generating CV:', error);
  }
}

generateCV('./src/templates/cv_data.json', './src/templates/cv_template.html');
