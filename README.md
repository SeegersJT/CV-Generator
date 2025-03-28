# CV Generator

## Overview

The CV Generator is a Node.js-based tool that dynamically generates a CV in PDF
format. It leverages Handlebars for templating, Puppeteer for PDF generation,
and includes built-in asset embedding for fonts, images, and icons. The project
follows a modular ES Modules structure and is easily customizable.

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
│   │   ├── cv_data.jsonc     # The CV content in JSON format
│   │   ├── cv_template.html # Handlebars-based HTML template for the CV
│   ├── index.js             # Main entry point for CV generation
├── .prettierrc              # Prettier configuration for code formatting
├── eslint.config.mjs        # ESLint configuration for linting
├── package.json             # Project dependencies and scripts
├── README.md                # This file
```

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed, then clone the
repository and install dependencies:

```sh
npm install
```

## Usage

First set up your CV Data by following
[Setting up your JSON file](#setting-up-your-json-file) below.

#### PDF Generation

Run the following command to generate a CV:

```sh
npm start
```

The generated PDF will be saved in the `downloads/` folder with a filename
formatted as:

```
[FirstName] [LastName] CV [YYYY-MM-DD].pdf
```

To generate a CV with a theme, run the following:

```sh
npm start [theme]
```

example: `npm start crimson`

Learn more about themes [here](#theming)

#### Web Preview

Run the following command to start the web preview:

```sh
npm run preview
```

This will host a local web server [here](http://localhost:10000/) which shows
you what your generated PDF will look like.

This view is helpful for picking or editing themes.

A theme for the preview can be selected by adding `?theme=[NAME_HERE]` to the
end of the URL.

Example:
[http://localhost:10000?theme=crimson](http://localhost:10000?theme=crimson)

## Customizing the CV

#### Setting up your JSON file

If you don't have a `src/templates/cv_data.json` file, copy the
`cv_data.example.jsonc` file or rename the file to `cv_data.jsonc`.

#### Editing CV Data

The CV content is stored in `src/templates/cv_data.jsonc`. Modify this file to
update the CV details, such as personal information, skills, education, and work
experience.

#### Customizing the Template

The HTML template (`src/templates/cv_template.html`) uses Handlebars syntax for
dynamic content rendering. You can modify this file to change the layout or
structure of the CV.

## Theming

#### Changing the Theme

The CV supports multiple themes, including:

| Name         | Tag            |                   |
| ------------ | -------------- | ----------------- |
| Blue Wave    | `bluewave`     | The default theme |
| Crimson      | `crimson`      |                   |
| Gold         | `gold`         |                   |
| Verdant      | `verdant`      |                   |
| Eclipse      | `eclipse`      |                   |
| Eclipse Dark | `eclipse.dark` |                   |

The theme can be modified in your `cv_data.json` file.

You can also specify the theme when [running the script](#pdf-generation), or by
adding a URL parameter to the [web preview URL](#web-preview). This is helpful
for testing multiple themes quickly when using the web priview, or or when you
want to quickly export multiple CVs with different themes.

#### Creating or Modifying Themes

Themes are kept in the `src/themes` folder, and can modify the following values:

- Colors
- Roundedness (`border-radius` of most elements)
- Separate Header and Body Fonts

> TODO: Add more customization

To create a theme, simply copy `_example_theme_file.css`, name it according to
the [tag](#theme-tags) you'd like and modify the values.

##### Theme Tags

The theme tag is the file name, without the `.css`. It is good practice to keep
the theme tag name lowercase, with words separated by underscores.

For multiple variants of the same theme, add the variant type to the end of the
tag, starting with a period.

> Examples theme file names:
>
>     my_long_theme_name.css
>     my_long_theme_name.dark.css
>     my_long_theme_name.amoled.css

## Embedding Assets

Fonts, images, and icons are embedded as Base64 to ensure proper rendering in
PDFs. The `embedAssets.js` module handles this automatically.

## Code Style & Linting

This project uses ESLint and Prettier for code consistency. Run the following
commands for formatting and linting:

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

Feel free to fork the repository and submit pull requests with improvements or
new features.
