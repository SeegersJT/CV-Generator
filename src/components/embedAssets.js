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

  htmlContent = await replaceAssetUrls(htmlContent, assetRegex);
  htmlContent = await replaceImageTags(htmlContent);

  return htmlContent;
}

/**
 * Replaces font and other asset URLs in the CSS with base64 encoded data URIs.
 * Dynamically determines the MIME type based on the file extension.
 * @param {string} htmlContent - The HTML content to modify.
 * @param {RegExp} regex - The regex to match asset URLs.
 * @returns {Promise<string>} - The modified HTML content with base64 encoded assets.
 */
async function replaceAssetUrls(htmlContent, regex) {
  return htmlContent.replace(regex, (match, url) => {
    const assetPath = path.resolve('./src/assets', url);
    const fileBuffer = fs.readFileSync(assetPath);

    // Get the file extension
    const extname = path.extname(assetPath).toLowerCase();
    let mimeType = '';

    // Dynamically determine the MIME type based on file extension
    switch (extname) {
      case '.woff2':
        mimeType = 'application/font-woff2';
        break;
      case '.woff':
        mimeType = 'application/font-woff';
        break;
      case '.ttf':
        mimeType = 'application/font-ttf';
        break;
      case '.otf':
        mimeType = 'application/font-opentype';
        break;
      default:
        mimeType = 'application/octet-stream'; // Fallback to binary
    }

    // Convert the file buffer to base64
    const base64Encoded = fileBuffer.toString('base64');

    // Return the modified URL with the correct data URI format
    return `url('data:${mimeType};base64,${base64Encoded}')`;
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
