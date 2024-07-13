// import logo from './logo.svg';
import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navabar from './Components/Navabar';
import Quizzes from './Components/Quizzes';
import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import QuizClass5 from './Components/Quizzes/QuizClass5';
import QuizClass6 from './Components/Quizzes/QuizClass6';
import QuizClass7 from './Components/Quizzes/QuizClass7';
import QuizClass8 from './Components/Quizzes/QuizClass8';
import QuizClass9 from './Components/Quizzes/QuizClass9';
import QuizClass10 from './Components/Quizzes/QuizClass10';
import QuizClass11 from './Components/Quizzes/QuizClass11';
import QuizClass12 from './Components/Quizzes/QuizClass12';
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';

function App() {
  return (
   <>
   <Router>
      <Navabar/>
       <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/quizzes' element={<Quizzes/>} exact/>
        <Route path='/quizzes/quizclass5' element={<QuizClass5/>} exact/>
        <Route path='/quizzes/quizclass6' element={<QuizClass6/>} exact/>
        <Route path='/quizzes/quizclass7' element={<QuizClass7/>} exact/>
        <Route path='/quizzes/quizclass8' element={<QuizClass8/>} exact/>
        <Route path='/quizzes/quizclass9' element={<QuizClass9/>} exact/>
        <Route path='/quizzes/quizclass10' element={<QuizClass10/>} exact/>
        <Route path='/quizzes/quizclass11' element={<QuizClass11/>} exact/>
        <Route path='/quizzes/quizclass12' element={<QuizClass12/>} exact/>
        {/* </Route> */}
        <Route path='/about' element={<About/>} exact/>
        <Route path='/blog' element={<Blog/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>
        <Route path="/signup" element={<Signup/>}  exact/>
        <Route path="/signin" element={<SignIn/>} exact/>
       </Routes>

       
      <Footer/>
      
       {/* <Routes> */}
        {/* <Route path='/' element={<Home/>} exact/> */}
        {/* <Route path='/quizzes' element={<Quizzes/>} exact/> */}
        {/* <Route path='/about' element={<About/>} exact/>
        <Route path='/blog' element={<Blog/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/> */}
       {/* </Routes> */}
  </Router>
  </>
  )
}
 
export default App;
