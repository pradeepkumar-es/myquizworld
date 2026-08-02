# MyQuizWorld

MyQuizWorld is a React + Vite quiz application where users can browse quiz categories, answer multiple-choice questions, track progress, and review detailed results at the end of each session.

## Current Features

- Category-based quiz selection
- Quiz flow with multiple-choice questions
- Timer and per-question progress tracking
- Difficulty selector for quiz rounds
- Question navigation via sidebar
- Score calculation and submission flow
- Result modal with answer-by-answer review
- OpenTDB API fetching with local fallback data when the API is unavailable
- Responsive navigation and layout

## Tech Stack

- React 18
- Vite
- React Router DOM
- Firebase
- CSS Modules and regular CSS
- Open Trivia DB API

## App Flow

The application currently includes these active routes:

- / → Home page
- /categories → Quiz category list
- /categories/quiz?category=... → Active quiz page

The project also contains additional pages such as About, Blog, Contact, Sign In, and Sign Up, but those routes are currently commented out in the app router.

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
├── firebase.js
├── Components/
│   ├── layout/
│   │   ├── Footer.jsx
│   │   ├── Navabar.jsx
│   │   └── header.css
│   └── ui/
│       ├── Button.jsx
│       └── Button.module.css
├── features/
│   └── quiz/
│       ├── components/
│       │   ├── CategoryCard.jsx
│       │   ├── layout/
│       │   │   ├── QuizSidebar.jsx
│       │   │   └── quizSidebar.module.css
│       │   └── ui/
│       │       ├── NumberBtn.jsx
│       │       ├── TimerProgressBar.jsx
│       │       └── timerProgressBar.module.css
│       ├── data/
│       │   └── mockQuestions.js
│       ├── pages/
│       │   ├── Categories.jsx
│       │   ├── Home.jsx
│       │   ├── Quiz.jsx
│       │   ├── QuizResult.jsx
│       │   ├── result.module.css
│       │   └── ...other page files
│       ├── services/
│       │   └── quizAPI.js
│       └── utils/
│           ├── calculateSolvedNum.js
│           ├── calculateVisitedNum.js
│           ├── decodeHTML.js
│           └── shuffleCollection.js
└── public/
```

## Data and API Behavior

- Questions are loaded from the Open Trivia DB API.
- The app caches quiz results to avoid repeated fetches.
- If the API fails or returns no question set, the app falls back to local mock data from [src/features/quiz/data/mockQuestions.js](src/features/quiz/data/mockQuestions.js).

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
```

This generates the production bundle in the dist folder.

## Notes

- Some UI pieces are implemented but currently disabled in the router for later expansion.
- Firebase is included in the project dependencies and may be used later for authentication or persistent data features.
- The app is currently focused on the quiz experience rather than full backend integration.
