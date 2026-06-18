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
const quizPage = lazy(()=>import("../src/features/quiz/pages/Quiz"))
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Navabar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/categories" element={<Categories />} exact />
            <Route path="/categories/quiz" element={
              <Suspense fallback={<div>Loading...</div>}><Quiz/></Suspense>
            } exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/blog" element={<Blog />} exact />
            <Route path="/contact" element={<Contact />} exact />
            {/* <Route path="/signup" element={<Signup/>}  exact/> */}
            {/* <Route path="/signin" element={<SignIn/>} exact/> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
