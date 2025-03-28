import { embedAssets } from './components/embedAssets.js';
import { parseCVData } from './components/parseCVData.js';
import { parseHtml } from './components/parseHtml.js';

import http from "http";

const cvDataPath = './src/templates/cv_data.jsonc';
const cvTemplatePath = './src/templates/cv_template.html';

http.createServer({}, async (req, res) => {
  if(req.url.match(/^\/\??/)) {
    const theme = new URL('http://127.0.0.1' + req.url).searchParams.get('theme');

    const cvData = await parseCVData(cvDataPath);
    let htmlContent = await parseHtml(cvTemplatePath, cvData, theme);
    htmlContent = await embedAssets(htmlContent);

    res.write(htmlContent);
    res.end();
  }

  res.statusCode = 404;
  res.end();
}).listen(10000, () => {
  console.log(`CV Preview page listening at http://localhost:10000`);
});
