// import logo from './logo.svg';
import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navabar from './elements/Navabar';
import Quizzes from './elements/Quizzes';
import Home from './elements/Home'
import Blog from './elements/Blog'
import About from './elements/About'
import Contact from './elements/Contact'
import Footer from './elements/Footer';


function App() {
  return (
   <>
   <Router>
       <Navabar/>
       <Routes>
        <Route path='/' element={<Home/>} exact/>
        
        <Route path='/' element={<Quizzes/>} exact/>
          
        
        <Route path='/' element={<About/>} exact/>
          
        
        <Route path='/' element={<Blog/>} exact/>
          
        
        <Route path='/' element={<Contact/>} exact/>
         
        
       </Routes>
  </Router>
  <Home/>
  <Footer/>

  </>
  )
}
 
export default App;
