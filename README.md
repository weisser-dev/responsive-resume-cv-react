# Multilingual Resume Web App

![Web Version](web.png)
![Mobile Version](mob.png)

This project is a modern, responsive, and multilingual resume web application built with React. It is designed to be
highly configurable through simple JSON files and supports automatic theme detection, manual theme selection, and
dynamic content loading based on language preference.

## Table of Content

- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [Open Source](#open-source)
- [Note](#note)

## Features

- **Multilingual Support**: Languages can be configured in `config.json`. Available languages are automatically loaded
  from this configuration.
- **Theme Detection and Selection**: The application can automatically detect the user's preferred theme (light or dark)
  based on browser settings (`defaultTheme: auto` in `config.json`) or allow for manual theme selection.
- **Downloadable PDF**: Users can download their resume as a PDF on desktop versions.
- **Customizable Sections**: Titles for each section can be specified in `locales.json`.
- **CV Information**: User CV information is entered into `cv.json`.
- **Profile Image**: The profile image can be set by replacing `profile.jpg` in the public assets.
- **Configurable Title**: The website title can be changed in the `/public/index.html` file within the `<title>` tag.
- **Base URL Independence**: The web app is configured to run without a "baseurl", making it easy to deploy on various
  platforms.
- **Deployment Ready**: A `deploy.yml` file for GitHub Pages is included for easy CI/CD setup.

### ToDo´s:

- **CV Wizard**: Wizard which helps creating a new CV
- **More Themes**: Add additional Themes and more Themes options (like fonts for sections)

## Getting Started

To run the project locally in development mode, execute the following command:

`
npm run start`

To build the static content for production, use:

`npm run build`

## Configuration

- `config.json`: Configures the available languages and theme settings.
- `locales.json`: Contains the titles and content for each section in different languages.
- `cv.json`: Holds the personal information, education, experience, and other CV-related data.
- `themes`: Located in `/public/themes`, where you can customize or add new themes.

## Tech Stack

- **React**: A JavaScript library for building user interfaces, chosen for its component-based architecture.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, used for its scalability and
  developer experience.
- **HTML2Canvas**: A JavaScript library that allows for capturing the rendered HTML and styling of web components to
  generate images or PDFs.
- **jsPDF**: A library to generate PDF documents using JavaScript, enabling the download of the resume in PDF format.
- **CSS/SCSS**: Used for styling components with the ability to use variables, nested rules, mixins, and more for
  maintainable stylesheets.
- **GitHub Actions**: For continuous integration and deployment (CI/CD), allowing automated building and deployment to
  GitHub Pages.
- **LocalStorage**: To persist user preferences like theme and language selection across sessions.

## Project Structure

- `/public`: Contains the static files like themes, `index.html`, and images.
- `/src`:
    - `/components`: React components for each section of the resume, such as education, experience, and skills.
    - `/hooks`: Custom React hooks, for example, `useLanguage` to manage language state.
    - `/models`: TypeScript interfaces and types defining the structure of the CV data.
    - `/utils`: Utility functions, including the local loader for loading JSON data.
    - `App.tsx`: The main React component that wraps the entire application.
    - `config.json`: Configuration file to set available languages and theme preferences.
    - `index.tsx`: The entry point of the React application.
- `/themes`: Directory inside `/public` where different CSS theme files are stored.
- `deploy.yml`: GitHub Actions workflow for deployment.
- `package.json`: Lists dependencies, scripts, and project metadata.

The project is structured to promote ease of maintenance, scalability, and separation of concerns. Each part of the
resume is a component that can be individually customized or replaced as needed.

## Credits

This project is inspired by and adapted from the template provided
by [bedimcode](https://github.com/bedimcode/responsive-resume-cv-smith). The original design was rebuilt using React to
enhance its interactivity, responsiveness, multilingual capabilities, and configurability.

## Open Source

This project is open source and welcomes contributions from the community. Feel free to fork the repository, make your
changes, and submit a pull request.

## Note

Remember that this project is meant to serve as a starting point. You are encouraged to customize and extend it to fit
your needs and reflect your personal brand.

Readme.md generated by ChatGPT