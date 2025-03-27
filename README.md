# CV Generator

## Overview

The CV Generator is a Node.js-based tool that dynamically generates a CV in PDF format. It leverages Handlebars for templating, Puppeteer for PDF generation, and includes built-in asset embedding for fonts, images, and icons. The project follows a modular ES Modules structure and is easily customizable.

## Features

- Parses JSON-based CV data
- Uses Handlebars for dynamic HTML template rendering
- Embeds fonts, icons, and images as Base64 for seamless PDF conversion
- Generates a PDF version of the CV using Puppeteer
- Supports multiple themes with customizable color schemes
- Provides CLI options for theme selection and output customization

## Project Structure

```
cv-generator/
├── src/                     # Source code directory
│   ├── assets/              # Contains fonts and images used in the CV
│   │   ├── fonts/           # Custom fonts for styling the CV
│   │   ├── images/          # Profile pictures and other graphical assets
│   ├── components/          # Helper modules for parsing and asset embedding
│   │   ├── embedAssets.js   # Converts images and fonts to Base64 for embedding
│   │   ├── fileUtils.js     # Utility functions for file handling
│   │   ├── generatePdf.js   # Handles PDF generation using Puppeteer
│   │   ├── parseCvData.js   # Parses JSON CV data into a structured format
│   │   ├── parseHtml.js     # Processes Handlebars templates into HTML
│   ├── downloads/           # Stores generated PDF CVs
│   ├── templates/           # Stores JSON data and HTML templates
│   │   ├── cv_data.json     # The CV content in JSON format
│   │   ├── cv_template.html # Handlebars-based HTML template for the CV
│   ├── index.js             # Main entry point for CV generation
├── .prettierrc              # Prettier configuration for code formatting
├── eslint.config.mjs        # ESLint configuration for linting
├── package.json             # Project dependencies and scripts
├── README.md                # This file
```

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed, then clone the repository and install dependencies:

```sh
npm install
```

## Usage

Copy the `cv_data.example.json` or rename the file to `cv_data.json` and edit the json to your liking.

Run the following command to generate a CV:

```sh
npm start
```

The generated PDF will be saved in the `downloads/` folder with a filename formatted as:

```
[FirstName] [LastName] CV [YYYY-MM-DD].pdf
```

### Customizing the CV

#### Editing CV Data

The CV content is stored in `src/templates/cv_data.json`. Modify this file to update the CV details, such as personal information, skills, education, and work experience.

#### Customizing the Template

The HTML template (`src/templates/cv_template.html`) uses Handlebars syntax for dynamic content rendering. You can modify this file to change the layout or structure of the CV.

#### Changing the Theme

The CV supports multiple themes, including:

- Bluewave (default)
- Crimson
- Gold
- Verdant
- Eclipse

You can specify the theme when running the script or modify the `theme` variable inside the `<script>` block in `cv_template.html`.

```
const theme = "bluewave";
```

#### Embedding Assets

Fonts, images, and icons are embedded as Base64 to ensure proper rendering in PDFs. The `embedAssets.js` module handles this automatically.

## Code Style & Linting

This project uses ESLint and Prettier for code consistency. Run the following commands for formatting and linting:

```sh
npm run format   # Auto-format code
npm run lint     # Check for linting issues
npm run lint:fix # Fix linting issues
```

## Dependencies

- [Handlebars](https://handlebarsjs.com/) - HTML templating engine
- [Puppeteer](https://pptr.dev/) - Headless browser for PDF generation
- [Prettier](https://prettier.io/) - Code formatting
- [ESLint](https://eslint.org/) - JavaScript linting
- [Commander](https://github.com/tj/commander.js/) - CLI argument parsing

## Contributing

Feel free to fork the repository and submit pull requests with improvements or new features.
