# CV Generator

This project allows you to generate a personalized CV in PDF format from a JSON file and an HTML template.

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
   - You can use the structure in the `cv_data.example.json` file as a guide.

2. **Ensure the `cv_data.json` is ignored by Git**:
   - The `.gitignore` file automatically ignores your `cv_data.json` file, so you don't accidentally commit your personal data.

## Usage

1. To generate a PDF of your CV, simply run:

   ```bash
   npm start
   ```

2. The PDF will be saved in the `src/downloads` folder, with a filename formatted as:
   ```
   <First Name> <Last Name> CV <YYYY-MM-DD>.pdf
   ```
   If a file with the same name already exists, a number will be appended to the filename (e.g., `CV(1).pdf`, `CV(2).pdf`).

## Example Data Structure

Here’s an example of the `cv_data.json` file structure:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "example@example.com",
  "phone": "+11234567890",
  "website": "https://www.johndoe.com",

  "experience": [
    {
      "jobTitle": "Software Engineer",
      "company": "Tech Corp",
      "startDate": "2021-01-01",
      "endDate": "2023-01-01",
      "description": "Worked on building scalable applications using Node.js and React."
    },
    {
      "jobTitle": "Frontend Developer",
      "company": "Web Solutions",
      "startDate": "2019-06-01",
      "endDate": "2020-12-31",
      "description": "Developed responsive websites using HTML, CSS, and JavaScript."
    }
  ],

  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "school": "Example University",
      "startDate": "2015-09-01",
      "endDate": "2019-06-30",
      "description": "Studied algorithms, software engineering, and web development."
    }
  ]
}

- `firstName` and `lastName`: Your personal name.
- `email`: Your email address.
- `phone`: Your phone number.
- `website`: Your personal or portfolio website.
- `experience`: An array of your work experience, with `jobTitle`, `company`, `startDate`, `endDate`, and `description` for each job.
- `education`: An array of your educational background, with `degree`, `school`, `startDate`, `endDate`, and `description` for each degree.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
