import fs from 'fs';
import Handlebars from 'handlebars';

/**
 * Parses the HTML template with Handlebars and populates it with CV data.
 * @param {string} templateFilePath - The path to the HTML template file.
 * @param {Object} cvData - The CV data to inject into the template.
 * @returns {Promise<string>} - Returns the rendered HTML content.
 */
export async function parseHtml(templateFilePath, cvData) {
  return new Promise((resolve, reject) => {
    fs.readFile(templateFilePath, 'utf-8', (err, template) => {
      if (err) reject('Error reading template file.');
      const compiledTemplate = Handlebars.compile(template);
      const result = compiledTemplate(cvData);
      resolve(result);
    });
  });
}
