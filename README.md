# CV Generator

This project allows you to generate a professional CV in PDF format using a structured JSON file and an HTML template. The CV is styled and formatted dynamically based on the provided data.

## Features

- Generate a professional-looking CV in PDF format.
- Uses Handlebars.js for templating to dynamically populate CV content.
- Supports embedding images, fonts, and icons as base64.
- Automatically formats work experience, education, and skills sections.
- Ensures consistent styling and layout with CSS.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cv-generator.git
   cd cv-generator
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Setup

1. **Create your personal `cv_data.json` file**:

   - Copy `src/template/cv_data.example.json` to `src/template/cv_data.json`.
   - Edit `cv_data.json` with your personal information.
   - Follow the structure outlined in `cv_data.example.json` as a reference.

2. **Ensure `cv_data.json` is ignored by Git**:
   - The `.gitignore` file already excludes your `cv_data.json` file to prevent accidental commits of personal data.

## Usage

1. To generate a PDF version of your CV, run:

   ```bash
   npm start
   ```

2. The generated PDF will be saved in the `src/downloads` folder with a filename formatted as:
   ```
   <First Name> <Last Name> CV <YYYY-MM-DD>.pdf
   ```
   If a file with the same name already exists, an incrementing number will be appended (e.g., `CV(1).pdf`, `CV(2).pdf`).

## JSON Data Structure

Your `cv_data.json` file should follow this structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "currentRoleName": "Full-Stack Developer",
  "emailAddress": "example@example.com",
  "phoneNumber": "+11234567890",
  "location": "Location",
  "summary": "A concise summary about yourself (50 words max).",
  "education": [
    {
      "institutionName": "Example University",
      "qualification": "Bachelor of Science in Computer Science",
      "location": "City, Country",
      "start": "Jan 2015",
      "end": "Dec 2019"
    }
  ],
  "skills": [
    {
      "name": "HTML",
      "level": 100
    },
    {
      "name": "CSS",
      "level": 80
    }
  ],
  "languages": [
    {
      "name": "English",
      "level": 100
    },
    {
      "name": "German",
      "level": 40
    }
  ],
  "experience": [
    {
      "roleName": "Senior Developer",
      "companyName": "Company Name",
      "start": "2022-01-01",
      "end": null,
      "descriptions": [
        "Short description of responsibilities (15 words max)",
        "Short description of responsibilities (15 words max)"
      ],
      "skills": ["HTML", "CSS", "JavaScript"]
    }
  ]
}
```

### Key Fields

- `firstName` and `lastName`: Your full name.
- `currentRoleName`: Your current or most relevant job title.
- `emailAddress` and `phoneNumber`: Your contact details.
- `location`: Your general location (optional).
- `summary`: A brief personal summary.
- `education`: List of your educational qualifications.
- `skills`: A list of your key skills with proficiency levels.
- `languages`: Languages you speak and their proficiency levels.
- `experience`: Your work experience, including roles, companies, and responsibilities.

## Customization

### Editing the Template

The `cv_template.html` file defines the structure and layout of your CV. You can modify it to customize the design according to your preferences. The template uses Handlebars syntax to dynamically insert data from `cv_data.json`.

### Changing Fonts and Styling

The CSS file embedded in `cv_template.html` controls the styling of your CV. You can modify colors, fonts, and layouts as needed.

### Adding Profile Picture

To include a profile picture:

1. Place your image inside the `src/assets/images` folder.
2. Reference the image path in `cv_data.json` under a new `profilePicture` field, e.g., `"profilePicture": "../assets/images/profile.jpg"`.
3. Modify the `cv_template.html` to display the profile image dynamically.
