/* eslint-disable indent */
import fs from 'fs';
import path from 'path';

/**
 * Embeds fonts, icons, and images into the HTML as base64.
 * @param {string} htmlContent - The HTML content to embed assets into.
 * @returns {Promise<string>} - The modified HTML content with embedded assets.
 */
export async function embedAssets(htmlContent) {
  const assetRegex = /url\(["']?(.*?)["']?\)/g;

  // Replace fonts and other assets in URL format
  htmlContent = await replaceAssetUrls(htmlContent, assetRegex);

  // Replace image tags (like <img src="...">) with base64 encoded content
  htmlContent = await replaceImageTags(htmlContent);

  return htmlContent;
}

/**
 * Replaces font and other asset URLs in the CSS with base64 encoded data URIs.
 * @param {string} htmlContent - The HTML content to modify.
 * @param {RegExp} regex - The regex to match asset URLs.
 * @returns {Promise<string>} - The modified HTML content with base64 encoded assets.
 */
async function replaceAssetUrls(htmlContent, regex) {
  return htmlContent.replace(regex, (match, url) => {
    const assetPath = path.resolve('./src/assets', url);
    const fileBuffer = fs.readFileSync(assetPath);
    const base64Encoded = fileBuffer.toString('base64');
    return `url('data:application/font-woff2;base64,${base64Encoded}')`; // Assuming WOFF2 font type by default
  });
}

/**
 * Replaces image tags in the HTML with base64 encoded data URIs.
 * It dynamically determines the MIME type based on the file extension.
 * @param {string} htmlContent - The HTML content to modify.
 * @returns {Promise<string>} - The modified HTML content with base64 embedded images.
 */
async function replaceImageTags(htmlContent) {
  const imageTagRegex = /<img src="(.*?)"/g;

  return htmlContent.replace(imageTagRegex, (match, url) => {
    const imagePath = path.resolve('./src/assets', url);
    const fileBuffer = fs.readFileSync(imagePath);

    // Get file extension to determine MIME type
    const extname = path.extname(imagePath).toLowerCase();
    let mimeType = 'image/png'; // Default to PNG

    switch (extname) {
      case '.jpg':
      case '.jpeg':
        mimeType = 'image/jpeg';
        break;
      case '.gif':
        mimeType = 'image/gif';
        break;
      case '.svg':
        mimeType = 'image/svg+xml';
        break;
      case '.webp':
        mimeType = 'image/webp';
        break;
      // Add more image types if needed
      default:
        mimeType = 'image/png'; // Fallback MIME type
    }

    // Convert file to base64 and replace in HTML
    const base64Encoded = fileBuffer.toString('base64');
    return `<img src="data:${mimeType};base64,${base64Encoded}"`;
  });
}
