# Personal Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases professional experience, education, skills, projects, and a blog section. The project is fully responsive and features animations with Framer Motion.

## Project Structure

The project is organized into several components, each representing a section of the portfolio.

```
src/
├── components/
│   ├── About.tsx
│   ├── BlogsPage.tsx
│   ├── ContactPage.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── App.tsx
├── index.css
└── index.tsx
```

### Component Breakdown

*   **`App.tsx`**: The main component that assembles all the different sections of the portfolio.
*   **`Navbar.tsx`**: The navigation bar at the top of the page.
*   **`Hero.tsx`**: The hero section, which typically includes a greeting and a brief introduction.
*   **`Experience.tsx`**: Displays professional work experience.
*   **`Education.tsx`**: Shows educational background.
*   **`Skills.tsx`**: Lists technical skills.
*   **`Projects.tsx`**: Showcases personal or professional projects.
*   **`BlogsPage.tsx`**: A section for blog posts.
*   **`ContactPage.tsx`**: A form or section for getting in touch.
*   **`Footer.tsx`**: The footer of the page, containing links and copyright information.
*   **`LoadingSpinner.tsx`**: A loading animation that appears when the site is first loaded.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make edits.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

To customize the portfolio with your own information, you will need to edit the content within the respective components in the `src/components/` directory. For example, to change the projects displayed, you would edit `src/components/Projects.tsx`.

The images and other static assets are located in the `public/` directory. You can replace them with your own assets.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Framer Motion**: A React library for animations.
