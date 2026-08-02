import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import Navabar from "./Components/layout/Navabar";
import Categories from "./features/quiz/pages/Categories";
import Home from "./features/quiz/pages/Home";
import Blog from "./features/quiz/pages/Blog";
import About from "./features/quiz/pages/About";
import Contact from "./features/quiz/pages/Contact";
import Footer from "./Components/layout/Footer";
import Quiz from "./features/quiz/pages/Quiz";
// import Signup from './Components/Signup';
// import SignIn from './Components/SignIn';

// Lazy loading keeps the quiz page from loading with the initial app bundle.
// This is helpful when the quiz page is heavy or when we want to improve initial performance.
const quizPage = lazy(() => import("../src/features/quiz/pages/Quiz"));

function App() {
  return (
    <>
      {/* Router wraps the whole app so every page can use route-based navigation. */}
      <Router>
        <div className="app">
          {/* Navigation appears on every page so users can move between sections easily. */}
          <Navabar />

          <Routes>
            {/* Home page is the landing screen for the application. */}
            <Route path="/" element={<Home />} exact />

            {/* Category page displays the list of available quiz topics. */}
            <Route path="/categories" element={<Categories />} exact />

            {/* Quiz page is wrapped in Suspense because it can load lazily. */}
            <Route
              path="/categories/quiz"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Quiz />
                </Suspense>
              }
              exact
            />

            {/* These routes are intentionally kept out for now. */}
            {/* <Route path="/about" element={<About />} exact /> */}
            {/* <Route path="/blog" element={<Blog />} exact /> */}
            {/* <Route path="/contact" element={<Contact />} exact /> */}
            {/* <Route path="/signup" element={<Signup/>}  exact/> */}
            {/* <Route path="/signin" element={<SignIn/>} exact/> */}
          </Routes>

          {/* Footer is shown across the app layout. */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
