import fs from 'fs';
import Handlebars from 'handlebars';
import { join } from "path";

/**
 * Parses the HTML template with Handlebars and populates it with CV data.
 * @param {string} templateFilePath - The path to the HTML template file.
 * @param {Object} cvData - The CV data to inject into the template.
 * @returns {Promise<string>} - Returns the rendered HTML content.
 */
export async function parseHtml(templateFilePath, cvData, theme) {
  return new Promise((resolve, reject) => {
    theme ||= cvData.theme;

    let theme_css = null;
    try {
      theme_css = fs.readFileSync(join('src/themes', theme + '.css')).toString('utf-8');
    } catch(_) {}

    fs.readFile(templateFilePath, 'utf-8', (err, template) => {
      if (err) reject('Error reading template file.');
      const compiledTemplate = Handlebars.compile(template);
      let result = compiledTemplate(cvData);

      if(theme_css) {
        result = result.replace(/<style>[\r\n]+(\s+)@page/, (_, indent) => {
          return `<style>\n${indent}${theme_css.replace(/\n/g, `\n${indent}`)}\n\n${indent}@page`;
        })
      }

      resolve(result);
    });
  });
}
