import fs from 'fs';
import handlebars from 'handlebars';

/**
 * Generates HTML from a template using the data from the JSON file.
 * @param {string} jsonFilePath - Path to the .json file.
 * @param {string} templateFilePath - Path to the .html template file.
 * @returns {Promise<string>} - The generated HTML string.
 */
export const generateHtml = async (jsonFilePath, templateFilePath) => {
  const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
  const templateSource = fs.readFileSync(templateFilePath, 'utf-8');

  const template = handlebars.compile(templateSource);

  return template(data);
};
